// invite link ///   https://discord.gg/jvd5K6
const botConfig = require("./botConfig.json");
const secretFiles = require("./secretFiles.json");
const Discord = require("discord.js");
const bot = new Discord.Client({disableEveryone:true});
//const dateTime = require('node-datetime');   / the module for the date and time in node.js use that

const botToken = secretFiles.token;
// the filesystem to load the commmands folder and the diff commands files
const fs = require('fs');
let coins = require("./coins.json");
let xp = require("./xp.json");
let purple = botConfig.purple;
let cooldown = new Set();
let cooldownSeconds = 5;

// the async fs.readdir reads the content of the dir
// the callback function takes two arguments one the err,file where the files is the name of all the files in the dir
bot.commands = new Discord.Collection();

// the readdir is an asynchrous function, this reads the contents of the directory

fs.readdir("./commands/",(err,files)=>{
  if(err) console.log(err);
  files.forEach(file=>{
    let eventFunction = require(`./commands/${file}`);
    // to check if all the commands files are loaded in the application

    console.log(`${file} is loaded`);
    let eventName = file.split(".")[0];
    bot.on(eventName,(...args)=>eventFunction.run(bot,...args));
  });
});

// ready is also an event this is triggered when the bot is online
bot.on("ready",async()=>{
    console.log('bot is online');
    bot.user.setActivity("VaingloryVG");
});

// this event will show an embed whenever a person joins the guild
// it is the guidMemberAdd event
bot.on("guidMemberAdd",async member =>{
  console.log('the guildMemberAdd event is working');
  console.log(`${member.id} join the server`);

  let welcomeChannel = member.guild.channels.find(`name`,'welcome_leave');
  welcomeChannel.send(`Welcome everyone, a new member ${member} has joined the server`);
});

// event for the guild member removal, same as the adding the member

bot.on("guildMemberRemove", async member =>{
  console.log(`${member.id} left the server`);

  let welcomeChannel = member.guild.channels.find(`name`,'welcome_leave');
  welcomeChannel.send(`GG the member ${member} has left the server`);
});

// the event for the channel creation
bot.on("channelCreate", async channel=>{
  console.log(`${channel.name} has been created`);
  let sChannel = channel.guild.channels.find(`name`,'general');
  sChannel.send(`${channel} has been created`);
});

// to delete the channel
bot.on("channelDelete", async channel=>{
  console.log(`${channel.name} has been deleted from the server`);

  let sChannel = channel.guild.channels.find(`name`,'general');
  // we pass the channel.name as the channel has been deleted so we cant tag that channel anymore
  sChannel.send(`${channel.name} has been deleted from the server`);
});


// this is a message event that is the bot will response every time a message is typed
bot.on("message",async message=>{

//let prefixCommand = botConfig.prefix;

let prefixes = JSON.parse(fs.readFileSync("./prefixes.json","utf8"));

// if there is no prefix set for the guild then we set the prefix for that server
if(!prefixes[message.guild.id]){
  prefixes[message.guild.id]={
    prefixes:botConfig.prefix
  };
}

// if the member sending the message doesnot have the coins then assign to them
if(!coins[message.author.id]){
  coins[message.author.id]={
    coins:0
  };
}

// if they are getting any coins
// we set the no. from 1 to 15 and set that to the coins amount
let coinAmount = Math.floor(Math.random()*15) +1;
//
let baseAmount = Math.floor(Math.random()*15) +1;
//console.log(`${coinAmount} ; ${baseAmount}`);

if(coinAmount===baseAmount){
  coins[message.author.id]={
    coins:coins[message.author.id].coins + coinAmount
  };
  fs.writeFile("./coins.json",JSON.stringify(coins),(err)=>{
    if(err) console.log(err);
  });
  let coinsEmbed = new Discord.RichEmbed()
  .setAuthor(message.author.username)
  .setColor("#d00bea")
  .addField("🎁",`${coinAmount} coins added`);

  message.channel.send(coinsEmbed).then(msg=>{msg.delete(5000)});

}
// the xp system

let xpAdd = Math.floor(Math.random() *7) + 8;
//console.log(xpAdd);
if(!xp[message.author.id]){
  xp[message.author.id]={
    xp:0,
    level:1
  };
}



let currentXp = xp[message.author.id].xp;
let currentLevel = xp[message.author.id].level;

let nextLevel = xp[message.author.id].level *300;

xp[message.author.id].xp = currentXp + xpAdd;

if(nextLevel<=xp[message.author.id].xp){
  xp[message.author.id].level = currentLevel + 1;
  let levelUp = new Discord.RichEmbed()
  .setTitle("LEVEL UP homie!!!")
  .setColor(purple)
  .addField("New Level",currentLevel+1);

  message.channel.send(levelUp).then(msg=>{msg.delete(5000)});
}
fs.writeFile("./xp.json",JSON.stringify(xp),(err)=>{
  if(err) console.log(err)
});
//console.log(`Level is${xp[message.author.id].level}`);

//------------------- end of the level  up code --------------------------


let prefix = prefixes[message.guild.id].prefixes;

// -------start of the cooldown -------------

if(!message.content.startsWith(prefix)) return;
if(cooldown.has(message.author.id)){
  message.delete();
  return message.reply("got to wait for 5 sec btw the commands");
}

if(!message.member.hasPermission("ADMINISTRATOR")){
   cooldown.add(message.author.id);
 }
// ---------------- end of the cooldown ------

//console.log(prefix);


const args = message.content.slice(prefix.length).trim().split(/ +/g);

// the shift() will remov the arguments from the message
// and the toLowerCase() will convert all the message to LowerCase so any thing will work
const command = args.shift().toLowerCase();

// the below try and catch block will handle all the commands in the folder and will load that file
// this is the basic commandHandler, this makes the main file clean and is easy to maintain
// the command we wil type in the discord wil be the file name and this will add the .js to the command

try{
  let commandFile = require(`./commands/${command}.js`);
  commandFile.run(bot,message,args);
}catch(err){
  console.log(err);
}

setTimeout(()=>{
  cooldown.delete(message.author.id);
},cooldownSeconds*1000);

});

bot.login(botToken);
