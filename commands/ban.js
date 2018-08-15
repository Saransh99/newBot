const Discord = require('discord.js');
const errors = require('../utils/errors.js');

module.exports.run = async(bot,message,args)=>{
  let banUser = message.guild.member(message.mentions.users.first()|| message.guild.members.get(args[0]));
   if(!banUser) return message.channel.send('cant find the user');

   let banReason = args.join(" ").slice(22);

   // checking if the person has the permission to kick the member
   if(!message.member.hasPermission("MANAGE_MEMBERS")) return errors.noPerms(message,"MANAGE_MEMBERS");
   // cant kick the member who has the same permission to kick the member
   if(banUser.hasPermission("MANAGE_MESSAGES")) return message.channel.send("Cant be banned ");

   let banEmbed = new Discord.RichEmbed()
   .setDescription("Banned from the server")
   .setColor("#c5ef09")
   .addField("Banned user",`${banUser} with ID ${banUser.id}`)
   .addField("Banned By",`<@${message.author.id}> with ID ${message.author.id}`)
   .addField("Banned in",message.channel)
   .addField("Time",message.createdAt)
   .addField("Reason",banReason);

   let kicksAndBansChannel = message.guild.channels.find(`name`,"kicksnbans");
   if(!kicksAndBansChannel) return message.channel.send("Channel not found");

   message.guild.member(banUser).ban(banReason);
   kicksAndBansChannel.send(banEmbed);
}

module.exports.help = {
  name:"ban"
}
