const Discord = require('discord.js')
const fs = require('fs')
const jsonedit = require("edit-json-file");

module.exports.run = (client, msg, args, config) =>{
    if (msg.member.id == config.nc) {
        const serverconfig = jsonedit(`./servers/${msg.guild.id}/members.json`)
        //const mainconfig = jsonedit("./config.json");
        //mainconfig.append("ocr", args[0]).save()
        serverconfig.set("ocr", "false").save()
        msg.channel.send(`successfully removed ocr for guild: ` + msg.guild.id)
    } else {
        msg.channel.send(`you don't have enough perms :(`)
    }
    
}