import config from './config'
var express = require('express')
var nodemailer = require('nodemailer')
var app = express()

var smtpTransport = nodemailer.createTransport({
  service: 'Gmail',
  auth: {
    type: 'OAuth2',
    user: 'user@address.com',
    clientId: config.clientId,
    clientSecret: config.clientSecret,
    refreshToken: config.refreshToken
  }
})

app.post('/send', function (req, res) {
  var mailOptions = {
    from: 'Email API <benemailapi@gmail.com',
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
