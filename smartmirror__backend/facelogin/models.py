from django.db import models
import uuid
# Create your models here.


class Face(models.Model):

    image = models.ImageField()
    ext_id = models.CharField(unique=True, default=uuid.uuid1, max_length=128)
    first_name = models.CharField(max_length=128)
