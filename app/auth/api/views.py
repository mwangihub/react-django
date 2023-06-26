from django.shortcuts import render

from rest_framework_simplejwt.views import TokenObtainPairView
from auth.api.serializers import CustomTokenObtainPairSerializer

class CustomTokenObtainPairView(TokenObtainPairView):
    """Instead of using TokenObtainPairView directly in urls.py"""

    serializer_class = CustomTokenObtainPairSerializer
