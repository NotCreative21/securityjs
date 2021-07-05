const Discord = require('discord.js')
const fs = require('fs')
const jsonedit = require("edit-json-file");

module.exports.run = (client, msg, args, config) =>{
    if (msg.member.id == config.nc) {
        const mainconfig = jsonedit("./config.json");
        if (args[0]) {
            mainconfig.append("ocr", args[0]).save()
            msg.channel.send(`successfully set ${args[0]} as an ocr channel`)
        } else {
            msg.channel.send("not a valid channel id")
        }
    } else {
        msg.channel.send(`you don't have enough perms :(`)
    }
    
}