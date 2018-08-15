const Discord = require('discord.js');
const botConfig = require('../botConfig.json');
const overwatch = require('overwatch-api');

module.exports.run = async(bot,message,args)=>{

  let username = args[0];
  let platform = args[1] || "pc";
  let region = args[2];


  if(!username) return message.reply("Please enter a username");
  if(!region) return message.reply("Please enter a region");

  overwatch.getProfile(platform, region, username, (err, json) => {
    if (err) console.error(err);
    //console.log(json);
      let name = json.username;
      let level = json.level;
      let Games = json.games;
      let casualwins = Games.quickplay['won'];
      let compWins = Games.competitive['won'];
      let compLoses = Games.competitive['lost'];
      //let compDraw = Games.competitive['draw'];
      let compMatches = Games.competitive['played'];
      let playTime = json.playtime;
      let quickPlayTime = playTime.quickplay;
      let competitveTime = playTime.competitive;
      let OverwatchRank = json.competitive;
      let compRank = OverwatchRank.rank;
      let rankImage = OverwatchRank.rank_img;
      let image = json.portrait;

      // ---------------- for testing in the console  ------------------
      // console.log(level);
      // console.log(compRank);
      // console.log(quickPlayTime);
      // console.log(competitveTime);
      // console.log(name);
      // console.log(casualwins);
      // console.log(compWins);
      // console.log(compLoses);
      // console.log(compMatches);

      //---------------------- end  of the testing in the console  -----------------

     let overWatchEmbed = new Discord.RichEmbed()
     .setTitle('OverWatch Stats')
     .setAuthor(name)
     .setColor(botConfig.someGreen)
     .setFooter("Competitve Rank",rankImage)
     .setThumbnail(image)
     .addField("Casual Wins",casualwins,true)
     .addField("Competitve Matches",compMatches,true)
     .addField("Competitve Wins",compWins,true)
     .addField("Competitve Loses",compLoses,true)
     .addField("Rank",compRank,true)
     .addField("Quick Play Time",quickPlayTime,true)
     .addField("Competitve Play Time",competitveTime,true)
     .addField("Level",level,true);

     message.channel.send(overWatchEmbed);

  });

}

module.exports.help={
  name:"pubg"
}
