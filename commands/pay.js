const Discord = require('discord.js');
const fs = require('fs');
const coins = require('../coins.json');

module.exports.run = async(bot,message,args)=>{
  // !pay @username 34// no. of coins
  if(!coins[message.author.id]){
    return message.reply("u dont have any coins");
  }

  let payUser = message.guild.member(message.mentions.users.first()|| message.guild.members.get(args[0]));

  if(!coins[payUser.id]){
    coins[payUser.id]={
      coins:0
    };
  }

  let payCoins = coins[payUser.id].coins;
  let sCoins = coins[message.author.id].coins;

  if(sCoins<args[0]) return message.reply("not enough coins");

  coins[message.author.id] = {
    coins:sCoins-parseInt(args[1])
  };

  coins[payUser.id]={
    coins:payCoins + parseInt(args[1])
  };

  message.channel.send(`${message.author} has given ${payUser} ${args[1]} coins`);
  fs.writeFile("./coins.json",JSON.stringify(coins), (err)=>{
    if(err) console.log(err);
  });
}

module.exports.help={
  name:"pay"
}
