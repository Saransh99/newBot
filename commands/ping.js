const Discord = require('discord.js');

module.exports.run = async(bot,message,args)=>{
  message.channel.send("hey there cool guy");

}

module.exports.help = {
  name:"ping"
}
