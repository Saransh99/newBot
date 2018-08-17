const Discord = require('discord.js');

module.exports.run = async(bot,message,args)=>{

    if(!message.member.hasPermission("MANAGE_CHANNELS")) return message.channel.send("you are authorized to create a channel");

    var channelName = args[0];
    var channelType = args[1] || "text";

    message.guild.createChannel(channelName, channelType)
    .then(connection=>{
        console.log;
    }).catch(console.error);
    
}

module.exports.help = {
    name:"createChannel"
}