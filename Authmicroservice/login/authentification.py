#from rest_framework.authentication import BaseAuthentication
from rest_framework_simplejwt.authentication import JWTAuthentication
from rest_framework.exceptions import AuthenticationFailed
from rest_framework_simplejwt.tokens import AccessToken
from django.conf import settings
from .models import CustomUser

class CustomJWTAuthentication(JWTAuthentication):
    def authenticate(self, request):
        # Look for the token in the cookies
        print("IN CUSTOMJWTAUTHENTIFICATION");
        token = request.COOKIES.get(settings.SIMPLE_JWT['AUTH_COOKIE'])
        print(f"token is {token}")
        
        if not token:
            raise AuthenticationFailed('Token not found in cookies')
        try:

            #validated_token = AccessToken(token)
            validated_token = self.get_validated_token(token)
            print(f" valided token is {validated_token}")
            # The user's information is stored in the payload of the validated token
            user_id = validated_token['user_id']  # Access the user_id from the token
            # get user from database
            user = CustomUser.objects.get(id=user_id)
            print(f"user is {user}")
            print(f"user password: {user.password}")
            return self.get_user(validated_token), validated_token
            #return (user,validated_token)
        except Exception as e:
            print(f"in exception {e}")
            raise AuthenticationFailed(f"Invalid token: {str(e)}")
        
