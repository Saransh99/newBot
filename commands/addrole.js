const Discord = require('discord.js');
// remember the exports is an object of the module property
//so we can assign the properties to the exports object

module.exports.run = async(bot,message,args)=>{
  if(!message.member.hasPermission("MANAGE_MEMBERS")) return message.resply("Sorry cant do that");
  let roleMember = message.guild.member(message.mentions.users.first()|| message.guild.members.get(args[0]));
  if(!roleMember) return message.resply("cant find the user!!!");

  let role = args.join(" ").slice(22);
  if(!role) return message.resply("Specify a role plz");
  let guildRole = message.guild.roles.find(`name`,role);
  if(!guildRole) return message.resply("Role is not defined");

  if(roleMember.roles.has(guildRole.id)) return message.resply('they already have that role');
  await(roleMember.addRole(guildRole.id));

  try{
    await roleMember.send(`congrats u have been given role ${guildRole.name}`);
  }catch(e){
    message.channel.send(`congrats to <@${roleMember.id}>, they have given the role of ${guildRole.name}, they are not available to dm`);
  }

}

module.exports.help={
  name:"addRole"
}
