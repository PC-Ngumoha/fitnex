from rest_framework import serializers
from .models import (BodyPart, Exercise, Target, Equipment, Log)


class ExerciseSerializers(serializers.ModelSerializer):
    bodyPart_data = serializers.SerializerMethodField()
    target_data = serializers.SerializerMethodField()
    equipment_data = serializers.SerializerMethodField()

    class Meta:
        model = Exercise
        fields = '__all__'

    def get_bodyPart_data(self, instance):
        return instance.bodyPart.name if instance.bodyPart else None

    def get_target_data(self, instance):
        return instance.target.name if instance.target else None

    def get_equipment_data(self, instance):
        return instance.equipment.name if instance.equipment else None


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


class LogSerializers(serializers.ModelSerializer):
    class Meta:
        model = Log
        fields = ('id', 'date_created')


class ExerciseLogSerializers(serializers.ModelSerializer):
    bodyPart_data = serializers.SerializerMethodField()

    class Meta:
        model = Exercise
        fields = ('id', 'name', 'gifUrl', 'bodyPart_data')

    def get_bodyPart_data(self, instance):
        return instance.bodyPart.name if instance.bodyPart else None


class LogDetailSerializers(serializers.ModelSerializer):
    exercises = ExerciseLogSerializers(many=True)

    class Meta:
        model = Log
        fields = ('id', 'date_created', 'exercises')
