from rest_framework import serializers
from .models import CustomReunion
from datetime import timedelta


class ReunionSerializer(serializers.ModelSerializer):
    class Meta:
        model = CustomReunion
        fields = ['room_id', 'creator','begin_time','end_time','num_participants','duration']
        extra_kwargs = {'creator': {'read_only': True}}

    def create(self,validated_data):
        user = self.context['request'].user

        # we do not need the end time and the duration upon the creation of a meeting
        # as these are provided and computed respectively in the end of a meeting.
        # this is done through a PUT API called in the frontend upon a call ending. 
        reunion = CustomReunion.objects.create(
            creator=user, 
            begin_time= validated_data['begin_time'],
            num_participants=validated_data['num_participants'],
            room_id= validated_data["room_id"]
        )
        return reunion


class ReunionUpdateSerializer(serializers.ModelSerializer):
    class Meta:
        model = CustomReunion
        fields = ['room_id', 'end_time', 'num_participants']
        extra_kwargs = {
            'room_id': {'required': True}, 
            'end_time': {'required': True}, 
            'num_participants': {'required': True}, 
        }

    def update(self, instance, validated_data):
        instance.end_time = validated_data.get('end_time', instance.end_time)
        instance.num_participants = validated_data.get('num_participants', instance.num_participants)
        instance.save()
        return instance