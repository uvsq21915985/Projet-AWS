from rest_framework import status
from .serializers import UserSerializer
from rest_framework_simplejwt.authentication import JWTAuthentication
from django.contrib.auth import authenticate
from rest_framework.response import Response
from rest_framework.permissions import IsAuthenticated
from rest_framework.decorators import api_view, authentication_classes, permission_classes
from .models import CustomUser

@api_view(['PUT'])
@permission_classes([IsAuthenticated])
def update_user(request):
    if request.method == 'PUT':
        try:
            print('PUT REQUEST')
            user = request.user
            print (f"user in PUT {request.user}")
            serializer = UserSerializer(user,data=request.data,partial=True) # we can update some parameters and not others
            if serializer.is_valid():
                print('SERIALIZER')
                serializer.save()  
                print('SAVED')
                return Response({'message': 'User updated successfully', 'user': serializer.data}, status=status.HTTP_201_CREATED)
            return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
        except CustomUser.DoesNotExist:
            return Response({'error': 'User not found'}, status=status.HTTP_404_NOT_FOUND)
    else:
        return Response(status=status.HTTP_405_METHOD_NOT_ALLOWED)


@api_view(['PUT'])
@permission_classes([IsAuthenticated])
def update_password(request):
        if request.method == 'PUT':
            print('PUT REQUEST')
            print(f"request :{request.data}")
            oldpassword = request.data.get('oldpassword')
            newpassword = request.data.get('newpassword')
            if not oldpassword or not newpassword:
                return Response({'error': 'bad request input'}, status=status.HTTP_400_BAD_REQUEST)
            user = request.user
            print(f"old password : {oldpassword}")
            print(f"new password : {newpassword}")
            print(f" old user   : {user}")
            if not (user.check_password(oldpassword)):
                 return Response({'error': 'bad request input'}, status=status.HTTP_404_NOT_FOUND)
            user.set_password(newpassword)
            serializer = UserSerializer(user,data=request.data,partial=True) # we can update some parameters and not others
            if serializer.is_valid():
                print('SERIALIZER')
                serializer.save()  
                print('SAVED')
                return Response({'message': 'password updated successfully', 'user': serializer.data}, status=status.HTTP_201_CREATED)
            return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
        else:
            return Response(status=status.HTTP_405_METHOD_NOT_ALLOWED)

