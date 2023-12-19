from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import BodyPartView, EquipmentsView, ExerciseView, TargetView

router = DefaultRouter(trailing_slash=False)

urlpatterns = [
    path("", include(router.urls)),
    path("exercises", ExerciseView.as_view(), name="exercise"),
    path("targets", TargetView.as_view(), name="target"),
    path("body-parts", BodyPartView.as_view(), name="body-part"),
    path("equipments", EquipmentsView.as_view(), name="equipment"),
]
