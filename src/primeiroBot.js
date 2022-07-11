require("dotenv").config();
const Telegraf = require("telegraf");

const bot = new Telegraf(process.env.TOKEN);

bot.start((ctx) => {
  const from = ctx.update.message.from;

  console.log(from);
  ctx.reply(`Seja bem vindo, ${from.first_name}`);
});

bot.startPolling();
