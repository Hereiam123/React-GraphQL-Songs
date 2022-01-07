import graphene
from graphene_django import DjangoObjectType
from graphql import GraphQLError
from django.db.models import Q
from graphene_file_upload.scalars import Upload
import cloudinary.uploader
import cloudinary.api
from .models import Track, Like
from users.schema import UserType
import uuid


class TrackType(DjangoObjectType):
    class Meta:
        model = Track


class LikeType(DjangoObjectType):
    class Meta:
        model = Like


class Query(graphene.ObjectType):
    tracks = graphene.List(TrackType, search=graphene.String())
    likes = graphene.List(LikeType)

    def resolve_tracks(self, info, search=None):
        if search:
            filter = (
                Q(title__icontains=search) |
                Q(description__icontains=search) |
                Q(url__icontains=search) |
                Q(posted_by__username__icontains=search)
            )
            return Track.objects.filter(filter)

        return Track.objects.all()

    def resolve_likes(self, info):
        return Like.objects.all()


class CreateTrack(graphene.Mutation):
    track = graphene.Field(TrackType)

    class Arguments:
        title = graphene.String()
        description = graphene.String()
        url = graphene.String()
        file = Upload(required=True)

    def mutate(self, info, title, description, file):
        user = info.context.user or None

        if user.is_anonymous:
            raise GraphQLError('Log in to add a track.')
        
        if user.track_set.all().count() >= 10:
            raise GraphQLError('Reached max track upload count of 10.')
        
        public_id = uuid.uuid1()
        
        file_upload = cloudinary.uploader.upload(file=file, resource_type="raw", public_id=str(public_id))

        if file_upload.get('error'):
            raise GraphQLError("File upload failure!")

        file_url = file_upload.get('secure_url')

        track = Track(title=title, description=description,
                      url=file_url, posted_by=user, public_id=public_id)
        track.save()
        return CreateTrack(track=track)


class UpdateTrack(graphene.Mutation):
    track = graphene.Field(TrackType)

    class Arguments:
        track_id = graphene.Int(required=True)
        title = graphene.String()
        description = graphene.String()
        file = Upload(required=True)

    def mutate(self, info, title, description, file, track_id):
        user = info.context.user
        track = Track.objects.get(id=track_id)

        if track.posted_by != user:
            raise GraphQLError("Not permitted to update this track.")

        file_type = track.url.split(".")[-1]

        file_destroy = cloudinary.uploader.destroy(track.public_id+"."+file_type, resource_type="raw")

        if file_destroy.get('result') == 'not found':
            raise GraphQLError("File update failure!")

        public_id = uuid.uuid1()
        
        file_upload = cloudinary.uploader.upload(file=file, resource_type="raw", public_id=str(public_id))

        if file_upload.get('error'):
            raise GraphQLError("File update failure!")

        file_url = file_upload.get('secure_url')

        track.title = title
        track.description = description
        track.url = file_url
        track.public_id = public_id

        track.save()
        return UpdateTrack(track=track)


class DeleteTrack(graphene.Mutation):
    track_id = graphene.Int()

    class Arguments:
        track_id = graphene.Int(required=True)

    def mutate(self, info, track_id):
        user = info.context.user
        track = Track.objects.get(id=track_id)

        if track.posted_by != user:
            raise GraphQLError("Not permitted to delete this track.")

        file_type = track.url.split(".")[-1]
        print(track.public_id+"."+file_type)
        file_destroy = cloudinary.uploader.destroy(track.public_id+"."+str(file_type), resource_type="raw")

        if file_destroy.get('result') == 'not found':
            raise GraphQLError("File update failure!")

        track.delete()
        return DeleteTrack(track_id=track_id)


class CreateLike(graphene.Mutation):
    user = graphene.Field(UserType)
    track = graphene.Field(TrackType)

    class Arguments:
        track_id = graphene.Int(required=True)

    def mutate(self, info, track_id):
        user = info.context.user
        if user.is_anonymous:
            raise GraphQLError('Login to like tracks.')
        track = Track.objects.get(id=track_id)
        if not track:
            raise GraphQLError('Cannot find track with given track id')

        Like.objects.create(
            user=user,
            track=track
        )

        return CreateLike(user=user, track=track)


class Mutation(graphene.ObjectType):
    create_track = CreateTrack.Field()
    update_track = UpdateTrack.Field()
    delete_track = DeleteTrack.Field()
    create_like = CreateLike.Field()
