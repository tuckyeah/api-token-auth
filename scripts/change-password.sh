#!/bin/bash

curl --include --request PATCH http://localhost:3000/change-password/4 \
  --header "Authorization: Token token=BAhJIiVhMmU0M2Q5Y2I4YTc2NzdlNDU0ODNiNWYyN2IzNzA2ZgY6BkVG--f8a90f1e85e042f4a0f71ea0ecd9ebf258b7efd8" \
  --header "Content-Type: application/json" \
  --data '{
    "passwords": {
      "old": "apples",
      "new": "123"
    }
  }'
