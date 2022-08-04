#!/bin/bash
OUTPUT=$(curl -s -H 'X-User-Id: ${{ secrets.CLOUD_USERNAME }}'  -H 'X-Api-Key: ${{ secrets.CLOUD_PASSWORD }}' -H 'Content-Type: application/json' -X PATCH -d '{
    "front_version":"${{ github.sha }}"
  }' "$DEPLOY_URL")
if echo $OUTPUT | grep -q '"code":200,'; then
  echo "Instance updated"
else
  echo "Something went wrong during the update process... Response: $OUTPUT"
  exit 1
fi
