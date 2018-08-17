const Discord = require('discord.js');
const fs = require('fs');

// !sharefiles <filePath> <filename>

module.exports.run = async(bot, message,args)=>{

    var filePath = args[0];
    var fileName = args[1] || "default.txt";

    if(filePath==null){
        console.log("no file path");
        message.channel.send("enter the file path");
    }

    const buffer = fs.readFileSync(filePath);
    const attachment = new Discord.Attachment(buffer,fileName);
    message.channel.send(`${message.author} shared the file ${fileName}`, attachment);
}

module.exports.help = {
    name:"shareFiles"
}