# sendEmail-API

This is a REST API that can be hit to send an Email to the given email address from the registered email address. It uses nodemailer.

## Installation & Setup :

```
npm install
```

Register the usage mail at the Google Console API. Steps to be ensured:

* Allow lesser secure apps to access the usage mail (Refer to [this](https://myaccount.google.com/lesssecureapps))
* Go to [Google Console API](https://console.developers.google.com)
  * Make a new project
  * Enable Gmail API for this project/app
  * Generate OAuth Client ID, Client Secret. Set authorized redirect URL to `https://developers.google.com/oauthplayground` to be allowed to use the Gmail API.
  * Change the keys in config.js
* Generate Refresh Token from [OAuthPlayground](https://developers.google.com/oauthplayground)
  * Set own OAuth IDs in the settings from previous step.
  * Authorize your app for Gmail API
  * Generate Refresh Token.

## Usage :

`npm start` to run the server

## API Endpoint :

```
POST send/
```

Parameters :

* 'to' : Email will be sent to this email address
* 'subject' : Subject of the email
* 'text' : Body of the email
