from rest_framework import serializers
from django.contrib.auth import get_user_model

UserModel = get_user_model()


# Create User Serializer
class FitUserRegistrationSerializer(serializers.ModelSerializer):
    """ Serializes the user object for registration
    """
    class Meta:
        """ Provides meta instructions on how to serialize objects of the model
        """
        model = UserModel
        fields = '__all__'

    def create(self, data):
        """ Creates a new user
        """
        pass

    def update(self, data):
        """ Updates an existing user's details
        """
        pass

# Login User Serializer


class FitUserLoginSerializer(serializers.ModelSerializer):
    """ Serializes the user object for login
    """
    pass

# User view serializer


class FitUserSerializer(serializers.ModelSerializer):
    """ Serializes the user object for viewing
    """
    pass
