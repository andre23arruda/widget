from django.urls import path, include
from rest_framework import routers
from .api.viewsets import (
    FeedbacksViewSet,
)

app_name = 'feedback_app'

# router
router = routers.DefaultRouter()
router.register('feedbacks', FeedbacksViewSet, basename='Feedbacks')

urlpatterns = [
    path('api/', include(router.urls)),
]
