const Discord = require('discord.js')
const fs = require('fs')
module.exports.run = (client, msg, args, config) =>{
    let servers = []
    fs.readdirSync("../securityjs/servers/backups").forEach(i => {
        servers.push(`ID: ${i}`)
    })
    msg.channel.send(servers)
}
