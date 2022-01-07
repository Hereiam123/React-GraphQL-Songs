# pull official base image 
FROM python:3.8

# set work directory
WORKDIR /usr/src/app

# set environment variables
ENV PYTHONDONTWRITEBYTECODE 1
ENV PYTHONUNBUFFERED 1

# install dependencies
RUN pip install --upgrade pip
RUN pip install pipenv
COPY ./Pipfile .
COPY ./Pipfile.lock .
RUN pipenv install --system --deploy --ignore-pipfile

COPY ./entrypoint.sh .

# copy project
COPY . .

ENTRYPOINT ["/usr/src/app/entrypoint.sh"]