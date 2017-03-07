#!/bin/bash

tag=$(git describe --exact-match --tags HEAD|sed "s/chrome-//")
no_tag=$?
if [[ $no_tag -ne 0 ]]; then
    echo "no tag found in current HEAD. aborting"
    exit 1;
fi

version=$(cat manifest.json|grep $tag|awk '{print $2}');
if [[ -z "$version" ]]; then
    echo "version and tag ($tag) does not match";
    exit 2;
fi
echo "version in manifest matches : $version"


FILE_NAME=decodex-insoumis.zip

zip -j ${FILE_NAME} ./*

token=$(curl "https://accounts.google.com/o/oauth2/token" -d "client_id=$CLIENT_ID&client_secret=$CLIENT_SECRET&code=$CODE&grant_type=authorization_code&redirect_uri=urn:ietf:wg:oauth:2.0:oob")
token=$(echo "$token"|grep access|awk '{print $3}'|awk -F\" '{print $2}')

curl \
    -H "Authorization: Bearer $token"  \
    -H "x-goog-api-version: 2" \
    -X PUT \
    -T $FILE_NAME \
    -v \
    https://www.googleapis.com/upload/chromewebstore/v1.1/items/$APP_ID


