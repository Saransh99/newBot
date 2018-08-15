const Discord = require('discord.js');
const fs = require('fs');

module.exports.run = async(bot,message,args)=>{

  // we will give the permission to change the prefix to the members who can managet the server
  if(!message.member.hasPermission("MANAGE_SERVER")) return message.reply('cant do that son!!');
  if(!args[0]||args[0=="help"]) return message.reply("usage: !prefix <desired prefix here>");

  let prefixes = JSON.parse(fs.readFileSync("./prefixes.json","utf8"));

  prefixes[message.guild.id] = {
    prefixes:args[0]
  };

  fs.writeFile("./prefixes.json",JSON.stringify(prefixes), (err)=>{
    if(err) console.log(err);
  });

  let prefixEmbed = new Discord.RichEmbed()
  .setColor("#2720f1")
  .setTitle("Prefix set")
  .setDescription(`Set to ${args[0]}`);

  message.channel.send(prefixEmbed);


}

module.exports.help = {
  name:"prefix"
}
