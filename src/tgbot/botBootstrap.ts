import { Telegraf } from "telegraf";
import * as dotenv from 'dotenv';

dotenv.config({ path: __dirname + '/../../.env' });

export const bot = new Telegraf(process.env.BOT_TOKEN);

/*

README: 

Це є тимчасовою заглушкою на момент бета тестування! Зроблено виключно з ціллю побудови каркасу роботи, який потім буде викристано для оповіщень про заняття і домашки для студентів, так і викладачів

*/

bot.start((ctx) => {
    ctx.reply('Привіт, друже! Готовий підключитись задля отримання домашок чи можливо ти навіть викладач котрий буде повідомлений про всі потрібні речі? Вцілому приєднуся, тут доволі цікаво!)');
    new Promise(resolve => setTimeout(resolve, 3000));
    ctx.reply('Вкажи будь ласка свій логін та пароль для підтвердження і я приєднаю тебе до системи саменький!');
});