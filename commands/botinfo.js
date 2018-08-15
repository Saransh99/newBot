const Discord = require('discord.js');

module.exports.run = async(bot,message,args)=>{
    //to display the bot incon
   let botIcon = bot.user.displayAvatarURL;
   let botEmbed = new Discord.RichEmbed()
   .setDescription("About the bot")
   .setColor("#4268f4")
   .setThumbnail(botIcon)
   .addField("Bot name",bot.user.username)
   .addField("Bot live on",bot.user.createdAt);


    message.channel.send(botEmbed);

}

module.exports.help={
  name:"BotInfo"
}
