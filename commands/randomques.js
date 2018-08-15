 const Discord = require('discord.js');

 module.exports.run = async(bot,message,args)=>{
   // !randomques <question>
   if(!args[2]) return message.reply("please ask a question");
   let replies = ["Yes","No","I dont know","Sorry mate","later boii"];

   // the below line of code will pick the one of the options in the replies array randomly
   let result = Math.floor((Math.random()*replies.length));
   let question = args.slice(1).join(" ");

   let randomquesEmbed = new Discord.RichEmbed()
   .setAuthor(message.author.tag)
   .setColor("#21ddf2")
   .addField("Question asked:",question)
   .addField("Answer",replies[result]);

   message.channel.send(randomquesEmbed);

 }

 module.exports.help = {
   name:"randomques"
 }
