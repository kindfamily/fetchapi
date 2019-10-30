from django.db import models

# Create your models here.
class Reporter(models.Model):
    full_name = models.CharField(max_length=50);

    def __str__(self):
        return self.full_name