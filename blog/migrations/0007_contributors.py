# Generated by Django 3.1.1 on 2020-11-29 11:28

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('blog', '0006_auto_20201125_1700'),
    ]

    operations = [
        migrations.CreateModel(
            name='Contributors',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=200)),
                ('age', models.IntegerField()),
                ('residence', models.CharField(max_length=200)),
                ('movile', models.IntegerField()),
                ('email', models.EmailField(max_length=254)),
                ('profile', models.CharField(max_length=200)),
                ('academic', models.CharField(max_length=200)),
            ],
        ),
    ]
