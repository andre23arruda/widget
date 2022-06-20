from django.utils.translation import gettext_lazy as _
from django.utils.decorators import method_decorator
from django.views.decorators.cache import cache_page

from rest_framework import viewsets

from .serializers import FeedbackSerializer
from .services.email import feedback_email
from ..models import Feedback


class FeedbacksViewSet(viewsets.ModelViewSet):
    '''API endpoint that allows Feedback to be viewed or edited.'''
    authentication_classes = []
    queryset = Feedback.objects.all()
    serializer_class = FeedbackSerializer

    def create(self, request, *args, **kwargs):
        data = self.request.data
        feedback_email(data)
        return super().create(request, *args, **kwargs)

    @method_decorator(cache_page(60))
    def dispatch(self, *args, **kwargs):
        return super(FeedbacksViewSet, self).dispatch(*args, **kwargs)
