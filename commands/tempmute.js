const Discord = require('discord.js');
const ms = require('ms');
// this command is for the temporary muting a member for a specified time period
module.exports.run = async(bot,message,args)=>{

  let tomute = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
  if(!tomute) return message.reply("Member not found");

  if(tomute.hasPermission("MANAGE_MESSAGES")) return message.reply("Cant mute them, they have permissions too");

  let muteRole = message.guild.roles.find(`name`,'muted');
  // the below is to create the roles
  if(!muteRole){
    try{
      muteRole = await message.guid.createRole({
        name:"muted",
        color:"#fff",
        permissions:[]
      });
      message.guild.channels.forEach(async(channel,id)=>{
        await channel.overwritePermissions(muteRole,{
            SEND_MESSAGES: false,
            ADD_REACTIONS: false
        });
      });
    }catch(e){
      console.log(e.stack);
    }
  }
// end of the create role

let muteTime = args[1];
if(!muteTime) return message.reply("u didnt specify a time");

await(tomute.addRole(muteRole.id));
message.reply(`<@${tomute.id}> has been muted for ${ms(ms(muteTime))}`);

setTImeout(function(){
  tomute.removeRole(muteRole.id);
  message.channel.send(`<@${tomute.id}> has been unmuted`);
},ms(muteTime));
}

module.exports.help ={
  name:'tempmute'
}
