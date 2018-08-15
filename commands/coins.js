const Discord = require('discord.js');
let coins = require('../coins.json');

module.exports.run = async(bot,message,args)=>{
  // !coins

  if(!coins[message.author.id]){
    coins[message.author.id]={
      coins:0
    };
  }

  let uCoins = coins[message.author.id].coins;

  let coinsEmbed = new Discord.RichEmbed()
  .setAuthor(message.author.username)
  .setColor("#d00bea")
  .addField("🎁",uCoins);

  message.channel.send(coinsEmbed).then(msg=>{msg.delete(5000)});
}

module.exports.help={
  name:"coins"
}
