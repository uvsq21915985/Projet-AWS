from rest_framework import status
from .serializers import UserSerializer
from rest_framework.authtoken.models import Token
from rest_framework_simplejwt.tokens import RefreshToken
from rest_framework_simplejwt.tokens import AccessToken
from rest_framework_simplejwt.authentication import JWTAuthentication
from django.contrib.auth import authenticate
from rest_framework.response import Response
from django.core.exceptions import ObjectDoesNotExist
from rest_framework.permissions import IsAuthenticated
from rest_framework.decorators import api_view, authentication_classes, permission_classes
from rest_framework.authentication import TokenAuthentication
from django.conf import settings
from .models import CustomUser
from django.views.decorators.csrf import csrf_exempt


@api_view(['POST'])
def register_user(request):
    if request.method == 'POST':
        serializer = UserSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    

@api_view(['POST'])
@authentication_classes([])
@permission_classes([]) 
def user_login(request):
    if request.method == 'POST':
        print("in user login")
        username = request.data.get('username')
        password = request.data.get('password')
        if not username:
            return Response(status=status.HTTP_400_BAD_REQUEST)
        if not password:
            return Response(status=status.HTTP_400_BAD_REQUEST)
        user = None
        user = authenticate(username=username, password=password)
        
        if '@' in username:
            try:
                user = CustomUser.objects.get(email=username)
            except ObjectDoesNotExist:
                pass
        if user:
            print("user log in")
            print(user)
            #token, _ = Token.objects.get_or_create(user=user)
            #print(token)
            #return Response({'token': token.key}, status=status.HTTP_200_OK)
           # token = CustomTokenObtainPairView.as_view()(request._request)
           # refresh = token.data.get('refresh')
            #access = token.data.get('access')
            refresh = RefreshToken.for_user(user)
            access_token = refresh.access_token
            refresh_token= str(refresh)
            response = Response({
            'message': 'Login successful'
#            ,'data': {'username': user.username}, 'token': {str(access_token)}
        }) 
            response.set_cookie(
                                    key = settings.SIMPLE_JWT['AUTH_COOKIE'], 
                                    value = str(access_token),
                                    expires = settings.SIMPLE_JWT['ACCESS_TOKEN_LIFETIME'],
                                    secure = settings.SIMPLE_JWT['AUTH_COOKIE_SECURE'],
                                    httponly = settings.SIMPLE_JWT['AUTH_COOKIE_HTTP_ONLY'],
                                    samesite = settings.SIMPLE_JWT['AUTH_COOKIE_SAMESITE']
            )
            response.set_cookie(
                                    key = settings.SIMPLE_JWT['AUTH_COOKIE_REFRESH'], 
                                    value = str(refresh_token),
                                    expires = settings.SIMPLE_JWT['REFRESH_TOKEN_LIFETIME'],
                                    secure = settings.SIMPLE_JWT['AUTH_COOKIE_SECURE'],
                                    httponly = settings.SIMPLE_JWT['AUTH_COOKIE_HTTP_ONLY'],
                                    samesite = settings.SIMPLE_JWT['AUTH_COOKIE_SAMESITE']
            )
            #csrf.get_token(request)
            print("sucessful")
         #   response.data = {"Success" : "Login successfully","data": {"username": user.username}}

            return response
        else:
            return Response({'error': 'invalid credentials'}, status=status.HTTP_401_UNAUTHORIZED)
    else:
        return Response(status=status.HTTP_405_METHOD_NOT_ALLOWED)

@api_view(['GET'])
#@authentication_classes([])  
@permission_classes([IsAuthenticated])
def validate_token(request):
    print("IN VALIDATE")
    print("Cookies :", request.COOKIES)
    token =  request.COOKIES.get(settings.SIMPLE_JWT['AUTH_COOKIE'])
    print(f"VALIDATE REQUEST : {token}")
    if not token:
        return Response({'error': 'No token found in cookies'}, status=status.HTTP_401_UNAUTHORIZED)
    try:
        validated_token = AccessToken(token)
        # The user's information is stored in the payload of the validated token
        user_id = validated_token['user_id']  # Access the user_id from the token
        # get user from database
        user = CustomUser.objects.get(id=user_id) 

    except Exception as e:
        print(f"Token validation failed: {str(e)}")  
        return Response({'error': 'Invalid or expired token'}, status=status.HTTP_401_UNAUTHORIZED)
    user_to_send = UserSerializer(user).data  
    return Response({'is_allowed':True,'user': user_to_send})


@api_view(['POST'])
@authentication_classes([])
@permission_classes([])
def user_logout(request):
    if request.method == 'POST':
        try:
            print("logout")
            refresh = request.COOKIES.get(settings.SIMPLE_JWT['AUTH_COOKIE_REFRESH'])
            print(f"token found: {refresh}")
            #access = request.COOKIES.get(settings.SIMPLE_JWT['AUTH_COOKIE'])
            if refresh:
                print("refresh exist")
                token_r = RefreshToken(refresh)
                print("TOKEN R {token_r}")
                #token_r.blacklist()
                response = Response({'message': 'Successfully logged out.'}, status=status.HTTP_200_OK)
                response.delete_cookie(settings.SIMPLE_JWT['AUTH_COOKIE'])
                response.delete_cookie(settings.SIMPLE_JWT['AUTH_COOKIE_REFRESH'])
                
                return response
            else:
                return Response({'error': 'No token found in cookies'}, status=status.HTTP_401_UNAUTHORIZED)
        except Exception as e:
            print(f"Error during logout: {str(e)}")
            return Response(status=status.HTTP_400_BAD_REQUEST)
        #try:
            # Delete the user's token to logout
         #   request.user.auth_token.delete()
          #  return Response({'message': 'Successfully logged out.'}, status=status.HTTP_200_OK)
        #except Exception as e:
         #   return Response({'error': str(e)}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)
    else:
        return Response(status=status.HTTP_405_METHOD_NOT_ALLOWED)

@api_view(['POST'])
@authentication_classes([])  
@permission_classes([])
def refresh_token(request):
    if request.method == 'POST':
      #  print(f"USER : {request.user}")
        refresh_token = request.COOKIES.get(settings.SIMPLE_JWT['AUTH_COOKIE_REFRESH'])
        if not refresh_token:
            return Response({'error': 'refresh token not found in cookies'}, status=status.HTTP_400_BAD_REQUEST)
        else:
            try:
                token_r = RefreshToken(refresh_token)
                new_access_token = token_r.access_token
                response = Response({'message': 'access token refreshed successfully'}, status=status.HTTP_200_OK)
                response.set_cookie(
                                    key = settings.SIMPLE_JWT['AUTH_COOKIE'], 
                                    value = str(new_access_token),
                                    expires = settings.SIMPLE_JWT['ACCESS_TOKEN_LIFETIME'],
                                    secure = settings.SIMPLE_JWT['AUTH_COOKIE_SECURE'],
                                    httponly = settings.SIMPLE_JWT['AUTH_COOKIE_HTTP_ONLY'],
                                    samesite = settings.SIMPLE_JWT['AUTH_COOKIE_SAMESITE']
                )
                return response
            except Exception as e:
                print(f"Error during refresh: {str(e)}")
                return Response(status=status.HTTP_400_BAD_REQUEST)
    else:
        return Response(status=status.HTTP_405_METHOD_NOT_ALLOWED)


