#!/bin/bash

# Validation (require json_pp)
#cat manifest.json|json_pp
#if [[ $? ]]; then
#    echo "syntax error manifest.json"
#    exit 128
#fi

node -c background.js
if [[ $? ]]; then
    echo "syntax error background.js"
    exit 128
fi

node -c install.js
if [[ $? ]]; then
    echo "syntax error install.js"
    exit 128
fi

node -c popup.js
if [[ $? ]]; then
    echo "syntax error popup.js"
    exit 128
fi

node -c content.js
if [[ $? ]]; then
    echo "syntax error content.js"
    exit 128
fi


tag=$(git describe --exact-match --tags HEAD)

no_tag=$?
if [[ $no_tag -ne 0 ]]; then
    echo "No tag found in current HEAD. Do not deploy."
    exit 0;
fi

tag=$(echo $tag|sed "s/chrome-//")
if [[ -z "$tag" ]]; then
    echo "invalid tag (it should contains «chrome-»). Do not deploy."
    exit 0;
fi

version=$(cat manifest.json|grep $tag|awk '{print $2}');
if [[ -z "$version" ]]; then
    echo "version and tag ($tag) does not match. Do not deploy";
    exit 0;
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


