from django.db import models
from django.contrib.auth.models import User





class Task(models.Model):
    title = models.CharField(max_length=100)
    description = models.TextField(max_length=200)
    CATEGORY_CHOICES = [
        ("work", "Work"),
        ("personal", "Personal"),
        ("study", "Study"),
    ]

    category = models.CharField(
        max_length=20,
        choices=CATEGORY_CHOICES
    )
    status_choices = [
    ('pending', 'Pending'),
    ('in_progress', 'In Progress'),
    ('completed', 'Completed'),
]
    status = models.CharField(max_length=20,choices=status_choices)
    
    user = models.ForeignKey(User,
    on_delete=models.CASCADE,
    related_name="created_tasks"
)

    assigned_to = models.ForeignKey(
    User,
    on_delete=models.SET_NULL,
    null=True,
    related_name="assigned_tasks")
    created_at = models.DateTimeField(auto_now_add=True)
    
    def __str__(self):
        return self.title

# Create your models here.
