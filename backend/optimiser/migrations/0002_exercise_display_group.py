# Generated by Django 4.1.7 on 2023-02-28 02:44

from django.db import migrations, models


class Migration(migrations.Migration):
    dependencies = [
        ("optimiser", "0001_initial"),
    ]

    operations = [
        migrations.AddField(
            model_name="exercise",
            name="display_group",
            field=models.CharField(default="Push", max_length=60),
            preserve_default=False,
        ),
    ]
