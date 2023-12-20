from rest_framework import serializers
from .models import BodyPart, Exercise, Target, Equipment




# class ExerciseSerializers(serializers.ModelSerializer):
#     class Meta:
#         model = Exercise
#         fields = '__all__'

#     # Override to_representation to include related data
#     def to_representation(self, instance):
#         representation = super().to_representation(instance)

#         # Get related data from other tables
#         bodyPart_data = self.get_related_data(instance.bodyPart_id, BodyPart)
#         target_data = self.get_related_data(instance.target_id, Target)
#         equipment_data = self.get_related_data(instance.equipment_id, Equipment)

#         # Add related data to the representation
#         representation['bodyPart_data'] = bodyPart_data
#         representation['target_data'] = target_data
#         representation['equipment_data'] = equipment_data

#         return representation

#     def get_related_data(self, id, model):
#         try:
#             related_instance = model.objects.get(id=id)
#             return related_instance.name
#         except model.DoesNotExist:
#             return None

# class ExerciseSerializers(serializers.ModelSerializer):
#     bodyPart_data = serializers.SerializerMethodField()
#     target_data = serializers.SerializerMethodField()
#     equipment_data = serializers.SerializerMethodField()

#     class Meta:
#         model = Exercise
#         fields = '__all__'

#     def get_bodyPart_data(self, instance):
#         return instance.bodyPart.name if instance.bodyPart else None

#     def get_target_data(self, instance):
#         return instance.target.name if instance.target else None

#     def get_equipment_data(self, instance):
#         return instance.equipment.name if instance.equipment else None


class BodyPartSerializers(serializers.ModelSerializer):
    class Meta:
        model = BodyPart
        fields = "__all__"


class TargetSerializers(serializers.ModelSerializer):
    

    class Meta:
        model = Target
        fields = "__all__"


class EquipmentSerializers(serializers.ModelSerializer):
    class Meta:
        model = Equipment
        fields = "__all__"


# class ExerciseSerializers(serializers.ModelSerializer):
#     bodyPart = serializers.CharField(write_only=True)
#     bodyPart_id = serializers.IntegerField(read_only=True)
#     target = serializers.CharField(write_only=True)
#     target_id = serializers.IntegerField(read_only=True)
#     equipment = serializers.CharField(write_only=True)
#     equipment_id = serializers.IntegerField(read_only=True)

#     class Meta:
#         model = Exercise
#         fields = '__all__'


class ExerciseCreateSerializers(serializers.ModelSerializer):
    bodyPart = serializers.CharField(write_only=True)
    target = serializers.CharField(write_only=True)
    equipment = serializers.CharField(write_only=True)

    class Meta:
        model = Exercise
        fields = "__all__"

    def create(self, validated_data):
        # Extract the names of related models from the validated data
        body_part_name = validated_data.pop("bodyPart")
        target_name = validated_data.pop("target")
        equipment_name = validated_data.pop("equipment")

        # Get or create related instances based on names
        bodyPart, _ = BodyPart.objects.get_or_create(name=body_part_name)
        target, _ = Target.objects.get_or_create(name=target_name)
        equipment, _ = Equipment.objects.get_or_create(name=equipment_name)

        # Create Exercise instance with related instances
        exercise = Exercise.objects.create(
            bodyPart=bodyPart, target=target, equipment=equipment, **validated_data
        )

        return exercise
