#!/bin/bash

# below copied from library-api documentation

# curl --include --request POST http://localhost:3000/sign-up \
#   --header "Content-Type: application/json" \
#   --data '{
#     "credentials": {
#       "email": "anew@example.email",
#       "password": "an example password",
#       "password_confirmation": "an example password"
#     }
#   }'
#

# Here's what the above would look like if we used variables:

  curl "http://localhost:3000/sign-up" \
  --include \
  --request POST \
  --header "Content-Type: application/json" \
  --data "{
    \"credentials\": {
      \"email\": \"${EMAIL}\",
      \"password\": \"${PASSWORD}\",
      \"password_confirmation\": \"${PASSWORD}\"
    }
  }"


# data output from curl doesn't have a trailing newline
echo
