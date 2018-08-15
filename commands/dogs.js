const Discord = require('discord.js');
const superagent = require('superagent');

module.exports.run = async(bot,message,args)=>{
  let{body} = await superagent
  .get(`https://random.dog/woof.json`);

  let dogEmbed = new Discord.RichEmbed()
  .setTitle("Dogs all over")
  .setColor("#f7f302")
  .setImage(body.url);

  message.channel.send(dogEmbed);
}

module.exports.help = {
  name:"dogs"
}
