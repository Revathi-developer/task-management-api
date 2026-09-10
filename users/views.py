from django.shortcuts import render
from rest_framework.response import Response
from .serializer import *
from rest_framework.views import APIView
from django.contrib.auth.models import User
from rest_framework import status
from rest_framework.views import APIView


from rest_framework.authtoken.models import Token
from rest_framework.permissions import IsAuthenticated 

from drf_spectacular.utils import extend_schema

@extend_schema(
    request=RegisterSerializer,
    responses=RegisterSerializer,
)


class RegisterAPIView(APIView):
    def post(self,request):
        serializer=RegisterSerializer(data=request.data)

        if serializer.is_valid():
            serializer.save() 
            return Response(serializer.data,status=status.HTTP_201_CREATED)
            
        return Response(serializer.errors,status=status.HTTP_400_BAD_REQUEST)
        


    
class ProfileAPIView(APIView):

    
        permission_classes = [IsAuthenticated]

        def get(self, request):
            user = request.user
            serializer = ProfileSerializer(user)
            return Response(serializer.data)

        def patch(self, request):
            user = request.user

            serializer = ProfileSerializer(
                user,
                data=request.data,
                partial=True
            )

            if serializer.is_valid():
                serializer.save()
                return Response(serializer.data)

            return Response(serializer.errors, status=400)
        
@extend_schema(
    request=ChangePasswordSerializer,
)
        

class ChangePasswordAPIView(APIView):
     permission_classes = [IsAuthenticated]


     
     def put(self,request):
          serializer = ChangePasswordSerializer(data=request.data)
          
          if serializer.is_valid():

          
            newpassword = serializer.validated_data['password']

            

            user = request.user 
            user.set_password(newpassword)
            user.save()
            return Response({"message":"Password changed successfully."})
          return Response(serializer.errors,status=400)
            


               

     
