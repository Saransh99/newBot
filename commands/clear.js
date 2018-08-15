const Discord = require('discord.js');

module.exports.run = async(bot,message,args)=>{
  // !clear 10 // then the bot will clear 10 message from the channel
  if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.reply("cant doo");
  // now we want to check if there is no argument specified
  if(!args[0]) return message.reply("specifiy an argument.. u dummy");

  message.channel.bulkDelete(args[0]).then(()=>{
    // after deleting all the message above it will clear this message after 5s
    message.channel.send(`cleared ${args[0]} messages`).then(msg=> msg.delete(5000));
  });
}

module.exports.help={
  name:"clear"
}
