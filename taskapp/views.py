from django.shortcuts import render
from .models import Task
from .serializer import TaskSerializer
from rest_framework.viewsets import ModelViewSet 
from rest_framework.filters import SearchFilter,OrderingFilter

from rest_framework.permissions import IsAuthenticated
from django_filters.rest_framework import DjangoFilterBackend
from .permissions import IsOwnerOrReadOnly


# Create your views here.
class TaskViewSet(ModelViewSet):

    queryset = Task.objects.all()
    serializer_class = TaskSerializer

    
    permission_classes = [IsAuthenticated,IsOwnerOrReadOnly]
    filter_backends = [DjangoFilterBackend,SearchFilter,OrderingFilter]
    filterset_fields = ['status','assigned_to']
    search_fields = ['title','description']
    ordering_fields = ['created_at','assigned_to']

    def perform_create(self, serializer):
        serializer.save(user=self.request.user)

    def get_queryset(self):
        user = self.request.user

        if user.is_superuser:
            return Task.objects.all()
              # full access

        elif user.is_staff:
            return Task.objects.all()  # manager rules (we refine later)

        return Task.objects.filter(user=self.request.user)


    

    
    
