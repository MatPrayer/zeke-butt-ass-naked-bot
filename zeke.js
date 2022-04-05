const TelegramBot = require('node-telegram-bot-api');
const token = '5292139900:AAGececwF63LUlZ_l6vhKUEndJWVKdo6jz0';
const bot = new TelegramBot(token, {polling: true});

const zeke = 'https://dl.dropboxusercontent.com/s/pi5nm3981yorbtg/zeke.webp';
const zeke2 = 'https://dl.dropboxusercontent.com/s/d0avrm6d7boq2yi/zeke2.png';

bot.onText(/\/template (.+)/, (msg, match) => {
  const chatId = msg.chat.id;
  const resp = match[1]; // the captured "whatever"
  if(resp != '/zeke'){
  // send back the matched "whatever" to the chat
  bot.sendMessage(chatId, resp).then(bot.sendPhoto(chatId, zeke2));
  }else{
      bot.sendMessage(chatId, 'Ci hai provato coglione');
  }
});

bot.onText(/\/zeke/, (msg) => {
  const chatId = msg.chat.id;
  bot.sendSticker(chatId, zeke);
});