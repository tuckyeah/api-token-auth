#!/bin/bash

curl --include --request DELETE http://localhost:3000/sign-out/4 \
  --header "Authorization: Token token=BAhJIiVlMmMyYzhmZmNlZDk1OTZjZjQ4MTZkYmUxNWRkZGMyMwY6BkVG--25107ea148d8142e7709af1291b2c60b48b35df0"
