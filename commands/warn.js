const Discord = require('discord.js');
const fs = require('fs');

// the 'ms' package is used to convert various time format to the milliseconds

const ms = require('ms');
let warns = JSON.parse(fs.readFileSync("./warnings.json","utf8"));

module.exports.run = async(bot,message,args)=>{
    // if the person writing the command doesnot have the permission to warn the users then
    if(!message.member.hasPermission("MANAGE_MEMBERS")) return message.reply("cant do that mate");
    let wUser = message.guild.member(message.mentions.users.first()|| message.guild.members.get(args[0]));
    if(!wUser)return message.reply("cant find the users");
    // if the user also has the permision to warn then this will happen
    if(wUser.hasPermission("MANAGE_MESSAGES")) return message.reply("they are cool");
    let reason = args.join(" ").slice(22);

    if(!warns[wUser.id]) warns[wUser.id]={
      warns:0

    };

    warns[wUser.id].warns++;

    fs.writeFile("./warnings.json",JSON.stringify(warns), (err)=>{
      if(err) console.log(err);
    });

    let warnEmbed = new Discord.RichEmbed()
    .setDescription('Warnings')
    .setAuthor(message.author.username)
    .setColor("#f76801")
    .addField("Warned User:",`<@${wUser.id}>`)
    .addField("Warned In:",message.channel)
    .addField("NO. of warnings:",warns[wUser.id].warns)
    .addField("Reason for warning:",reason);

    let warnChannel = message.guild.channels.find(`name`,'kicksnbans');
    if(!warnChannel) return message.reply("cant find the channel");

    warnChannel.send(warnEmbed);

    if(warns[wUser.id]==2){
        let muteRole = message.guild.roles.find(` name`,'muted');
        if(!muteRole) return message.reply("create the role");

        let muteTime = "10s";
        await (wUser.addRole(muteRole.id));
        message.channel.send(`${wUser.tag} has been temp muted`);

        setTimeout(function(){
          wUser.removeRole(muteRole.id);
          message.reply("they have been unmuted");
        }, ms(muteTime));
    }

    if(warns[wUser.id]==3){
      message.guild.member(wUser).ban(reason);
      message.reply(`${wUser.tag} has been banned`);
    }

}

module.exports.help={
  name:"warn"
}
