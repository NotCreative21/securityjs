const Discord = require('discord.js')
module.exports.run = (client, msg, args, config) =>{
    //command goes in here
    const embed = new Discord.MessageEmbed()
    .setDescription(`Bot Latency: ${Math.round((msg.createdTimestamp - Date.now())/100)} \n Api Latency: ${Math.round(client.ws.ping)}`)
    .setFooter(msg.author.tag)
    .setColor(config.color)
    msg.channel.send(embed)
}
