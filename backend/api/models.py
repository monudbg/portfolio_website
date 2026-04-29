from django.db import models

class Profile(models.Model):
    name = models.CharField(max_length=100)
    title = models.CharField(max_length=100)
    bio = models.TextField()
    email = models.EmailField()
    linkedin = models.URLField(blank=True, null=True)
    github = models.URLField(blank=True, null=True)
    leetcode = models.URLField(blank=True, null=True)
    codolio = models.URLField(blank=True, null=True)
    resume = models.FileField(upload_to='resume/', blank=True, null=True)
    profile_image = models.ImageField(upload_to='profile/', blank=True, null=True)

    def __str__(self):
        return self.name

class Skill(models.Model):
    CATEGORY_CHOICES = [
        ('Languages', 'Languages'),
        ('ML/DL', 'Machine Learning / Deep Learning'),
        ('LLM/GenAI', 'LLM / Generative AI'),
        ('NLP', 'NLP & Data Science'),
        ('Tools', 'Tools & Deployment'),
    ]
    name = models.CharField(max_length=100)
    category = models.CharField(max_length=50, choices=CATEGORY_CHOICES)
    level = models.IntegerField(default=80) # Percentage

    def __str__(self):
        return self.name

class Project(models.Model):
    title = models.CharField(max_length=200)
    description = models.TextField()
    image = models.ImageField(upload_to='projects/', blank=True, null=True)
    tech_stack = models.CharField(max_length=200) # Comma separated
    github_link = models.URLField(blank=True, null=True)
    live_link = models.URLField(blank=True, null=True)
    year = models.CharField(max_length=10, default='2024')

    def __str__(self):
        return self.title
