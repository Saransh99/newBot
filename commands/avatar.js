const Discord = require('discord.js');

module.exports.run = async (bot,message,args)=>{
    message.reply(message.author.avatarURL);
}

module.exports.help ={
    name:"avatar"
}