from django.db import models

class Instrument(models.Model):
    name = models.TextField()
    price = models.TextField()
    model = models.TextField()
    brand = models.TextField()
