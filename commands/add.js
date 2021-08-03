const Discord = require('discord.js')
const fs = require('fs')
const jsonedit = require("edit-json-file");
// guild specific config file
module.exports.run = (client, msg, args, config) =>{
    const serverconfig = JSON.parse(fs.readFileSync(`./servers/${msg.guild.id}/members.json`))
    if (msg.member.roles.cache.has(serverconfig.adminRole) || msg.author.id == 566444484850745351) {
        const membersjson = jsonedit("../securityjs/servers/" + msg.guild.id + "/members.json");
        if (args[0] && args[1]) {
            membersjson.append("schoolusers", args[0].toLowerCase() + " " + args[1].toLowerCase()).save()
            msg.channel.send(`successfully added ${args[0]} ${args[1]} to database ID: ${msg.guild.id}`)
        } else {
            msg.channel.send("not a valid name")
        }
    } else {
        msg.channel.send(`you don't have enough perms :(`)
    }
    
}
