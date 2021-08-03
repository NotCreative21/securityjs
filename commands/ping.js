const Discord = require('discord.js')
module.exports.run = (client, msg, args, config) =>{
    //command goes in here
    const embed = new Discord.MessageEmbed()
    .setDescription(`Bot Latency: ${Math.round((Date.now() - msg.createdTimestamp))} \n Api Latency: ${Math.round(client.ws.ping)}`)
    .setFooter(msg.author.tag)
    .setColor(config.color)
    .icon_url(msg.author.avatarURL())
    msg.channel.send(embed)
}
