import openai
from towhee import pipeline

from rest_framework import generics
from django.shortcuts import render
from .models import User, Gpt3History
from .serializers import UserSerializer
from rest_framework.views import APIView
from rest_framework.response import Response
from .serializers import UserSerializer, Gpt3Serializer
import numpy as np
from numpy import dot
from numpy.linalg import norm

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
        print(output)
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
class DalleView(generics.CreateAPIView):
    def post(self, request):
        print('please good lord',request.data)
        return Response()


    def dalle2(self, prompt):
        openai.api_key = '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'
        response = openai.Image.create(
         prompt=prompt,
        n=1,
        size="512x512"
        )
        image_url = response['data'][0]['url']
        print(image_url)
        return image_url
    # def post(self, request):
    #     prompt = request.data.get('prompt')
    #     user = request.data.get('user')
    #     output = self.gpt3(prompt)
    #     print('TESJKFHSJKDAJFHASKJFDJHKASKJHDFHJKASDFKHJKASJDHF',output)
    #     answer = Gpt3History.objects.create(user=user, prompt=prompt, output=output)
    #     # return Response(self.get_serializer(answer).data)

class PromptView(generics.CreateAPIView):
    def get(self, request):
        prompts = {

        }
        return Response("THIS IS A TEST")
    
    
    
        

class ImageSimilarityView(generics.CreateAPIView):
    def cosine_sim(self, A, B):
        return np.dot(A,B).reshape(1, -1)/(norm(A)*norm(B)).reshape(1, -1)

    def please(self, image1, image2):
        embedding_pipeline = pipeline('towhee/image-embedding-resnet50', install_reqs=False) 
        embedding1 = embedding_pipeline(image1)

        embedding2 = embedding_pipeline(image2)
        return 1 - self.cosine_sim(embedding1, embedding2)