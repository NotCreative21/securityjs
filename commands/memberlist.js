const Discord = require('discord.js')
const fs = require('fs')
const jsonedit = require("edit-json-file");

module.exports.run = (client, msg, args, config) =>{
    let membersjsonlist = JSON.parse(fs.readFileSync("../securityjs/servers/" + msg.guild.id + "/members.json"))
    let membersstringlist = JSON.stringify(membersjsonlist.schoolusers)
    membersstringlist = membersstringlist.substr(16)
    if (membersstringlist.length > 1990) {
        var i,j,temparray,chunk = 1990;
        for (i=0,j=membersstringlist.length; i<j; i+=chunk) {
            temparray = membersstringlist.slice(i,i+chunk);
            msg.channel.send(temparray)
        }
        return
    } else {
        msg.channel.send(`Names: ${membersstringlist}`)
    }
    
}
