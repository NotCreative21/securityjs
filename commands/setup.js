const Discord = require('discord.js')
const fs = require('fs')
module.exports.run = (client, msg, args, config) =>{
    //command goes in here
    let members = {
        "schoolusers": [],
        "verificationRole": "",
        "adminRole": ""
    };
    const serverconfig = JSON.parse(fs.readFileSync(`./servers/${msg.guild.id}/members.json`))
    if (msg.member.roles.cache.has(serverconfig.adminRole) || msg.author.id == 566444484850745351) {
        fs.mkdir(`./servers/` + msg.guild.id, (err) => {
            if (err) {
                msg.channel.send("Server already has folder in database")
                return;
            }
            msg.channel.send(`Server has been setup, folder ID: ${msg.guild.id}`);
            // convert JSON object to a string
            const data = JSON.stringify(members);
            fs.writeFile(`../securityjs/servers/${msg.guild.id}/members.json`, data, 'utf8', (err) => {
                if (err) {
                    msg.channel.send(`Error writing file: ${err}`);
                } 
            });
        })
    }
}
