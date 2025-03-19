from rest_framework import status
from .serializers import UserSerializer
from rest_framework_simplejwt.tokens import RefreshToken
from rest_framework_simplejwt.tokens import AccessToken
from rest_framework_simplejwt.authentication import JWTAuthentication
from django.contrib.auth import authenticate
from rest_framework.response import Response
from django.core.exceptions import ObjectDoesNotExist
from rest_framework.permissions import IsAuthenticated, AllowAny, IsAuthenticatedOrReadOnly
from rest_framework.decorators import api_view, authentication_classes, permission_classes
from django.conf import settings
from .models import CustomUser
from .authentification import CustomJWTAuthentication


@api_view(['POST'])
@permission_classes([AllowAny])
@authentication_classes([])
def register_user(request):
    if request.method == 'POST':
        serializer = UserSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    

@api_view(['POST'])
@permission_classes([AllowAny])
@authentication_classes([])
def user_login(request):
    if request.method == 'POST':
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
            refresh = RefreshToken.for_user(user)
            access_token = refresh.access_token
            refresh_token= str(refresh)
            response = Response({
            'message': 'Login successful'
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
            return response
        else:
            return Response({'error': 'invalid credentials'}, status=status.HTTP_401_UNAUTHORIZED)
    else:
        return Response(status=status.HTTP_405_METHOD_NOT_ALLOWED)


@api_view(['GET'])
@authentication_classes([CustomJWTAuthentication]) 
@permission_classes([IsAuthenticated])
def validate_token(request):
    token =  request.COOKIES.get(settings.SIMPLE_JWT['AUTH_COOKIE'])
    if not token:
        return Response({'error': 'No token found in cookies'}, status=status.HTTP_401_UNAUTHORIZED)
    try:
        user_id = request.user.id
        print(f"USER ID{user_id}")
        user = CustomUser.objects.get(id=user_id) 

    except Exception as e:
        print(f"Token validation failed: {str(e)}")  
        return Response({'error': 'Invalid or expired token'}, status=status.HTTP_401_UNAUTHORIZED)
    user_to_send = UserSerializer(request.user).data  
    return Response({'is_allowed':True,'user': user_to_send})


@api_view(['POST'])
@permission_classes([IsAuthenticatedOrReadOnly])  # ensure only logged-in users can log out
def user_logout(request):
    try:
        refresh = request.COOKIES.get(settings.SIMPLE_JWT['AUTH_COOKIE_REFRESH'])

        if not refresh:
            return Response({'error': 'No refresh token found in cookies'}, status=status.HTTP_401_UNAUTHORIZED)

        response = Response({'message': 'Successfully logged out.'}, status=status.HTTP_200_OK)

        # expire the cookies on the server-side
        response.set_cookie(
            settings.SIMPLE_JWT['AUTH_COOKIE'],
            '',
            expires='Thu, 01 Jan 1970 00:00:00 GMT',
            secure=settings.SIMPLE_JWT['AUTH_COOKIE_SECURE'],
            httponly=settings.SIMPLE_JWT['AUTH_COOKIE_HTTP_ONLY'],
            samesite=settings.SIMPLE_JWT['AUTH_COOKIE_SAMESITE'],
        )
        response.set_cookie(
            settings.SIMPLE_JWT['AUTH_COOKIE_REFRESH'],
            '',
            expires='Thu, 01 Jan 1970 00:00:00 GMT',
            secure=settings.SIMPLE_JWT['AUTH_COOKIE_SECURE'],
            httponly=settings.SIMPLE_JWT['AUTH_COOKIE_HTTP_ONLY'],
            samesite=settings.SIMPLE_JWT['AUTH_COOKIE_SAMESITE'],
        )

        return response

    except Exception as e:
        print(f"Error during logout: {str(e)}")
        return Response({'error': 'Something went wrong'}, status=status.HTTP_400_BAD_REQUEST)


@api_view(['POST'])
@authentication_classes([])  
@permission_classes([IsAuthenticatedOrReadOnly])
def refresh_token(request):
    if request.method == 'POST':
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


