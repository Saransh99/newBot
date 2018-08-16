const Discord = require('discord.js');
const botConfig = require('../botConfig.json');

module.exports.run = async(bot,message,args)=>{

    let uptime = "!uptime";
    let addRole = "!addrole <role name>";
    let showAvatar = "!avatar";
    let banPerson = " !ban <username> only persons with permission";
    let aboutBot = " !botinfo";
    let clearMsg = " !clear <no. of commands>";
    let fortniteStats = " !fortnite <epicId> <gameMode> <platform>";
    let kickUser = " !kick <memeber> <reason>";
    let checkLevel = " !level";
    let overwatchStats = " !overwatch <username>";
    let payCoins = " !pay <username> <coins>";
    let r6Stats = " !rainbowsix <username> <platform>";
    let aboutServer = " !server";
    let coinsCount = "!coins";

    let commandsEmbed = new Discord.RichEmbed()
    .setTitle('**COMMANDS**')
    .setColor(botConfig.navyKindOfBlue)
    .addField("Uptime:-",uptime,true)
    .addField("AddRole:- ",addRole,true)
    .addField("Show Avatar:-",showAvatar,true)
    .addField("Ban:",banPerson,true)
    .addField("About Bot:",aboutBot,true)
    .addField("Clear Msg:",clearMsg,true)
    .addField("Fortnite Stats:",fortniteStats,true)
    .addField("Kick User:",kickUser,true)
    .addField("Check Your Level:",checkLevel,true)
    .addField("Overwatch stats:",overwatchStats,true)
    .addField("Pay Coins:",payCoins,true)
    .addField("Rainbow Six Stats:",r6Stats,true)
    .addField("About Server:",aboutServer,true)
    .addField("Check Your Coins:",coinsCount,true);

    message.channel.send(commandsEmbed);
}

module.exports.help = {
    name:"commands"
}