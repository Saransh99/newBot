const Discord = require('discord.js');

module.exports.run = async(bot,message,args)=>{
  // !say Hi
  // then the bot will clear that command and will say Hi back in the server

  if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.reply("cant doo that sir");
  let botMessage = args.join(" ");
  message.delete().catch();
  message.channel.send(botMessage);

}

module.exports.help={
  name:"say"
}
