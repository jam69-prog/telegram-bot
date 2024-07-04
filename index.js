const TelegramBot = require("node-telegram-bot-api");

const token = "7427411675:AAFC5aT66icpfvo4B5tJXlpUzDD-aw0lR-U";

 const bot = new TelegramBot(token, { polling: true });

 bot.onText(/\/start/, (msg) => {
     const id = msg.chat.id
     bot.sendMessage(id, "Salom " + msg.from.first_name + "  botga xush kelibsan!!");
 });

