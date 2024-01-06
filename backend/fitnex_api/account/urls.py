from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import CreateUserView, LoginView, CurrentUserView, ResetPasswordView
from django.contrib.auth import views as auth_views

router = DefaultRouter(trailing_slash=False)

urlpatterns = [
    path("", include(router.urls)),
    path("register", CreateUserView.as_view(), name="create_user"),
    path("login", LoginView.as_view(), name="login"),
    path("me", CurrentUserView.as_view(), name="me"),
    # path('password-reset', ResetPasswordView.as_view(), name='password-reset'),
    
    # Default reset urls
    path('password-reset/', auth_views.PasswordResetView.as_view(), name='password_reset'),
    path('password-reset/done/', auth_views.PasswordResetDoneView.as_view(), name='password_reset_done'),
    path('reset/<uidb64>/<token>/', auth_views.PasswordResetConfirmView.as_view(), name='password_reset_confirm'),
    path('reset/done/', auth_views.PasswordResetCompleteView.as_view(), name='password_reset_complete'),

]
