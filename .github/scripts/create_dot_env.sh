#!/bin/sh

# create .env file
touch .env
# add the env values to .env file
echo "DB_HOST=$DB_HOST" >> .env
#echo DB_PORT=${ secrets.DB_PORT } >> .env
#echo DB_DATABASE=${ secrets.DB_DATABASE } >> .env
#echo DB_USER=${ secrets.DB_USER } >> .env
#echo DB_PASS=${ secrets.DB_PASS } >> .env