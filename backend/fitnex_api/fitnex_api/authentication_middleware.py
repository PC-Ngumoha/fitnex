from rest_framework.permissions import BasePermission
from rest_framework.exceptions import PermissionDenied
from account.utils import decode_token


class IsAuthenticatedCustom(BasePermission):
    """sumary_line

    Keyword arguments:
    req - request
    view -- the endpoint the user is trying to access but since we are not using it we ignore
    Return: returns the status of a user permission either true or false
    """

    def has_permission(self, request, _):
        try:
            auth_token = request.META.get("HTTP_AUTHORIZATION", None)
        except KeyError:
            raise PermissionDenied("Error occurred during authentication.")

        if not auth_token:
            raise PermissionDenied("User is not authenticated.")

        user = decode_token(auth_token)

        if not user:
            raise PermissionDenied("User is not authenticated.")

        request.user = user
        return True
