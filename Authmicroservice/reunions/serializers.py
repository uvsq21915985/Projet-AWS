from rest_framework import serializers
from .models import CustomReunion
from datetime import timedelta


class ReunionSerializer(serializers.ModelSerializer):
    class Meta:
        model = CustomReunion
        fields = ['name','creator','begin_time','end_time','num_participants','duration']
        extra_kwargs = {'creator': {'read_only': True}}
    def create(self,validated_data):
        user = self.context['request'].user
        duration_string = validated_data['duration']
       # hours, minutes, seconds = map(int, duration_string.split(':'))
        #duration = timedelta(hours=hours, minutes=minutes, seconds=seconds)

        reunion = CustomReunion.objects.create(
            name=validated_data['name'],
            creator=user, 
            begin_time= validated_data['begin_time'],
            end_time= validated_data['end_time'],
            num_participants=validated_data['num_participants'],
            duration=duration_string
        )
        return reunion

