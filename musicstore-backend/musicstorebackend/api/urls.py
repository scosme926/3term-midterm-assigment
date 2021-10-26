from django.urls import path
from . import views


urlpatterns = [
    path('api/version', views.version_endpoint, name='version_endpoint'),
    path('api/instruments', views.list_create_instruments_endpoint, name="list_create_instruments_endpoint"),
    path('api/instrument/<id>', views.detail_update_delete_instruments_endpoint, name='detail_update_delete_instrument_endpoint'),
    path('api/register', views.register_endpoint, name="register_endpoint"),
    path('api/login', views.login_endpoint, name="login_endpoint"),
]
