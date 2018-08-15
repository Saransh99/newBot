const Discord = require('discord.js');

module.exports.run = async(bot,message,args)=>{

  let ruser = message.guild.member(message.mentions.users.first()|| message.guild.members.get(args[0]));
  if(!ruser) return message.channel.send("no user ");

  let reason = args.join(" ").slice(22);

  let reportEmbed = new Discord.RichEmbed()
  .setDescription("Report:")
  .setColor("#e542f4")
  .addField("Reported  user",`${ruser} with ID: ${ruser.id}`)
  .addField("Reported by:",`${message.author} with ID: ${message.author.id}`)
  .addField("Channel",message.channel)
  .addField("TIme", message.createdAt)
  .addField("Reason",reason);

  // now we want to send the reports to the reports channel
  let reportsChannel = message.guild.channels.find(`name`,"reports");
  if(!reportsChannel) return message.channel.send('cant find the reports channel');

  message.delete().catch(O_o=>{});
  reportsChannel.send(reportEmbed);

}

module.exports.help = {
  name:"report"
}
