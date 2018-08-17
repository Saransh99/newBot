const Discord = require('discord.js');

module.exports.run = async(bot,message,args)=>{
  let serverIcon = message.guild.iconURL;

     // the embed are a nice way of showing the info of a particular command
     // it has colored strips and a box kind of
     // embed can show images and other things

     let serverEmbed = new Discord.RichEmbed()
     .setDescription("Server Info:-")
     .setColor("#15f153")
     .setThumbnail(message.guild.splashURL)
     .addField("Server Name: ",message.guild.name)
     .addField("Owner",message.guild.owner)
     .addField("Server Created On",message.guild.createdAt)
     .addField("You joined",message.member.joinedAt)
     .addField("Region",message.guild.region)
     .addField("Total members",message.guild.memberCount);

     message.channel.send(serverEmbed);
}

module.exports.help = {
  name:"server info"
}
