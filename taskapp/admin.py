

from django.contrib import admin
from .models import Task

@admin.register(Task)
class TaskAdmin(admin.ModelAdmin):

    list_display = (
        "title",
        "status",
        "assigned_to",
        "created_at",
    )

    search_fields = (
        "title",
        "description",
    )

    list_filter = (
        "status",
        "assigned_to",
    )

    ordering = (
        "-created_at",
    )

# Register your models here.
