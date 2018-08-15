const Discord = require('discord.js');
const botConfig = require('../botConfig.json');
const RainbowSixApi = require('rainbowsix-api-node');
const R6 = new RainbowSixApi();

module.exports.run = async(bot,message,args)=>{
  let username = args[0];
  let platform = args[1] || "uplay";

  if(!username) return message.reply("Please enter the username!!!");
  if(!platform) return message.reply("Please enter the platform");

let response = R6.stats(username, platform,true).then(response => {

    //console.log(response);
    let records = response.operator_records[0];
    //let Stats = records.stats;
    //console.log(records);
    let gamesPlayed = records.stats['played'];
    let wins = records.stats['wins'];
    let losses = records.stats['losses'];
    let kills = records.stats['kills'];
    let deaths = records.stats['deaths'];
    let name = records.operator['name'];
    let role = records.operator['role'];
    //let icon = records.operator['images'];
    //let image = icon.figure;
// ---------------for testing purpose in the console  --------------------
  //   console.log(role);
  //   console.log(gamesPlayed);
  //   console.log(wins);
  //   console.log(name);
  //   console.log(losses);
  //   console.log(kills);
  //   console.log(deaths);
  // //  message.reply(image);

    //console.log(response);
    //message.reply(response);
    //  --------------------- end of the testing in the console ----------

    let r6Embed = new Discord.RichEmbed()
    .setTitle("Rainbow Six Siege:")
    .setAuthor(username)
    .setColor(botConfig.someYellow)
    .addField("Total Games",gamesPlayed,true)
    .addField("Wins",wins,true)
    .addField("Lost",losses,true)
    .addField("Kills",kills,true)
    .addField("Deaths",deaths,true)
    .addField("Role",role,true);

    message.channel.send(r6Embed);

}).catch(e => {
    console.log(e);
    console.log("The playername was not found in the database");
    message.reply("Player not found");
});
}

module.exports.help={
  name:"rainbowsix"
}
