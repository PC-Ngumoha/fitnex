from django.contrib import admin
from django.contrib.auth.admin import UserAdmin
from .models import FitUser

class CustomUserAdmin(UserAdmin):
    list_display = ('email', 'name', 'is_active', 'is_staff', 'is_superuser', 'date_joined')
    search_fields = ('email', 'name')
    ordering = ('-date_joined',)

admin.site.register(FitUser, CustomUserAdmin)
