# Generated by Django 2.1.7 on 2019-04-14 19:13

from django.db import migrations, models
import uuid


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Face',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('image', models.ImageField(upload_to='')),
                ('ext_id', models.CharField(default=uuid.uuid1, max_length=128, unique=True)),
                ('first_name', models.CharField(max_length=128)),
            ],
        ),
    ]
