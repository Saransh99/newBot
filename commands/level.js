const Discord = require('discord.js');
const botConfig = require('../botConfig.json');
let purple = botConfig.purple;
let xp = require('../xp.json');

module.exports.run = async(bot,message,args)=>{

  if(!xp[message.author.id]){
    xp[message.author.id]={
      xp:0,
      level:1
    };
  }

  let currentXp = xp[message.author.id].xp;
  let currentLevel = xp[message.author.id].level;
  let nextLevelXp = currentLevel * 300;
  let diff = nextLevelXp - currentXp;

  let levelEmbed = new Discord.RichEmbed()
  .setAuthor(message.author.username)
  .setColor(purple)
  .addField("Level",currentLevel,true)
  .addField("XP",currentXp,true)
  .setFooter(`${diff} XP till level up`, message.author.displayAvatarURL);

  message.channel.send(levelEmbed).then(msg=>{msg.delete(6000)});
}

module.exports.help = {
  name:"level"
}
