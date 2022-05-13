from django.db import models


class Feedback(models.Model):
    created_at = models.DateField(auto_now_add=True)
    type = models.CharField(max_length=20)
    description = models.TextField()
    image = models.ImageField(upload_to='uploads/posts/%Y/%m/%d/')

    def __str__(self):
        return f'{ self.description[:20] }...'