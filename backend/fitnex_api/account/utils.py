from datetime import datetime, timedelta
from django.conf import settings
import jwt
from django.contrib.auth import get_user_model
from django.core.serializers.json import DjangoJSONEncoder

UserModel = get_user_model()


def get_access_token(payload, hours=24):
    # Create a JWT token by encoding a payload and signing it with a secret key.
    token = jwt.encode(
        {"expiry": datetime.now() + timedelta(hours=hours), **payload},
        settings.SECRET_KEY,
        algorithm="HS256",
        json_encoder=DjangoJSONEncoder
    )

    return token


def decode_token(bearer_token):
    # Check if the token is provided in the headers
    if not bearer_token:
        return None

    # Extract the token from the 'Bearer' format
    # The token would be in the format 'Bearer <token>'
    # So we need to extract the token from the string and remove the 'Bearer ' prefix
    token = bearer_token[7:]

    try:
        # Decode the JWT token using the secret key and algorithm
        decoded_token = jwt.decode(token, settings.SECRET_KEY, algorithms="HS256")
    except jwt.ExpiredSignatureError:
        # display an error message
        return None
    except jwt.InvalidTokenError:
        return None

    # Check if the 'user_id' is present in the decoded token
    if "user_id" not in decoded_token:
        return None

    try:
        # Retrieve the user based on the 'user_id' from the decoded token
        user = UserModel.objects.get(id=decoded_token["user_id"])
        return user
    except UserModel.DoesNotExist:
        return None