const Discord = require('discord.js')
const fs = require('fs')
const jsonedit = require("edit-json-file");

module.exports.run = (client, msg, args, config) =>{
    if (msg.member.roles.cache.has(config.adminRole) || msg.author.id == 566444484850745351) {
        const membersjson = jsonedit("../securityjs/servers/" + msg.guild.id + "/members.json");
        if (args[0]) {
            membersjson.set("verificationRole", args[0]).save()
            msg.channel.send(`successfully set ${args[0]} as verification role to database ID: ${msg.guild.id}`)
        } else {
            msg.channel.send("not a valid role id")
        }
    } else {
        msg.channel.send(`you don't have enough perms :(`)
    }
    
}