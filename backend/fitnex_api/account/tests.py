from django.test import TestCase
from django.contrib.auth import get_user_model
from rest_framework.test import APIClient
from rest_framework import status

UserModel = get_user_model()

# create setup and teardown methods

class CreateUserViewTests(TestCase):
    def test_create_user_success(self):
        client = APIClient()
        data = {
            'email': 'admin@admin.com',
            'password': 'adminpass',
            'name': 'Admin'
        }
        response = client.post('/account/register', data, format='json')

        self.assertEqual(response.status_code, status.HTTP_201_CREATED)
        self.assertIn('success', response.data)
    
    def test_create_user_duplicate_email(self):
        # Create a user with the same email to simulate a duplicate entry
        UserModel.objects.create_user(email='admin@admin.com', password='password')
        
        client = APIClient()
        data = {
            'email': 'admin@admin.com',
            'password': '123Asdf',
            'name': 'Fitnex user'
        }
        response = client.post('/account/register', data, format='json')

        self.assertEqual(response.status_code, status.HTTP_400_BAD_REQUEST)
        # since we are using integrity error, django has a response for that
        #  {'email': [ErrorDetail(string='fit user with this email already exists.', code='unique')]}
        # and thats what we're checking here
        self.assertIn('email', response.data)