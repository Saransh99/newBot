const Discord = require('discord.js');

module.exports.run=async(bot,message,args)=>{
  let kUser = message.guild.member(message.mentions.users.first()|| message.guild.members.get(args[0]));
    if(!kUser) return message.channel.send('cant find the user');

    let kReason = args.join(" ").slice(22);

    // checking if the person has the permission to kick the member
    if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.send("You are not authorized");
    // cant kick the member who has the same permission to kick the member
    if(kUser.hasPermission("MANAGE_MESSAGES")) return message.channel.send("Cant be kicked ");

    let kickEmbed = new Discord.RichEmbed()
    .setDescription("Kick")
    .setColor("#e20d38")
    .addField("Kicked user",`${kUser} with ID ${kUser.id}`)
    .addField("Kicked By",`<@${message.author.id}> with ID ${message.author.id}`)
    .addField("Kicked in",message.channel)
    .addField("Time",message.createdAt)
    .addField("Reason",kReason);

    let kicksAndBansChannel = message.guild.channels.find(`name`,"kicksnbans");
    if(!kicksAndBansChannel) return message.channel.send("Channel not found");

    // to kick the member
    message.guild.member(kUser).kick(kReason);

    // to send the kicked info to the kicksnbans channel
    kicksAndBansChannel.send(kickEmbed);
}

module.exports.help = {
  name:"kick"
}
