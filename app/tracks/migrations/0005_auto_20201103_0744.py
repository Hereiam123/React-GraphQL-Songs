# Generated by Django 3.1.3 on 2020-11-03 12:44

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('tracks', '0004_track_public_id'),
    ]

    operations = [
        migrations.AlterField(
            model_name='track',
            name='public_id',
            field=models.TextField(blank=True, null=True),
        ),
    ]
