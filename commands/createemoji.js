const Discord = require('discord.js');
const botConfig = require('../botConfig');

module.exports.run = async(bot,message,args)=>{

    // !createemoji <emojiPath> <name>   (size of file can't be greater than 256kb)
    if(!message.member.hasPermission("USE_EXTERNAL_EMOJIS")) return message.channel.send("you can't do that homie");

    var emojiLink = args[0];
    var emojiName = args[1];
    
    message.guild.createEmoji(emojiLink, emojiName)
    .then(emoji =>{
        message.channel.send(`${emojiName} Emoji created`);
    }).catch(console.error);

    if(console.error){
       
        message.channel.send("Check the file Path or file should be < 256Kb");
    }  
}

module.exports.help = {
    name:"createEmoji"
}