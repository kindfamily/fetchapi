from django.urls import path
from .views import *

app_name = 'article'

urlpatterns = [
    path('', reporter_name),
    path('reporterlist/', reporter_name),
]