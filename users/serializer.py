from rest_framework import serializers
from django.contrib.auth.models import User

class RegisterSerializer(serializers.ModelSerializer):

    class Meta: 
        model = User 
        fields = ['username','password','email']
        extra_kwargs = {

            'password': {'write_only': True}
         }

    def create(self,validated_data):
        return User.objects.create_user(**validated_data)
    

class LoginSerializer(serializers.ModelSerializer):

    class Meta:
        model = User 
        fields = ['username','password']
        extra_kwargs = {
            'password': {'write_only': True}
        }

class ProfileSerializer(serializers.ModelSerializer):

    class Meta:
        model = User 
        fields = ['username', 'first_name', 'last_name', 'email']

class ChangePasswordSerializer(serializers.ModelSerializer):
    

    class Meta:
        model = User 
        fields =['password']
        extra_kwargs = {
            'password' : {'write_only':True}
        }

class UpdateProfileSerializer(serializers.ModelSerializer):

    class Meta:
        model = User 
        fields =['username','first_name','last_name','email']
       
    

   