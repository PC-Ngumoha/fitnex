from django.core.exceptions import ObjectDoesNotExist
from django.db import transaction
from django.shortcuts import get_object_or_404
from django.utils import timezone
from exercise.utils import get_organized_data
from fitnex_api.authentication_middleware import IsAuthenticatedCustom
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from rest_framework.pagination import PageNumberPagination

from .models import (Exercise, Target, BodyPart, Equipment, Log)
from .serializers import (
    BodyPartSerializers,
    EquipmentSerializers,
    ExerciseSerializers,
    TargetSerializers,
    LogSerializers,
    LogDetailSerializers
)


class ExerciseView(APIView):
    serializer_class = ExerciseSerializers
    permission_classes = (IsAuthenticatedCustom,)
    pagination_class = PageNumberPagination
    page_size = 10

    def get(self, request, name=None, id=None):
        if id:
            exercise = Exercise.objects.select_related(
                'bodyPart', 'target', 'equipment').get(id=id)
            serializer = self.serializer_class(exercise)
            return Response(serializer.data)
        if name:
            exercise = Exercise.objects.select_related(
                'bodyPart', 'target', 'equipment').filter(name=name).first()
            serializer = self.serializer_class(exercise)
            return Response(serializer.data)

        exercises = Exercise.objects.select_related(
            'bodyPart', 'target', 'equipment').all()
        serializer = self.serializer_class(exercises, many=True)
        return Response(serializer.data)


class TargetView(APIView):
    serializer_class = TargetSerializers
    permission_classes = (IsAuthenticatedCustom,)

    def get(self, request, name=None):

        if name:
            target = Target.objects.filter(name=name)
            exercises = Exercise.objects.prefetch_related(
                'bodyPart', 'target', 'equipment').filter(target__in=target)
            serializer = ExerciseSerializers(exercises, many=True)
        else:
            # Get all targets
            targets = Target.objects.all()
            serializer = self.serializer_class(targets, many=True)

        # Return the serialized data in the response
        return Response(serializer.data)

    def delete(self, request, name=None):
        pass


class BodyPartView(APIView):
    serializer_class = BodyPartSerializers
    permission_classes = (IsAuthenticatedCustom,)

    def get(self, request, name=None):
        if name:
            body_parts = BodyPart.objects.filter(name=name)
            body_parts_exercises = Exercise.objects.prefetch_related(
                'bodyPart', 'target', 'equipment'
            ).filter(bodyPart__in=body_parts)
            serializer = ExerciseSerializers(body_parts_exercises, many=True)

        else:
            body_parts = BodyPart.objects.all()
            serializer = self.serializer_class(body_parts, many=True)

        return Response(serializer.data, status=status.HTTP_200_OK)


class EquipmentsView(APIView):
    serializer_class = EquipmentSerializers
    permission_classes = (IsAuthenticatedCustom,)

    def get(self, request, name=None):
        if name:
            equipment_objects = Equipment.objects.filter(name=name)
            equipment_serializer_exercises = Exercise.objects.prefetch_related(
                'bodyPart', 'target', 'equipment'
            ).filter(equipment__in=equipment_objects)
            serializer = ExerciseSerializers(
                equipment_serializer_exercises, many=True)

        else:
            equipment_objects = Equipment.objects.all()
            serializer = self.serializer_class(equipment_objects, many=True)
        return Response(serializer.data, status=status.HTTP_200_OK)


class LogsView(APIView):
    serializer_class = LogSerializers
    permission_classes = (IsAuthenticatedCustom,)

    def get(self, request):
        logs = Log.objects.filter(user=request.user).all()
        serializer = self.serializer_class(logs, many=True)
        # return Response(serializer.data, status=status.HTTP_200_OK)
        data = get_organized_data(serializer.data)
        return Response(data, status=status.HTTP_200_OK)

    def post(self, request):
        exercise_ids = request.data.get("exercises")

        if not exercise_ids:
            return Response({"message": "Unable to log exercises"},
                            status=status.HTTP_400_BAD_REQUEST)

        exercises = []
        invalid_ids = []

        for e_id in exercise_ids:
            try:
                exercise = Exercise.objects.get(id=e_id)
                exercises.append(exercise)
            except Exercise.DoesNotExist:
                invalid_ids.append(e_id)

        if invalid_ids:
            invalid_ids_str = ', '.join(map(str, invalid_ids))
            return Response({
                "message": f"Invalid exercise IDs: {invalid_ids_str}"
            }, status=status.HTTP_400_BAD_REQUEST)

        with transaction.atomic():
            today = timezone.now().date()
            log, _ = Log.objects.get_or_create(
                date_created=today, user=request.user)
            log.exercises.add(*exercises)

        serializer = self.serializer_class(log)
        return Response(serializer.data, status=status.HTTP_201_CREATED)


class LogsDetailsView(APIView):
    serializer_class = LogDetailSerializers
    permission_classes = (IsAuthenticatedCustom,)

    def get(self, request, id):
        try:
            log = get_object_or_404(Log, id=id, user=request.user)
            serializer = self.serializer_class(log)
            return Response(serializer.data, status=status.HTTP_200_OK)
        except ObjectDoesNotExist:
            return Response({"message": "Log not found"},
                            status=status.HTTP_404_NOT_FOUND)
        except Exception as err:
            return Response({"message": str(err)},
                            status=status.HTTP_500_INTERNAL_SERVER_ERROR)
