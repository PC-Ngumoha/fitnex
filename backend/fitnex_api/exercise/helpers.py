# try:
#     # Fetch data from the API

#     api_data = make_req("https://exercisedb.p.rapidapi.com/exercises")
#     # print(api_data)

#     # Deserialize data using the Serializers
#     exercise_serializer = ExerciseSerializers(data=api_data, many=True)
#     # print("==========")
#     # print(exercise_serializer)
#     exercise_serializer.is_valid(raise_exception=True)

#     # Save deserialized data to the database
#     exercise_serializer.save()

#     # Return serialized data in the response
#     return Response(exercise_serializer.data, status=status.HTTP_200_OK)

# except requests.RequestException as e:
#     # Handle API request errors
#     return Response({"error": str(e)}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)
# except Exception as e:
#     # Handle other unexpected errors
#     return Response({"error": str(e)}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)

# try:
#     # Fetch data from the API

#     api_data = make_req(
#         "https://exercisedb.p.rapidapi.com/exercises/targetList")
#     # print(api_data)

#     target_data = [{'name': target_value} for target_value in api_data]

#     # Deserialize data using the Serializers
#     target_serializer = TargetSerializers(data=target_data, many=True)
#     # print("==========")
#     # print(target_serializer)
#     target_serializer.is_valid(raise_exception=True)

#     # Save deserialized data to the database
#     target_serializer.save()

#     # Return serialized data in the response
#     return Response(target_serializer.data, status=status.HTTP_200_OK)

# except requests.RequestException as e:
#     # Handle API request errors
#     return Response({"error": str(e)}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)
# except Exception as e:
#     # Handle other unexpected errors
#     return Response({"error": str(e)}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)

# class ExerciseView(APIView):
#     def get(self, request):
#         try:
#             # Fetch data from the API
#             api_data = make_req("https://exercisedb.p.rapidapi.com/exercises")

#             # Process each data object
#             updated_exercises = []
#             for data_object in api_data:
#                 gif_url = data_object.get('gifUrl')

#                 # Download the object (GIF image) from the 'gifUrl' field
#                 new_url = download_and_upload_image(gif_url)

#                 if new_url:
#                     # Once you have the new URL, update the 'gifUrl' field
#                     data_object['gifUrl'] = new_url

#                     # Append the modified data object to the list
#                     updated_exercises.append(data_object)
#                 else:
#                     # Handle the case where download and upload fail for an image
#                     print(
#                         f"Failed to download and upload image for {data_object.get('name')}")

#             # Serialize and save the modified data to the database
#             exercise_serializer = ExerciseCreateSerializers(
#                 data=updated_exercises, many=True)
#             exercise_serializer.is_valid(raise_exception=True)
#             exercise_serializer.save()

#             # Return serialized data in the response
#             return Response(exercise_serializer.data, status=status.HTTP_200_OK)

#         except requests.RequestException as e:
#             # Handle API request errors
#             return Response({"error": str(e)}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)
#         except Exception as e:
#             # Handle other unexpected errors
#             return Response({"error": str(e)}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)

# class ExerciseView(APIView):
#     serializer_class = ExerciseSerializers
#     pagination_class = PageNumberPagination
#     page_size = 10

#     def get(self, request, name=None, id=None):
#         if id:

#             # Get exercise by id
#             exercise = Exercise.objects.get(id=id)
#             serializer = self.serializer_class(exercise)
#             return Response(serializer.data)
#         if name:
#             # Get exercise by name
#             exercise = Exercise.objects.filter(name=name).first()
#             serializer = self.serializer_class(exercise)
#             return Response(serializer.data)
#         # Get all exercises from the database
#         exercises = Exercise.objects.all()

#         # Serialize the data using ExerciseSerializers
#         serializer = self.serializer_class(exercises, many=True)

#         # # Return the serialized data in the response
#         return Response(serializer.data)
