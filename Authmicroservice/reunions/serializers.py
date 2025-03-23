from rest_framework import serializers
from .models import CustomReunion
from datetime import timedelta
import random

def generate_random_id():
    while True:
        room_id = random.randint(1000000000, 9999999999)
        if not CustomReunion.objects.filter(room_id=room_id).exists():
            return room_id

class ReunionSerializer(serializers.ModelSerializer):
    class Meta:
        model = CustomReunion
        fields = ['room_id', 'creator','begin_time','end_time','num_participants','duration']
        extra_kwargs = {'creator': {'read_only': True}, 'room_id': {'read_only': True}}

    def create(self,validated_data):
        user = self.context['request'].user

        # we do not need the end time and the duration upon the creation of a meeting
        # as these are provided and computed respectively in the end of a meeting.
        # this is done through a PUT API called in the frontend upon a call ending.
        reunion = CustomReunion.objects.create(
            creator=user,
            begin_time= validated_data['begin_time'],
            num_participants=validated_data['num_participants'],
            room_id= generate_random_id()
        )
        return reunion


class ReunionUpdateSerializer(serializers.ModelSerializer):
    class Meta:
        model = CustomReunion
        fields = ['room_id', 'end_time', 'num_participants','ongoing']
        extra_kwargs = {
            'room_id': {'required': True},
            'end_time': {'required': True},
            'num_participants': {'required': True},
            'ongoing': {'read_only': True},
        }

    def update(self, instance, validated_data):
        instance.end_time = validated_data.get('end_time', instance.end_time)
        instance.num_participants = validated_data.get('num_participants', instance.num_participants)
        instance.ongoing = False
        print("Before save: ongoing =", instance.ongoing)
        instance.save()
        instance.refresh_from_db()
        print("After save: ongoing =", instance.ongoing)
        return instance
