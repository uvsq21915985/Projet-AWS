from django.shortcuts import render
from rest_framework import status
from .serializers import  ReunionSerializer
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
from .models import CustomReunion


@api_view(['POST'])
@permission_classes([IsAuthenticated])
def create_reunion(request):
    if request.method == 'POST':
        print('POST REQUEST')
        print("€&&&&&&&&&&&&&&&&&&&&&&&&&&&&&CREATE REUNION&&&&&&&&&&&&&&&&&&&&&&&&&")
        access_token = request.COOKIES.get('access_token')
        refresh_token = request.COOKIES.get('refresh_token')
        print(f"USER : {request.user}")

        print(f"Access Token: {access_token}")  # Print the access token
        print(f"Refresh Token: {refresh_token}")
        serializer = ReunionSerializer(data=request.data, context={'request': request}) #to get the user
        print(f"serializer: {serializer}")
        if serializer.is_valid():
            print('SERIALIZER')
            serializer.save()  
            print('SAVED')
            print("response : {Response(serializer.data, status=status.HTTP_201_CREATED}")
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    else:
        return Response(status=status.HTTP_405_METHOD_NOT_ALLOWED)


# for one user get all reunion he created
@api_view(['GET'])
@permission_classes([IsAuthenticated])
def get_user_reunions(request):
    if request.method == 'GET':
        print("€&&&&&&&&&&&&&&&&&&&&&&&&&&&&&GET REUNION&&&&&&&&&&&&&&&&&&&&&&&&&")
        user = request.user 
        print(f"user on requst to create {user}")
        reunions = CustomReunion.objects.filter(creator=user)
        serializer = ReunionSerializer(reunions, many=True)
        print(f"Responses :{Response(serializer.data)}")
        return Response(serializer.data)
    else:
        return Response(status=status.HTTP_405_METHOD_NOT_ALLOWED)