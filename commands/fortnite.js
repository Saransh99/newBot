const Discord = require('discord.js');
const config = require('../botConfig.json');
const apiKey = require('../keys.json');
const Fortnite = require('fortnite');
const ft = new Fortnite(apiKey.fortniteApikey);

module.exports.run = async(bot,message,args)=>{
  // platforms pc,xbl, psn
  // !fortnie username platform

  let username = args[0];
  let gameMode = args[1];
  let platform = args[2] || "pc";

  if(gameMode != 'solo' && gameMode != 'duo' && gameMode != 'squad' && gameMode != 'lifetime') return message.reply("Please enter a gameMode");

  if(!username) return message.reply("Please enter the uaername");

  let data = ft.user(username,platform).then(data=>{

   //console.log(data);   // for testing purpose

    let playerStats = data.stats;

    if(gameMode==='solo'){
      let soloStats = playerStats.solo;

      let kills = soloStats.kills;
      let matchesPlayed = soloStats.matches;
      let kd = soloStats.kd;
      let wins = soloStats.wins;
      let top_3 = soloStats.top_3;
      let score = soloStats.score;

      let fortniteEmbed = new Discord.RichEmbed()
      .setTitle('Fortnite Solo Stats')
      .setAuthor(data.username)
      .setColor(config.orange)
      .addField("Kills",kills, true)
      .addField("Wins",wins, true)
      .addField("KD",kd, true)
      .addField("Total Matches",matchesPlayed, true)
      .addField("Top 3",top_3, true)
      .addField("Score",score, true);

      message.channel.send(fortniteEmbed);

    }else if(gameMode==='duo'){
      let duoStats = playerStats.duo;

      let kills = duoStats.kills;
      let matchesPlayed = duoStats.matches;
      let kd = duoStats.kd;
      let wins = duoStats.wins;
      let top_3 = duoStats.top_3;
      let score = duoStats.score;

      let fortniteEmbed = new Discord.RichEmbed()
      .setTitle('Fortnite Duo Stats')
      .setAuthor(data.username)
      .setColor(config.orange)
      .addField("Kills",kills, true)
      .addField("Wins",wins, true)
      .addField("KD",kd, true)
      .addField("Total Matches",matchesPlayed, true)
      .addField("Top 3",top_3, true)
      .addField("Score",score, true);

      message.channel.send(fortniteEmbed);

    }else if(gameMode==='squad'){
      let squadStats = playerStats.squad;

      let kills = squadStats.kills;
      let matchesPlayed = squadStats.matches;
      let kd = squadStats.kd;
      let wins = squadStats.wins;
      let top_3 = squadStats.top_3;
      let score = squadStats.score;

      let fortniteEmbed = new Discord.RichEmbed()
      .setTitle('Fortnite Squad Stats')
      .setAuthor(data.username)
      .setColor(config.orange)
      .addField("Kills",kills, true)
      .addField("Wins",wins, true)
      .addField("KD",kd, true)
      .addField("Total Matches",matchesPlayed, true)
      .addField("Top 3",top_3, true)
      .addField("Score",score, true);

      message.channel.send(fortniteEmbed);

    }else{

    let lifetimeStats = playerStats.lifetime;
  //  console.log(lifetimeStats);
    let kills = lifetimeStats[10]['Kills'];
    let wins = lifetimeStats[8]['Wins'];
    let winPercent = lifetimeStats[9]['Win%'];
    let matchesPlayed = lifetimeStats[7]['Matches Played'];
    let kd = lifetimeStats[11]['K/d'];
    let top_10 = lifetimeStats[3]['Top 10'];

    let fortniteEmbed = new Discord.RichEmbed()
    .setTitle('Fortnite LifeTime Stats')
    .setAuthor(data.username)
    .setColor(config.orange)
    .addField("Kills",kills, true)
    .addField("Wins",wins, true)
    .addField("KD",kd, true)
    .addField("Total Matches",matchesPlayed, true)
    .addField("Top 10",top_10, true)
    .addField("Wins Percent",winPercent, true);

    message.channel.send(fortniteEmbed);
  }
  // end of the else
  }).catch(e=>{
    console.log(e);
    message.channel.send("cant find the username and the database");
  });
}

module.exports.help={
  name:"fortnite"
}
