# Interview App

This app is a simple express server which does the following:

Creates a Postgres connection pool using details from the environment:

    PG_HOST: Postgres hostname
    PG_USER: Postgres username
    PG_PASSWORD: Postgres password
    PG_DATABASE: Database name
    PG_PORT: Postgres server port (defaults to 5432)

Creates a http server on port 80 (or uses PORT from environment).

On request to the http server, it tries to make a connection to the pool.

    If the connection is successful, it replies with: It works!
    If the connection fails, it replies with: It failed

## What you need to do

Your task is to deploy this application, as a docker container, into Azure. 

You can fork this repo and manipulate as you see fit but the core logic must be kept the same, i.e. it must try to connect to the DB  on request and it must reply with It works! or it failed depending on the result of that connection.

You will be provided with the details of an Azure subscription which you can use. Your budget is $50, at which point everything in the subscription will be destroyed.

## What we are expecting to see

A simple pipeline (e.g. Github actions) which:
  1. Builds the application (it can run the tests if you like)
  1. Creates a docker image for the application
  1. Publishes the docker image into a repository (of your choice)
  1. Uses IAC (of your own choosing) to deploy the following into Azure:
      1. a postgres database for use by the application
      1. the application (from your docker image)
  
  No bells and whistles, keep it simple.

It is completely up to you:
  1. which docker image repository you use. You can use a public one or deploy your own in Azure.
  1. how the container is deployed.
  1. how the postgres database is deployed
  
You are welcome to use AI assistance as you see fit however we will be asking questions as to why you have done things the way you have so please keep that in mind.
