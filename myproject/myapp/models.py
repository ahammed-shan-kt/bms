from django.db import models
from django.contrib.auth.models import AbstractBaseUser,BaseUserManager


# Create your models here.

class StudentUserManager(BaseUserManager):
    def create_user(self, email, password=None ,**extra_fields):  
        """
        Create and return a user with an email and password.
        """

        if not email:
            raise ValueError('Users must have an email address')
        email = self.normalize_email(email)
        user = self.model(email=email, **extra_fields)  
        user.set_password(password)
        user.save(using=self._db)
        return user
    

    def create_superuser(self, email, password=None ,**extra_fields):
        """
        Create and return a superuser with an email and password.
        """

        extra_fields.setdefault('is_staff',True)
        extra_fields.setdefault('is_superuser',True)
        return self.create_user(email, password, **extra_fields)




class StudentUser(AbstractBaseUser):
    email = models.EmailField(unique=True)
    first_name = models.CharField(max_length=100)
    last_name = models.CharField(max_length=100)
    date_joined = models.DateTimeField(auto_now_add=True)
    is_active = models.BooleanField(default=True)
    is_staff = models.BooleanField(default=False)


    objects= StudentUserManager()

    USERNAME_FIELD = 'email'
    REQUIRED_FIELDS =['first_name','last_name']
    def __str__(self):
        return self.email