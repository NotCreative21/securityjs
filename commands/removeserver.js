const Discord = require('discord.js')
const fs = require('fs')
module.exports.run = (client, msg, args, config) =>{
    //command goes in here
    let servers = []
    fs.readdirSync("../securityjs/servers").forEach(i => {
        if (i != `backups`) {
            servers.push(i)
        }
    })
    //msg.channel.send(servers)
    if (args[0] === "backups" && msg.author.id === 566444484850745351) {
        fs.rmdir("../securityjs/servers/backups" + msg.guild.id, (err) => {
            if (err && servers.includes(msg.guild.id)) {
                msg.channel.send(`Error occurred, please contact NotCreative`)
                return;
            }
            if (servers.includes(!msg.guild.id)) {
                msg.channel.send(`No database files to remove`)
                return;
            }
            msg.channel.send(`Guild ID: ${msg.guild.id} has been removed from backups`)
        });
        return;
    }
    fs.rmdir("../securityjs/servers/" + msg.guild.id, { recursive: true }, (err) => {
        if (servers.includes(!msg.guild.id)) {
            msg.channel.send(`No database files to remove`)
            return;
        }
        if (err) {
            msg.channel.send(`Error occurred, please contact NotCreative`)
            //console.log(err)
            return;
        }
        msg.channel.send(`Guild ID: ${msg.guild.id} has been removed from the database`)
    });
}
