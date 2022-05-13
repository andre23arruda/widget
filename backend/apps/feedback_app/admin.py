from django.contrib import admin
from django.conf.locale.pt_BR import formats as pt_BR
from django.conf.locale.en import formats as en

from .models import Feedback

pt_BR.DATE_FORMAT = 'd/m/Y'
pt_BR.DATETIME_FORMAT = 'H:i:s - d/m/Y'
en.DATE_FORMAT = 'd/m/Y'
en.DATETIME_FORMAT = 'H:i:s - d/m/Y'


@admin.register(Feedback)
class FeedbackRegister(admin.ModelAdmin):
    list_display = ('id', '__str__', 'created_at',)
    list_display_links = ('id', '__str__')
    list_filter = ['type']
    list_per_page = 25
    ordering = ['id']
    search_fields = ('description',)
