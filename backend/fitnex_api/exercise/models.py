from django.db import models

# Create your models here.

from django.db import models

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
    bodyPart = models.ForeignKey(BodyPart, on_delete=models.CASCADE)
    equipment = models.ForeignKey(Equipment, on_delete=models.CASCADE)
    target = models.ForeignKey(Target, on_delete=models.CASCADE)
    gifUrl = models.URLField()
    secondaryMuscles = models.JSONField()
    instructions = models.JSONField()
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    def __str__(self):
        return self.name
