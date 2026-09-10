from django.shortcuts import render
from .models import Task
from .serializer import TaskSerializer
from rest_framework.viewsets import ModelViewSet 
from rest_framework.filters import SearchFilter,OrderingFilter

from rest_framework.permissions import AllowAny
from django_filters.rest_framework import DjangoFilterBackend
from .permissions import IsOwnerOrReadOnly
from django.contrib.auth.models import User

# Create your views here.
class TaskViewSet(ModelViewSet):

    queryset = Task.objects.all()
    serializer_class = TaskSerializer

    
    permission_classes = [AllowAny,IsOwnerOrReadOnly]
    filter_backends = [DjangoFilterBackend,SearchFilter,OrderingFilter]
    filterset_fields = ['status','assigned_to']
    search_fields = ['title','description']
    ordering_fields = ['created_at','assigned_to']

    def perform_create(self, serializer):
        serializer.save(user=User.objects.get(id=1))

    def get_queryset(self):
        user = self.request.user

        if not user.is_authenticated:
            return Task.objects.all()

        if user.is_superuser:
            return Task.objects.all()

        elif user.is_staff:
            return Task.objects.all()

        return Task.objects.filter(user=user)


    

    
    
