const Discord = require('discord.js')
const fs = require('fs')
const jsonedit = require("edit-json-file");

module.exports.run = (client, msg, args, config) =>{
    if (msg.member.id == config.nc) {
        const membersjson = jsonedit("./servers/" + msg.guild.id + "/members.json");
        if (args[0]) {
            membersjson.set("adminRole", args[0]).save()
            //msg.channel.send(JSON.stringify(membersjson))
            msg.channel.send(`successfully set ${args[0]} as admin role to database ID: ${msg.guild.id}`)
        } else {
            msg.channel.send("not a valid role id")
        }
    } else {
        msg.channel.send(`you don't have enough perms :(`)
    }
    
}