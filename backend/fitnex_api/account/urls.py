from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import CreateUserView, LoginView, CurrentUserView

router = DefaultRouter(trailing_slash=False)

urlpatterns = [
    path("", include(router.urls)),
    path("register", CreateUserView.as_view(), name="create_user"),
    path("login", LoginView.as_view(), name="login"),
    path("me", CurrentUserView.as_view(), name="me"),
]
