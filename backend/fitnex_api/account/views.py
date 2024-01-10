from rest_framework.views import APIView
from rest_framework import status
from rest_framework.response import Response
from fitnex_api.authentication_middleware import IsAuthenticatedCustom
from .utils import get_access_token
from .models import FitUser
from django.db import IntegrityError
from .serializers import AuthSerializer, CustomUserSerializer
from django.contrib.auth import authenticate
from django.contrib.auth.tokens import default_token_generator
from django.contrib.auth.models import User
from django.core.mail import send_mail
from django.template.loader import render_to_string

# Create your views here.


class CreateUserView(APIView):
    serializer_class = CustomUserSerializer

    def post(self, request):
        user_info = self.serializer_class(data=request.data)
        user_info.is_valid(raise_exception=True)

        try:
            FitUser.objects.create_user(**user_info.validated_data)
        except IntegrityError as e:
            return Response({"error": "User with this email already exists."}, status=400)

        return Response(
            {"success": "User created successfully"},
            status=status.HTTP_201_CREATED,
        )


class LoginView(APIView):
    """Login view for user"""

    serializer_class = AuthSerializer

    def post(self, request):
        login_info = self.serializer_class(data=request.data)
        login_info.is_valid(raise_exception=True)

        user = authenticate(
            email=login_info.validated_data.get("email", None),
            password=login_info.validated_data.get("password", None),
        )

        if not user:
            return Response(
                {"error": "Invalid credentials"}, status=status.HTTP_400_BAD_REQUEST
            )
        expiry = 360
        access_token = get_access_token(
            {
                "user_id": user.id,
            }, expiry
        )

        return Response(
            {
                "access_token": access_token,
            },
            status=status.HTTP_200_OK,
        )


class ResetPasswordView(APIView):
    """Reset Password View"""
    pass

class CurrentUserView(APIView):
    """ currentlylogged in user view"""

    serializer_class = CustomUserSerializer
    permission_classes = (IsAuthenticatedCustom,)

    def get(self, request):
        serializer = self.serializer_class(request.user)
        return Response(serializer.data)
