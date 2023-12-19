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

    def get(self, request):
        # # Get all exercises from the database
        # exercises = Exercise.objects.all()

        # # Serialize the data using ExerciseSerializers
        # serializer = ExerciseSerializers(exercises, many=True)

        # # Return the serialized data in the response
        # return Response(serializer.data)

        try:
            # Fetch data from the API

            api_data = make_req("https://exercisedb.p.rapidapi.com/exercises")
            # print(api_data)

            # Deserialize data using the Serializers
            exercise_serializer = ExerciseSerializers(data=api_data, many=True)
            # print("==========")
            # print(exercise_serializer)
            exercise_serializer.is_valid(raise_exception=True)

            # Save deserialized data to the database
            exercise_serializer.save()

            # Return serialized data in the response
            return Response(exercise_serializer.data, status=status.HTTP_200_OK)

        except requests.RequestException as e:
            # Handle API request errors
            return Response({"error": str(e)}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)
        except Exception as e:
            # Handle other unexpected errors
            return Response({"error": str(e)}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)


class TargetView(APIView):
    serializer_class = TargetSerializers

    def get(self, request):
        # target = Target.objects.all()
        # serializer = TargetSerializers(target, many=True)
        # return Response(serializer.data)

        try:
            # Fetch data from the API

            api_data = make_req(
                "https://exercisedb.p.rapidapi.com/exercises/targetList")
            # print(api_data)

            target_data = [{'name': target_value} for target_value in api_data]

            # Deserialize data using the Serializers
            target_serializer = TargetSerializers(data=target_data, many=True)
            # print("==========")
            # print(target_serializer)
            target_serializer.is_valid(raise_exception=True)

            # Save deserialized data to the database
            target_serializer.save()

            # Return serialized data in the response
            return Response(target_serializer.data, status=status.HTTP_200_OK)

        except requests.RequestException as e:
            # Handle API request errors
            return Response({"error": str(e)}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)
        except Exception as e:
            # Handle other unexpected errors
            return Response({"error": str(e)}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)


class BodyPartView(APIView):
    serializer_class = BodyPartSerializers

    def get(self, request):
        # pass

        try:
            # Fetch data from the API

            api_data = make_req(
                "https://exercisedb.p.rapidapi.com/exercises/bodyPartList")
            # print(api_data)

            body_parts = [{'name': body_part} for body_part in api_data]

            # Deserialize data using the Serializers
            body_part_serializer = BodyPartSerializers(
                data=body_parts, many=True)
            # print("==========")
            # print(body_part_serializer)
            body_part_serializer.is_valid(raise_exception=True)

            # Save deserialized data to the database
            body_part_serializer.save()

            # Return serialized data in the response
            return Response(body_part_serializer.data, status=status.HTTP_200_OK)

        except requests.RequestException as e:
            # Handle API request errors
            return Response({"error": str(e)}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)
        except Exception as e:
            # Handle other unexpected errors
            return Response({"error": str(e)}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)


class EquipmentsView(APIView):
    serializer_class = EquipmentSerializers

    def get(self, request):
        equipment_objects = Equipment.objects.all()
        equipment_serializer = self.serializer_class(
            equipment_objects, many=True)
        return Response(equipment_serializer.data, status=status.HTTP_200_OK)
