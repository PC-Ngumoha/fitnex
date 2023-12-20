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
