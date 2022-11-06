from rest_framework import serializers
from .models import User, Gpt3History


class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ("name", "is_admin")

class Gpt3Serializer(serializers.ModelSerializer):
    class Meta:
        model = Gpt3History
        fields = ("prompt")
