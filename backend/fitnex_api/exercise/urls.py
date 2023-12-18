from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import BodyPartView, EquipmentsView, ExerciseView, TargetView

router = DefaultRouter(trailing_slash=False)

urlpatterns = [
    path("", include(router.urls)),
    path("exercise", ExerciseView.as_view(), name="exercise"),
    path("target", TargetView.as_view(), name="target"),
    path("body-part", BodyPartView.as_view(), name="body-part"),
    path("equipment", EquipmentsView.as_view(), name="equipment"),
]
