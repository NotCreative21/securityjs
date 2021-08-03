const Discord = require('discord.js')
module.exports.run = (client, msg, args, config) =>{
    //command goes in here
    if (!args) return msg.reply('Please specify the amount of messages to delete'); 
    try {
        amount = parseInt(args[0]) + 1;
    }
    catch {
        msg.reply("Please provide a number of messages to delete");
        return;
    }

    if (amount > 100) return msg.reply("Due to api limitations you cannot delete more than 100 messages (will be fixed soontm)"); 
    if (amount < 1) return msg.reply('You must specify a number of at least 1'); 

    msg.channel.messages.fetch({ limit: amount }).then(messages => { 
        msg.channel.bulkDelete(messages 
    )});
    const embed = new Discord.MessageEmbed()
    .setDescription(`${amount-1} message(s) deleted`)
    .setFooter(msg.author.tag)
    .setColor(config.color)
    msg.channel.send(embed)
}
