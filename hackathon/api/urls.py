from django.contrib import admin
from django.urls import include, path
from .views import Gpt3View, UserView, ReactView, DalleView

urlpatterns = [
  path("", ReactView.as_view()),
  path("api/gpt3", Gpt3View.as_view()),
  path('api/dalle', DalleView.as_view())
  ]
