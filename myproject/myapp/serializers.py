from rest_framework import serializers
from .models import StudentUser

class UserRegistrationSerializer(serializers.ModelSerializer):
    password = serializers.CharField(write_only=True)  # Ensure the password is not visible in the response

    class Meta:
        model = StudentUser
        fields = ['email', 'first_name', 'last_name', 'password']

    def validate_email(self, value):
        
        # Check if the email is already in use.
        
        if StudentUser.objects.filter(email=value).exists():
            raise serializers.ValidationError("This email is already in use.")
        return value

    def create(self, validated_data):
        
        # Create and return a new user instance with hashed password.
        
        password = validated_data.pop('password')
        user = StudentUser.objects.create(**validated_data)
        user.set_password(password)  # Hash the password before saving
        user.save()
        return user
