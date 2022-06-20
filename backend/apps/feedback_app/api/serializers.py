from rest_framework import serializers
from drf_extra_fields.fields import Base64ImageField
from ..models import Feedback


class FeedbackSerializer(serializers.ModelSerializer):
    '''Feedback Serializer'''
    image = Base64ImageField(required=False) # From DRF Extra Fields

    class Meta:
        model = Feedback
        fields = '__all__'