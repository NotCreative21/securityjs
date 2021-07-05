const Discord = require('discord.js')
const fs = require('fs')
const jsonedit = require("edit-json-file");

module.exports.run = (client, msg, args, config) =>{
    const serverconfig = JSON.parse(fs.readFileSync(`./servers/${msg.guild.id}/members.json`))
    if (msg.member.roles.cache.has(serverconfig.adminRole) || msg.author.id == 566444484850745351) {
        const membersjson = jsonedit("../securityjs/servers/" + msg.guild.id + "/members.json");
        //membersjson.append("schoolusers", args[0]).save()
        const memberslistraw = JSON.parse(fs.readFileSync("../securityjs/servers/" + msg.guild.id + "/members.json"))
        const index = memberslistraw.schoolusers.indexOf(`${args[0]} ${args[1]}`);
        msg.channel.send(index)
        if (index > -1) {
            memberslistraw.schoolusers.splice(index, 1);
            if (args[0] && args[1]) {
                msg.channel.send(`successfully removed ${args[0]} ${args[1]} from database ID: ${msg.guild.id}`)
            }
        }
    }
}
