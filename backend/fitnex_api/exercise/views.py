from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
import requests

from .utils import make_req
from .models import Exercise, Target, BodyPart, Equipment
from .serializers import (
    BodyPartSerializers,
    EquipmentSerializers,
    ExerciseSerializers,
    TargetSerializers,
)


class ExerciseView(APIView):
    serializer_class = ExerciseSerializers

    def get(self, request, name=None, id=None):
        if id:
            # Get exercise by id
            exercise = Exercise.objects.get(id=id)
            serializer = self.serializer_class(exercise)
            return Response(serializer.data)
        if name:
            # Get exercise by name
            exercise = Exercise.objects.get(name=name)
            serializer = self.serializer_class(exercise)
            return Response(serializer.data)
        # Get all exercises from the database
        exercises = Exercise.objects.all()

        # Serialize the data using ExerciseSerializers
        serializer = self.serializer_class(exercises, many=True)

        # # Return the serialized data in the response
        # return Response(serializer.data)


class TargetView(APIView):
    serializer_class = TargetSerializers

    def get(self, request, name=None):
        try:
            if name:
                # Get target by name
                target = Target.objects.get(name=name)
                exercises = Exercise.objects.filter(target_in=target)
                serializer = ExerciseSerializers(exercises, many=True)
            else:
                # Get all targets
                targets = Target.objects.all()
                serializer = self.serializer_class(targets, many=True)

            # Return the serialized data in the response
            return Response(serializer.data)

        except Target.DoesNotExist:
            return Response(
                {"error": "Target not found"}, status=status.HTTP_404_NOT_FOUND
            )


class BodyPartView(APIView):
    serializer_class = BodyPartSerializers

    def get(self, request, name=None):
        if name:
            body_parts = BodyPart.objects.filter(name=name)
            body_parts_exercises = Exercise.objects.filter(bodyPart__in=body_parts)
            serializer = ExerciseSerializers(body_parts_exercises, many=True)

        else:
            body_parts = BodyPart.objects.all()
            serializer = self.serializer_class(body_parts, many=True)

        return Response(serializer.data, status=status.HTTP_200_OK)


class EquipmentsView(APIView):
    serializer_class = EquipmentSerializers

    def get(self, request, name):
        if name:
            equipment_objects = Equipment.objects.filter(name=name)
            equipment_serializer_exercises = Exercise.objects.filter(
                equipment__in=equipment_objects
            )
            serializer = ExerciseSerializers(equipment_serializer_exercises, many=True)

        else:
            equipment_objects = Equipment.objects.all()
            serializer = self.serializer_class(equipment_objects, many=True)
        return Response(serializer.data, status=status.HTTP_200_OK)
