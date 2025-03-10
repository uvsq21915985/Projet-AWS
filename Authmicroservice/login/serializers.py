from rest_framework import serializers
from .models import CustomUser, CustomReunion

class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = CustomUser
        fields = ['username', 'email', 'password']
        extra_kwargs = {'password': {'write_only': True}}

    def create(self, validated_data):
        user = CustomUser(
            username=validated_data['username'],
            email=validated_data['email']
        )
        user.set_password(validated_data['password'])
        user.save()
        return user


class ReunionSerializer(serializers.ModelSerializer):
    class Meta:
        model = CustomReunion
        fields = ['name','creator','begin_time','end_time','num_participants','duration']
        extra_kwargs = {'creator': {'read_only': True}}
    def create(self,validated_data):
        user = self.context['request'].user
        reunion = CustomReunion.objects.create(
            name=validated_data['name'],
            creator=user, 
            begin_time=validated_data['begin_time'],
            end_time=validated_data['end_time'],
            num_participants=validated_data['num_participants'],
            duration=validated_data['duration']
        )
        return reunion

