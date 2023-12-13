from django.db import models
from django.contrib.auth.models import AbstractBaseUser, BaseUserManager, \
    PermissionsMixin
import uuid


class FitUserManager(BaseUserManager):
    """ Custom user model manager for super user and default user registration
    """

    def create_user(self, email, password=None, **extra_fields):
        """ Creates the custom user object
        """
        if not email:
            raise ValueError("'email' field is a REQUIRED field")
        if not password:
            raise ValueError("'password' field is a REQUIRED field")
        user = self.model(email=email, **extra_fields)
        user.set_password(password)
        user.save()
        return user

    def create_superuser(self, email, password=None, **extra_fields):
        """ Creates a super custom user object
        """
        extra_fields.setdefault('is_staff', True)
        extra_fields.setdefault('is_superuser', True)
        extra_fields.setdefault('is_active', True)

        # NOTE: Possibly redundant piece of code. Maintain at your own risk 😂
        if extra_fields.get("is_staff") is not True:
            raise ValueError("Superuser must have is_staff=True.")
        if extra_fields.get("is_superuser") is not True:
            raise ValueError("Superuser must have is_superuser=True.")

        if not email:
            raise ValueError("'email' field is a REQUIRED field")
        if not password:
            raise ValueError("'password' field is a REQUIRED field")
        return self.create_user(email, password, **extra_fields)


class FitUser(AbstractBaseUser, PermissionsMixin):
    """ User model definition
    """
    id = models.UUIDField(primary_key=True, default=uuid.uuid4)
    email = models.EmailField(unique=True)
    name = models.CharField(max_length=255)
    password = models.CharField(max_length=255)
    avatar = models.ImageField(upload_to='avatars/', null=True, blank=True)

    is_active = models.BooleanField(default=True)
    is_superuser = models.BooleanField(default=False)
    is_staff = models.BooleanField(default=False)

    date_joined = models.DateTimeField(auto_now_add=True)
    last_login = models.DateTimeField(null=True)

    USERNAME_FIELD = 'email'
    EMAIL_FIELD = 'email'
    REQUIRED_FIELDS = ('password',)

    objects = FitUserManager()

    def __str__(self):
        """ What to print() to the console
        """
        return self.name

    def get_full_name(self):
        """ Formal identifier for the model
        """
        return self.name

    def get_short_name(self):
        """ Informal identifier for the model
        """
        return self.name or self.email.split('@')[0]

    class Meta:
        """ Provides metainformation about the way a model should be organized
        """
        ordering = ('date_joined',)
