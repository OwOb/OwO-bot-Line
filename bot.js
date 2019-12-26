var linebot = require('linebot');
//require('dotenv').config();
 
var bot = linebot({
  channelId: '1653707396',//process.env.CHANNEL_ID,
  channelSecret: '22edb3562a89f30e25c1917510187e5d',//process.env.CHANNEL_SECRET,
  channelAccessToken: 'X4hPtwmB6ZShzqSeUjsk7jZSMie9SN2iBlKNPupjGLqsrYcIiilmTjk8nbUnZD8126C61MbonpTLQ3x798KlCSDpjDMlrfeFTlGXUX13Jw9C9D+EBOuZ5xZp0CwJ7L2esDIzpTLozjn1qWyY/YJNUwdB04t89/1O/w1cDnyilFU='//process.env.CHANNEL_ACCESS_TOKEN
});
 
bot.on('message', function (event) {
  console.log('A');
  // event.message.text是使用者傳給bot的訊息
  // 使用event.reply(要回傳的訊息)方法可將訊息回傳給使用者
  event.reply(event.message.text).then(function (data) {
	  console.log('owo');
	  console.log(data);
    // 當訊息成功回傳後的處理
  }).catch(function (error) {
	  console.log('QAQ');
	  console.log(error);
    // 當訊息回傳失敗後的處理
  });
});
 
bot.listen('https://owo-bot-line.herokuapp.com/callback', process.env.PORT, function () {
	console.log('[BOT已準備就緒]');
});
