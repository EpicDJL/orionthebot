var chat = require(chat);
var obj = JSON.parse(chat.readFileSync('chat.json', 'utf8'));
var express = require('express');
var app     = express();
app.set('port', (process.env.PORT || 5000));

//For avoidong Heroku $PORT error
app.get('/', function(request, response) {
    var result = 'App is running'
    response.send(result);
}).listen(app.get('port'), function() {
    console.log('App is running, server is listening on port ', app.get('port'));
});

var Discord = require("discord.js");
var bot = new Discord.Client();
var responseObject = chat;

bot.on('message', (message) => {
  if(responseObject[message.content]) {
    message.channel.sendMessage(responseObject[message.content]);
  }
});
bot.on('ready', () => {
  console.log('All Systems Operational.');
});
function restartpepe() {
	heroku.apps('rgb-bot-pepe').dynos().restartAll();
}
setTimeout(restartpepe, 1200000);

bot.login("MjI5MTI2MTIwNTIyMzgzMzYw.Cseuvw.Q9xka-th1rTHHsgyK2GkGlkpZk0");
