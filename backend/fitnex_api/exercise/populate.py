from django.shortcuts import get_object_or_404
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
import requests
from rest_framework.pagination import PageNumberPagination

from .utils import download_and_upload_image, make_req
from .models import Exercise, Target, BodyPart, Equipment
from .serializers import (
    BodyPartSerializers,
    EquipmentSerializers,
    ExerciseCreateSerializers,
    TargetSerializers,
)


class ExerciseView(APIView):
    def get(self, request):
        try:
            # Fetch data from the API
            api_data = make_req("https://exercisedb.p.rapidapi.com/exercises")

            # Process each data object
            updated_exercises = []
            for data_object in api_data:
                gif_url = data_object.get('gifUrl')

                # Download the object (GIF image) from the 'gifUrl' field
                new_url = download_and_upload_image(gif_url)

                if new_url:
                    # Once you have the new URL, update the 'gifUrl' field
                    data_object['gifUrl'] = new_url

                    # Append the modified data object to the list
                    updated_exercises.append(data_object)
                else:
                    # Handle the case where download and upload fail for an image
                    print(
                        f"Failed to download and upload image for {data_object.get('name')}")

            # Serialize and save the modified data to the database
            exercise_serializer = ExerciseCreateSerializers(
                data=updated_exercises, many=True)
            exercise_serializer.is_valid(raise_exception=True)
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
    # serializer_class = TargetSerializers

    def get(self, request, name=None):

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

    def get(self, request, name=None):

        try:
            # Fetch data from the API

            api_data = make_req(
                "https://exercisedb.p.rapidapi.com/exercises/bodyPartList")
            # print(api_data)

            equipment_data = [{'name': value} for value in api_data]

            # Deserialize data using the Serializers
            bodyPart_serializer = BodyPartSerializers(
                data=equipment_data, many=True)
            # print("==========")
            # print(target_serializer)
            bodyPart_serializer.is_valid(raise_exception=True)

            # Save deserialized data to the database
            bodyPart_serializer.save()

            # Return serialized data in the response
            return Response(bodyPart_serializer.data, status=status.HTTP_200_OK)

        except requests.RequestException as e:
            # Handle API request errors
            return Response({"error": str(e)}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)
        except Exception as e:
            # Handle other unexpected errors
            return Response({"error": str(e)}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)


class EquipmentsView(APIView):
    serializer_class = EquipmentSerializers

    def get(self, request, name=None):
        try:
            # Fetch data from the API

            api_data = make_req(
                "https://exercisedb.p.rapidapi.com/exercises/equipmentList")
            # print(api_data)

            equipment_data = [{'name': value} for value in api_data]

            # Deserialize data using the Serializers
            equipment_serializer = EquipmentSerializers(
                data=equipment_data, many=True)
            # print("==========")
            # print(target_serializer)
            equipment_serializer.is_valid(raise_exception=True)

            # Save deserialized data to the database
            equipment_serializer.save()

            # Return serialized data in the response
            return Response(equipment_serializer.data, status=status.HTTP_200_OK)

        except requests.RequestException as e:
            # Handle API request errors
            return Response({"error": str(e)}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)
        except Exception as e:
            # Handle other unexpected errors
            return Response({"error": str(e)}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)
