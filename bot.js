var linebot = require('linebot');
const express = require('express');
const bodyParser = require('body-parser');
//require('dotenv').config();
 
var bot = linebot({
  channelId: '1653707396',//process.env.CHANNEL_ID,
  channelSecret: '22edb3562a89f30e25c1917510187e5d',//process.env.CHANNEL_SECRET,
  channelAccessToken: 'X4hPtwmB6ZShzqSeUjsk7jZSMie9SN2iBlKNPupjGLqsrYcIiilmTjk8nbUnZD8126C61MbonpTLQ3x798KlCSDpjDMlrfeFTlGXUX13Jw9C9D+EBOuZ5xZp0CwJ7L2esDIzpTLozjn1qWyY/YJNUwdB04t89/1O/w1cDnyilFU='//process.env.CHANNEL_ACCESS_TOKEN
});

const app = express();

const parser = bodyParser.json({
  verify: function (req, res, buf, encoding) {
    req.rawBody = buf.toString(encoding);
  }
});

app.post('/linewebhook', parser, function (req, res) {
  if (!bot.verify(req.rawBody, req.get('X-Line-Signature'))) {
    return res.sendStatus(400);
  }
  bot.parse(req.body);
  return res.json({});
});

bot.on('message', function (event) {
  event.reply(event.message.text).then(function (data) {
    console.log('Success', data);
  }).catch(function (error) {
    console.log('Error', error);
  });
});

app.listen(process.env.PORT || 80, function () {
  console.log('LineBot is running.');
});
