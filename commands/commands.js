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
    .addField("Uptime:-",uptime)
    .addField("AddRole:- ",addRole)
    .addField("Show Avatar:-",showAvatar)
    .addField("Ban:",banPerson)
    .addField("About Bot:",aboutBot)
    .addField("Clear Msg:",clearMsg)
    .addField("Fortnite Stats:",fortniteStats)
    .addField("Kick User:",kickUser)
    .addField("Check Your Level:",checkLevel)
    .addField("Overwatch stats:",overwatchStats)
    .addField("Pay Coins:",payCoins)
    .addField("Rainbow Six Stats:",r6Stats)
    .addField("About Server:",aboutServer)
    .addField("Check Your Coins:",coinsCount);

    message.channel.send(commandsEmbed);
}

module.exports.help = {
    name:"commands"
}