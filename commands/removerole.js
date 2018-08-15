const Discord = require('discord.js');

module.exports.run = async(bot,message,args)=>{

  if(!message.member.hasPermission("MANAGE_MEMBERS")) return message.resply("Sorry cant do that");
  let roleMember = message.guild.member(message.mentions.users.first()|| message.guild.members.get(args[0]));
  if(!roleMember) return message.resply("cant find the user!!!");

  let role = args.join(" ").slice(22);
  if(!role) return message.resply("Specify a role plz");
  let guildRole = message.guild.roles.find(`name`,role);
  if(!guildRole) return message.resply("Role is not defined");

  if(!roleMember.roles.has(guildRole.id)) return message.resply('they dont have that roles');
  await(roleMember.removeRole(guildRole.id));

  try{
    await roleMember.send(`GG you lost the role of ${guildRole.name}`);
  }catch(e){
    message.channel.send(`GG to <@${roleMember.id}>, they lost the role of ${guildRole.name}, they are not available to dm`);
  }

}

module.exports.help={
  name:"removeRole"
}
