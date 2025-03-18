#from rest_framework.authentication import BaseAuthentication
from rest_framework_simplejwt.authentication import JWTAuthentication
from rest_framework.exceptions import AuthenticationFailed
from rest_framework_simplejwt.tokens import AccessToken
from django.conf import settings
from .models import CustomUser

class CustomJWTAuthentication(JWTAuthentication):
    def authenticate(self, request):
        # Look for the token in the cookies
        token = request.COOKIES.get(settings.SIMPLE_JWT['AUTH_COOKIE'])
        if not token:
            raise AuthenticationFailed('Token not found in cookies')

        try:
            validated_token = self.get_validated_token(token)
            user_id = validated_token['user_id']
            try:
                user = CustomUser.objects.get(id=user_id)
            except CustomUser.DoesNotExist:
                # Ici on gere le cas ou l'utilisateur n'existe pas malgré un token apparant
                # A RETESTER
                raise AuthenticationFailed("User not found")
            return self.get_user(validated_token), validated_token
        except Exception as e:
            raise AuthenticationFailed(f"Invalid token: {str(e)}")
