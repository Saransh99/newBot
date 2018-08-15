const Discord = require('discord.js');
const fs = require('fs');
let config = require("../botConfig.json");

module.exports.noPerms = (message,permission)=>{
  let embed = new Discord.RichEmbed()
  .setAuthor(message.author.username)
  .setTitle("Permission not Granted")
  .setColor(config.maroon)
  .addField("Insufficent permissons", permission);

  message.channel.send(embed).then(msg=>{msg.delete(5000)});
}
