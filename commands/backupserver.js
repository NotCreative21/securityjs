const Discord = require('discord.js')
const fs = require('fs')
const fse = require('fs-extra');
module.exports.run = (client, msg, args, config) =>{
  if (msg.member.id === config.nc) {
    const srcDir = `../securityjs/servers/` + msg.guild.id;
    const destDir = `../securityjs/servers/backups/` + msg.guild.id;
    fse.copySync(srcDir, destDir, { overwrite: true }, function (err) {
        if (err) {                 
          msg.channel.send("Error occurred: " + err); 
          return;
        }
    });
    msg.channel.send(`Database ID: ${msg.guild.id} has been backed up`);
  }
}
