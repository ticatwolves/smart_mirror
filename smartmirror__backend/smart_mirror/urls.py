"""smart_mirror URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/2.1/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.urls import path
from facelogin.views import AddFaceView, LoginFaceView

urlpatterns = [
    path('admin/', admin.site.urls),
    path('face-login/', LoginFaceView.as_view()),
    path('face-add/', AddFaceView.as_view()),
]
# client = boto3.client('rekognition', region_name='us-east-1', aws_access_key_id=Access_key_ID, aws_secret_access_key=Secret_access_key)
# client.create_collection(
# ...     CollectionId='ABC')

# self.reko_client.index_faces(
#                 CollectionId='users',
#                 Image={
#                     'Bytes': face_image
#                 },
#                 ExternalImageId=face_id
#             )

# matched_faces_response = self.reko_client.search_faces_by_image(
#     CollectionId=collection_id,
#     Image={
#         'Bytes': face_image.read()
#     },
#     MaxFaces=1,
#     FaceMatchThreshold=90
# )

