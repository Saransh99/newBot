const Discord = require('discord.js');

module.exports.run = async(bot,message,args)=>{

   if(message.guild.voiceConnection){
       message.guild.voiceConnection.disconnect()
       .then(connection=>{
        console.log;
       }).catch(console.log('something bad happened'));
       
   }else{
       message.reply('I must be in a voice channel');
   }
}

module.exports.help = {
    name:"leaveVoice"
}