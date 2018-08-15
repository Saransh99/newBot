const Discord = require('discord.js');

module.exports.run = async(bot,message,args)=>{

    if(!message.guild) return message.reply('join the guild first');
    if(message.member.voiceChannel){
     message.member.voiceChannel.join()
        .then(connection =>{
        message.reply("Joined the voice channel");
    }).catch(console.log('something bad happend'));
    
  }else{
      message.reply('you need to join the voice channel, then i will come');
  }
}

module.exports.help = {
    name:"joinVoice"
}