var config = require('./config')
var express = require('express')
var nodemailer = require('nodemailer')
var app = express()

var smtpTransport = nodemailer.createTransport({
  service: 'Gmail',
  auth: {
    type: 'OAuth2',
    user: 'user@gmail.com',
    clientId: config.CLIENT_ID,
    clientSecret: config.CLIENT_SECRET,
    refreshToken: config.REFRESHTOKEN
  }
})

app.post('/send', function (req, res) {
  var mailOptions = {
    to: req.query.to,
    subject: req.query.subject,
    text: req.query.text
  }

  console.log(mailOptions)
  smtpTransport.sendMail(mailOptions, function (error, response) {
    if (error) {
      console.log(error)
      res.end('Error')
    } else {
      console.log('Message sent : ', response)
      res.end('Email Sent')
    }
  })
})

app.listen(3000, function () {
  console.log('Express Started on Port 3000')
})
