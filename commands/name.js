const Discord = require('discord.js');

module.exports.run = async(bot,message,args)=>{
   message.channel.send('hi i am '+ bot.user.username);
}

module.exports.help={
  name:"name"
}
