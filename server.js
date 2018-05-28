//Coded by Equipe Programeiros Inc

const clear = require('clear');
const TelegramBot = require('node-telegram-bot-api');
const token = '529598378:AAF3ih9mDOFKBG67DPdzU4grFA97lfztaPY';
const bot = new TelegramBot (token, {polling:true});

const serverProgrameiros = "=======  Programeiros Bot Server ======="

//Logs
function iniciaServer(){
  console.log("========================================");
  console.log(serverProgrameiros);
  console.log("\n\tServer Iniciado com sucesso...");
  console.log('\nToken usado:', token);
  
}

//clear screen
clear();

iniciaServer();

//Função Wellcome

bot.on('new_chat_member', (msg) => {
  bot.sendMessage(msg.chat.id, 'Bem vindo ao Programeiros :)');
});

//Função /Start
bot.onText(/\/start/, (msg) => {
  bot.sendMessage(msg.chat.id, "Bem vindo ao Programeiros Bot Log =)");
});

//Função Ola
bot.on('message', (msg) => {

  const Ola = "ola";
  if (msg.text.toString().toLowerCase().indexOf(Ola) === 0){
    bot.sendMessage(msg.chat.id, "Ola amigo :) " + msg.from.first_name);
  }
});

//Função /avatar

bot.onText(/\/avatar/, (msg) => {
  bot.sendPhoto(msg.chat.id, "https://i.imgur.com/cC07SMn.png");
});

//função /BotLogs
bot.onText(/\/BotLogs/, (msg) => {

  bot.sendMessage(msg.chat.id, "Bot Logs - Programeiros", {
    "reply_markup": {
        "keyboard": [["Diario", "Semanal"],   ["Mensal"], ["Anual"]]
        }
    });
        
  });

//função kick words
bot.on('message', (msg) => {
    
  var nops = "livros crackeados";
  if (msg.text.includes(nops)) {
  bot.kickChatMember(msg.chat.id,  msg.from.id);
  }    
  
  });

  //funçao /ban
bot.onText(/\/ban/), (msg) => {
  bot.kickChatMember(msg.chat.id, msg.from.id);
};





