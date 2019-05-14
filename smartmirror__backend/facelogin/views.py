from django.shortcuts import render

# Create your views here.
import base64
import uuid
import imghdr
from rest_framework import (
    permissions as drf_permissions, response,
    status, generics, views
)
import json
from django.core.files.base import ContentFile
from django.contrib.contenttypes.models import ContentType
from rest_framework import serializers
from drf_extra_fields.fields import Base64ImageField
import boto3
from .models import Face


def make_connection():
    Access_key_ID = 'AKIAI5535I5YQ5J3O6OQ'
    Secret_access_key = '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'
    client = boto3.client(
        'rekognition', region_name='us-east-1',
        aws_access_key_id=Access_key_ID,
        aws_secret_access_key=Secret_access_key
    )
    return client


def create_collection(client, collection):
    try:
        client.create_collection(
            CollectionId=collection)
        return True
    except:
        return False


def index_image(client, collection, image, ext_img):
    client.index_faces(
        CollectionId=collection,
        Image={
            'Bytes': image
        },
        ExternalImageId=ext_img
    )


def match_image(client, collection_id, image):
    try:
        response = client.search_faces_by_image(
            CollectionId=collection_id,
            Image={
                'Bytes': image
            },
            MaxFaces=1,
            FaceMatchThreshold=90
        )
    except Exception as e:
        print(e)
        response = None
    matched_faces = None
    face_id = None
    if response:
        matched_faces = response.get('FaceMatches', [])
    if matched_faces:
        face_id = matched_faces[0].get('Face').get(
            'ExternalImageId', None)
    return face_id


def get_image_file(decoded_file):
    file_name = str(uuid.uuid4())[:12]
    file_extension = get_file_extension(file_name, decoded_file)
    complete_file_name = "%s.%s" % (file_name, file_extension, )
    return ContentFile(decoded_file, name=complete_file_name)


def get_file_extension(file_name, decoded_file):
    extension = imghdr.what(file_name, decoded_file)
    extension = "jpg" if extension == "jpeg" else extension
    return extension


class FaceImageSerializer(serializers.Serializer):
    image = Base64ImageField()
    first_name = serializers.CharField()


class FaceLoginSerializer(serializers.Serializer):
    image = Base64ImageField()


class LoginFaceView(generics.GenericAPIView):
    serializer_class = FaceLoginSerializer

    def post(self, request):
        serializer = self.get_serializer(
            data=request.data)
        if not serializer.is_valid():
            return response.Response(
                data=serializer.errors,
                status=status.HTTP_400_BAD_REQUEST)
        else:
            header, images_data = request.data.get('image').split(';base64,')
            try:
                images_decoded = base64.b64decode(images_data)
            except TypeError:
                images_decoded = None
            client = make_connection()
            create_collection(client, 'smart_mirror')
            match = match_image(client, 'smart_mirror', images_decoded)
            print('Match ', match)
            if match:
                face = Face.objects.get(ext_id=match)
                return response.Response(
                    data=json.dumps({'name': face.first_name}),
                    status=200
                )
            return response.Response(
                data=json.dumps({"error": "soething"}),
                status=status.HTTP_200_OK)


class AddFaceView(generics.GenericAPIView):
    serializer_class = FaceImageSerializer

    def post(self, request):
        header, images_data = request.data.get('image').split(';base64,')
        try:
            images_decoded = base64.b64decode(images_data)
        except TypeError:
            images_decoded = None
        serializer = self.get_serializer(
            data=request.data)
        if not serializer.is_valid():
            return response.Response(
                data=serializer.errors,
                status=status.HTTP_400_BAD_REQUEST)
        else:
            image = get_image_file(images_decoded)
            face = Face(
                image=image, first_name=serializer.data.get('first_name'))
            face.save()
            client = make_connection()
            create_collection(client, 'smart_mirror')
            index_image(client, 'smart_mirror', face.image.read(), str(
                face.ext_id))
            print("Work here")
            print(serializer.data)
            return response.Response(
                data=json.dumps({'success': "pass"}),
                status=status.HTTP_200_OK)
