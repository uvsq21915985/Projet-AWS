from rest_framework import status
from .serializers import  ReunionSerializer, ReunionUpdateSerializer
from rest_framework.response import Response
from django.core.exceptions import ObjectDoesNotExist
from rest_framework.permissions import IsAuthenticated
from rest_framework.decorators import api_view, permission_classes
from .models import CustomReunion


@api_view(['POST'])
@permission_classes([IsAuthenticated])
def create_reunion(request):
    if request.method == 'POST':
        serializer = ReunionSerializer(data=request.data, context={'request': request})
        if serializer.is_valid():
            serializer.save()  
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    else:
        return Response(status=status.HTTP_405_METHOD_NOT_ALLOWED)


# for one user get all reunion he created
@api_view(['GET'])
@permission_classes([IsAuthenticated])
def get_user_reunions(request):
    if request.method == 'GET':
        user = request.user 
        reunions = CustomReunion.objects.filter(creator=user)
        serializer = ReunionSerializer(reunions, many=True)
        return Response(serializer.data)
    else:
        return Response(status=status.HTTP_405_METHOD_NOT_ALLOWED)
    

@api_view(['GET'])
@permission_classes([IsAuthenticated])
def allow_user_join_reunion(request, room_id):
    if request.method == "GET":
        if not room_id:
            return Response({"Error": "Missing 'reunion' parameter"}, status=status.HTTP_400_BAD_REQUEST)

        if CustomReunion.objects.filter(room_id=room_id, ongoing=True).exists():
            return Response(status=status.HTTP_200_OK)
        return Response(status=status.HTTP_404_NOT_FOUND)


@api_view(['PUT'])
@permission_classes([IsAuthenticated])
def end_reunion(request):
    room_id = request.data.get('room_id')
    if not room_id:
        return Response({"Error": "Missing 'room_id' parameter"}, status=status.HTTP_400_BAD_REQUEST)

    try:
        reunion = CustomReunion.objects.get(room_id=room_id)
    except CustomReunion.DoesNotExist:
        return Response({"error": "Meeting not found"}, status=status.HTTP_404_NOT_FOUND)

    serializer = ReunionUpdateSerializer(reunion, data=request.data, partial=True)
    if serializer.is_valid():
        serializer.save()
        return Response(serializer.data, status=status.HTTP_200_OK)

    return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)