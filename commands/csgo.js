// const Discord = require('discord.js');
// const botConfig = require('../botConfig.json');
// const Steam = require('steam');
// const steamClient  = new Steam.SteamClient();
// const steamUser = new Steam.SteamUser(steamClient);
// const steamGC  = new Steam.SteamGameCoordinator(steamClient,730);
// const csgo =require('csgo');
// const CSGO = new csgo.CSGOClient(steamUser,steamGC,false);
//
// module.exports.run = async(bot,message,args)=>{
//   let username = args[0];
//   let steamPassword = args[1];
//
//   if(!username) return message.reply("please enter the username");
//   if(!steamPassword) return message.reply("Please enter the password");
//
//   const logOnOptions = {
//     accountName:username,
//     password:steamPassword
//     //twoFactorCode:steamTotp.generateAuthCode(botConfig.shared_secret)
//   };
//
//   // let csgoAccountId = CSGO.ToAccountID(username);
//   // console.log(csgoAccountId);
//   steamClient.logOn(logOnOptions);
//   steamClient.on('loggedOn',()=>{
//     console.log('logged in the steam account');
//     steamClient.setPersona(steamUser.Steam.EPersonaState.Online);
//
//   });
// }
//
// module.exports.help={
//   name:"steam"
// }
