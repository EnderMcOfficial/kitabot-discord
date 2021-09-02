const dbd = require("aoi.js");
 
const bot = new dbd.Bot({
token: "ODYxODE5NDAyMjY0OTAzNzAw.YOPV3Q.I-UF3INIxlG077hdIdDV8X03mxc", 
prefix: ["k!","K!"]
})
 
bot.onMessage()
 
const fs = require('fs')

const folders = fs.readdirSync("./commands/")

for (const files of folders) {
const folder = fs.readdirSync(`./commands/${files}/`).filter(file => file.endsWith(".js"))

for (const commands of folder) {
const command = require(`./commands/${files}/${commands}`) 
bot.command({
name: command.name,
aliases: commands.aliases,
code: command.code
})
} 
}

bot.status({
    text: "My Prefix is: k! | KitaBot",
    type: "PLAYING",
    status: "online",
    time: 12
})

bot.status({
    text: "$allMembersCount Servers! | KitaBot",
    type: "WATCHING",
    status: "online",
    time: 12
})

bot.variables({
    prefix: "K!",
    xp: "0",
    level: "0",
    req: "50",
    expcd: "45",
    leveling: "enabled",
    money: "0",
    reportchannel: "",
    reportmsg: "The user has been reported to staff",
    reportping: ""
  })

bot.command({
    name: "$alwaysExecute",
    code: `
   $setUserVar[xp;$sum[$getUserVar[xp];$random[5;25]]]
   $cooldown[$getServerVar[expcd]s;]

   $onlyIf[$isBot[$authorID]==false;]
   $onlyIf[$checkContains[$channelType;text;news]==true;]
   $onlyIf[$checkContains[$getServerVar[leveling];enable;enabled]==true;]
   $suppressErrors` 
   })

bot.command({
    name: "$alwaysExecute",
    code: `
   $description[Great work <@$authorID>! You leveled up to **$getUserVar[level]**!]
   $color[RANDOM]
   $setUserVar[req;$multi[$getUserVar[req];2]]
   $setUserVar[xp;0]
   $setUserVar[level;$sum[$getUserVar[level];1]]
   $onlyIf[$getUserVar[req]<$getUserVar[xp];]
   $onlyIf[$checkContains[$channelType;text;news]==true;]
   $onlyIf[$checkContains[$getServerVar[leveling];enable;enabled]==true;]
   $suppressErrors
   `
   })
