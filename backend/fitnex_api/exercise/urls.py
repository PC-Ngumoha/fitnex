from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import (BodyPartView, EquipmentsView,
                    ExerciseView, TargetView, LogsView, LogsDetailsView)

router = DefaultRouter(trailing_slash=False)

urlpatterns = [
    path("", include(router.urls)),
    path("exercises", ExerciseView.as_view(), name="exercise"),
    path("exercises/<int:id>", ExerciseView.as_view(), name="exercise-id"),
    path("exercises/<str:name>", ExerciseView.as_view(), name="exercise-name"),

    path("targets", TargetView.as_view(), name="target"),
    path("targets/<str:name>", TargetView.as_view(), name="target-name"),

    path("body-parts", BodyPartView.as_view(), name="body-part"),
    path("body-parts/<str:name>", BodyPartView.as_view(), name="body-part-name"),

    path("equipments", EquipmentsView.as_view(), name="equipment"),
    path("equipments/<str:name>", EquipmentsView.as_view(), name="equipment-name"),

    path("logs", LogsView.as_view(), name="logs"),
    path("logs/<int:id>", LogsDetailsView.as_view(), name="logs-details"),
]
