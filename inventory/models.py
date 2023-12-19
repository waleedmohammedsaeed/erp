from django.db import models

# Create your models here.

class Inventory(models.Model):
    AREASIZE = [
        ('sm', 'small'),
        ('md', 'middle'),
        ('lg', 'large'),
    ]
    name = models.CharField(max_length=50, unique=True)
    location = models.CharField(max_length=30)
    code = models.CharField(max_length=10, unique=True)
    area = models.CharField(max_length=2, choices=AREASIZE)
    inService = models.BooleanField(default=True)

    def __str__(self):
        return self.name

