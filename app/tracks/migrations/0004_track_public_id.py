# Generated by Django 3.1.3 on 2020-11-03 12:38

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('tracks', '0003_like'),
    ]

    operations = [
        migrations.AddField(
            model_name='track',
            name='public_id',
            field=models.IntegerField(null=True),
        ),
    ]
