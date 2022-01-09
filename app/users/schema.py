from django.contrib.auth import get_user_model
from graphql import GraphQLError
import graphene
from graphene_django import DjangoObjectType


class UserType(DjangoObjectType):
    class Meta:
        model = get_user_model()


class Query(graphene.ObjectType):
    user = graphene.Field(UserType, id=graphene.Int(required=True))
    me = graphene.Field(UserType)

    def resolve_user(self, info, id):
        return get_user_model().objects.get(id=id)

    def resolve_me(self, info):
        user = info.context.user
        if not user.is_authenticated:
            raise GraphQLError("Not logged in!")

        return user


class CreateUser(graphene.Mutation):
    user = graphene.Field(UserType)

    class Arguments:
        username = graphene.String(required=True)
        password = graphene.String(required=True)
        email = graphene.String(required=True)

    def mutate(self, info, username, password, email):
        if get_user_model().objects.all().count() >= 10:
            raise GraphQLError("We have reached max user count of 10")

        if get_user_model().objects.filter(email=email).exists():
            raise GraphQLError("Email already in use!")

        user = get_user_model()(
            username=username.lower(),
            email=email.lower()
        )
        user.set_password(password)
        user.save()
        return CreateUser(user=user)

class DeleteUser(graphene.Mutation):
    id = graphene.Int()

    class Arguments:
        id = graphene.Int(required=True)

    def mutate(self, info, id):
        if not get_user_model().objects.filter(id=id).exists():
            raise GraphQLError("User doesn't exist!")
        
        if not info.context.user.id == id:
            raise GraphQLError("You can't delete this profile!")

        user = get_user_model().objects.filter(id=id)
        user.delete()
        return DeleteUser(id=id)

class Mutation(graphene.ObjectType):
    create_user = CreateUser.Field()
