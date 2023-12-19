from rest_framework import serializers
from .models import BodyPart, Exercise, Target, Equipment


class ExerciseSerializers(serializers.ModelSerializer):
    bodyPart = serializers.CharField(write_only=True)
    bodyPart_id = serializers.IntegerField(read_only=True)
    target = serializers.CharField(write_only=True)
    target_id = serializers.IntegerField(read_only=True)
    equipment = serializers.CharField(write_only=True)
    equipment_id = serializers.IntegerField(read_only=True)

    class Meta:
        model = Exercise
        fields = '__all__'


class BodyPartSerializers(serializers.ModelSerializer):
    class Meta:
        model = BodyPart
        fields = "__all__"


class TargetSerializers(serializers.ModelSerializer):
    exercises = ExerciseSerializers(many=True, read_only=True)

    class Meta:
        model = Target
        fields = "__all__"


class EquipmentSerializers(serializers.ModelSerializer):
    class Meta:
        model = Equipment
        fields = "__all__"


class ExerciseSerializers(serializers.ModelSerializer):
    bodyPart = serializers.CharField(write_only=True)
    bodyPart_id = serializers.IntegerField(read_only=True)
    target = serializers.CharField(write_only=True)
    target_id = serializers.IntegerField(read_only=True)
    equipment = serializers.CharField(write_only=True)
    equipment_id = serializers.IntegerField(read_only=True)

    class Meta:
        model = Exercise
        fields = '__all__'


# class ExerciseCreateSerializers(serializers.ModelSerializer):
#     bodyPart = serializers.CharField(write_only=True)
#     target = serializers.CharField(write_only=True)
#     equipment = serializers.CharField(write_only=True)

#     class Meta:
#         model = Exercise
#         fields = "__all__"

#     def create(self, validated_data):
#         # Extract the names of related models from the validated data
#         body_part_name = validated_data.pop("bodyPart")
#         target_name = validated_data.pop("target")
#         equipment_name = validated_data.pop("equipment")

#         # Get or create related instances based on names
#         bodyPart, _ = BodyPart.objects.get_or_create(name=body_part_name)
#         target, _ = Target.objects.get_or_create(name=target_name)
#         equipment, _ = Equipment.objects.get_or_create(name=equipment_name)

#         # Create Exercise instance with related instances
#         exercise = Exercise.objects.create(
#             bodyPart=bodyPart, target=target, equipment=equipment, **validated_data
#         )

#         return exercise
