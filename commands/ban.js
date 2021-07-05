const Discord = require('discord.js')
module.exports.run = (client, msg, args, config) =>{
    const serverconfig = JSON.parse(fs.readFileSync(`./servers/${msg.guild.id}/members.json`))
    if (msg.member.roles.cache.has(serverconfig.adminRole) || msg.author.id == 566444484850745351) {
        if (msg.members.mentions.first()) {
            try {
                msg.members.mentions.ban();
            } catch {
                msg.reply("I do not have permissions to ban" + msg.members.mentions);
            }
        } else {
            msg.reply("You do not have permissions to ban" + msg.members.mentions);
        }
    }
}
