const Discord = require('discord.js')
const fs = require('fs')
const jsonedit = require("edit-json-file");
module.exports.run = (client, msg, args, config) =>{
    const membersjson = jsonedit("../securityjs/servers/" + msg.guild.id + "/members.json");
    let membersjsonlist = JSON.parse(fs.readFileSync("../securityjs/servers/" + msg.guild.id + "/members.json"))
    if (membersjsonlist.schoolusers.includes((args[0].concat(" " + args[1])).toLowerCase())) {
        var index = membersjsonlist.schoolusers.indexOf((args[0].concat(" " + args[1])).toLowerCase());
        //index > -1 ? membersjsonlist.schoolusers.splice(index, 2) : false
        if (index > -1) {
            membersjsonlist.schoolusers.splice(index, 1, (args[0].concat("-" + args[1])).toLowerCase())
            testlist = membersjsonlist.schoolusers
            //console.log(membersjsonlist)
            membersjson.set("schoolusers", testlist).save()
        }
        msg.channel.send(`You have verified correctly as ${(args[0].concat(" " + args[1])).toLowerCase()}`)
        var role = msg.guild.roles.cache.find(role => role.id === membersjsonlist.verificationRole);
        if (role) msg.guild.members.cache.get(msg.author.id).roles.add(role);
        else msg.channel.send("Error occurred :(")
    } else {
        msg.channel.send("failed to verify (if you have the students role you are already verified)")
    }

    /*collector.on('end', collected => {
        console.log(`Collected ${collected.size} items`);
    });*/
}
