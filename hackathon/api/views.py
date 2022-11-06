import openai

from rest_framework import generics
from django.shortcuts import render
from .models import User, Gpt3History
from .serializers import UserSerializer
from rest_framework.views import APIView
from rest_framework.response import Response
from .serializers import UserSerializer, Gpt3Serializer

# Create your views here.
class UserView(generics.CreateAPIView):
    queryset = User.objects.all()
    serializer_class = UserSerializer

class ReactView(APIView):
    def get(self, request):
        # output = [{"name": "John", "age": 27}, {"name": "Mary", "age": 25}]
        return Response("THIS IS A TEST")

    def post(self, request):
        serializer = UserSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)

class Gpt3View(generics.CreateAPIView):
    def post(self, request):
        prompt = request.data.get('prompt')
        output = self.gpt3(prompt)
        return Response(output)
    # serializer_class = Gpt3Serializer
    def gpt3(self, stext, model='text-davinci-002', temp=.7):
        openai.api_key = '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'
        response = openai.Completion.create(
            engine = model,
            prompt=stext,
                temperature=temp,
                max_tokens=100,
                top_p=1,
                frequency_penalty=0,
                presence_penalty=0

        )

        content = response.choices[0].text.split(',')
        ans = response.choices[0].text
        return ans
    # def post(self, request):
    #     prompt = request.data.get('prompt')
    #     user = request.data.get('user')
    #     output = self.gpt3(prompt)
    #     print('TESJKFHSJKDAJFHASKJFDJHKASKJHDFHJKASDFKHJKASJDHF',output)
    #     answer = Gpt3History.objects.create(user=user, prompt=prompt, output=output)
    #     # return Response(self.get_serializer(answer).data)
        