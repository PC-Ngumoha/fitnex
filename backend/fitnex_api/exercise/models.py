from django.db import models
from account.models import FitUser


class BodyPart(models.Model):
    name = models.CharField(max_length=255)

    def __str__(self):
        return self.name


class Equipment(models.Model):
    name = models.CharField(max_length=255)

    def __str__(self):
        return self.name


class Target(models.Model):
    name = models.CharField(max_length=255)

    def __str__(self):
        return self.name


class Exercise(models.Model):
    name = models.CharField(max_length=255)
    bodyPart = models.ForeignKey(
        BodyPart, on_delete=models.CASCADE, db_index=True)
    equipment = models.ForeignKey(
        Equipment, on_delete=models.CASCADE, db_index=True)
    target = models.ForeignKey(Target, on_delete=models.CASCADE, db_index=True)
    gifUrl = models.URLField()
    secondaryMuscles = models.JSONField()
    instructions = models.JSONField()
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    def __str__(self):
        return self.name


class Log(models.Model):
    date_created = models.DateField(auto_now_add=True)
    exercises = models.ManyToManyField(Exercise)
    user = models.ForeignKey(FitUser, on_delete=models.CASCADE)

    def __str__(self):
        return self.date_created
