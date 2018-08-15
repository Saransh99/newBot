const Discord = require('discord.js');

module.exports.run = async(bot,message,args)=>{
  let serverIcon = message.guild.iconURL;

     // the embed are a nice way of showing the info of a particular command
     // it has colored strips and a box kind of
     // embed can show images and other things

     let serverEmbed = new Discord.RichEmbed()
     .setDescription("Server Info:-")
     .setColor("#15f153")
     .setThumbnail(serverIcon)
     .addField("Server Name: ",message.guild.name)
     .addField("Server Created On",message.guild.createdAt)
     .addField("You joined",message.member.joinedAt)
     .addField("Total members",message.guild.memeberCount);

     message.channel.send(serverEmbed);
}

module.exports.help = {
  name:"server info"
}
