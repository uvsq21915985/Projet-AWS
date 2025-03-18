from rest_framework import serializers
from .models import CustomUser
from django.core.validators import EmailValidator
import re

class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = CustomUser
        fields = ['username', 'email', 'password']
        extra_kwargs = {'password': {'write_only': True}}

    def validate_email(self, value):
        validator = EmailValidator(message="Invalid email address")
        validator(value)
        if CustomUser.objects.filter(email=value).exists():
            raise serializers.ValidationError("This email is already in use")
        return value

    def validate_password(self, value):
        errors = []
        if len(value) < 9:
            errors.append("Password must be at least 9 characters long")
        if not re.search(r'[a-z]', value):
            errors.append("Password must contain at least one lowercase letter")
        if not re.search(r'[A-Z]', value):
            errors.append("Password must contain at least one uppercase letter")
        if not re.search(r'[0-9]', value):
            errors.append("Password must contain at least one digit")
        if not re.search(r'[@$!%*?&]', value):
            errors.append("Password must contain at least one special character like @, $, !, %, *, ? or &")

        if errors:
            raise serializers.ValidationError(errors)

        return value

    def create(self, validated_data):
        user = CustomUser(
            username=validated_data['username'],
            email=validated_data['email']
        )
        user.set_password(validated_data['password'])
        user.save()
        return user



