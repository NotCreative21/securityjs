const Discord = require('discord.js')
module.exports.run = (client, msg, args, config) =>{
    //command goes in here
    const embed = new Discord.MessageEmbed()
    .setTitle('security bot invite')
    .setDescription('[admin perms](https://discord.com/oauth2/authorize?client_id=826091464546713620&scope=bot&permissions=8) \n [non-admin perms](https://discord.com/oauth2/authorize?client_id=826091464546713620&scope=bot)')
    .setFooter(msg.author.tag)
    .setColor(config.color)
    msg.channel.send(embed)
}
