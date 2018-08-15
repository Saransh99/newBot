const Discord = require('discord.js');

module.exports.run = async(bot,message,args)=>{
  message.channel.send("Server is up from "+ message.guild.createdAt);
}

module.exports.help = {
  name:"uptime"
}
