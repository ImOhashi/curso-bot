require("dotenv").config();
const Telegraf = require("telegraf");

const bot = new Telegraf(process.env.TOKEN);

bot.start((ctx) => {
  const { from } = ctx.update.message;

  console.log(from);

  if (from.id == process.env.MY_ID) {
    ctx.reply(`Seja bem vindo, mestre ${from.first_name}!`);
  } else {
    ctx.reply("Usuário desconhecido, adeus!");
  }
});

bot.startPolling();
