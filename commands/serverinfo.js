const Discord = require('discord.js')
module.exports.run = (client, msg, args, config) =>{
    //command goes in here
    if (msg.guild.widgetEnabled) {
        var widgetValue = "true"; 
    }
    else {
        var widgetValue = "false";
    }
    if (msg.guild.mfalevel) {
        var mfaValue = "true"; 
    }
    else {
        var mfaValue = "false";
    }
    if (!msg.guild.icon_url) {
        var guildThumb = "https://www.freepnglogos.com/uploads/discord-logo-png/concours-discord-cartes-voeux-fortnite-france-6.png"; 
    }
    if (!msg.guild.description) {
        var guildDes = "None"; 
    }
    
    const embed = {
        "title": `${msg.guild.name} info`,
        "color": config.color,
        "footer": {

            "text": msg.author.tag
        },
        "thumbnail": {
            "url": guildThumb
        },
        "fields": [
            {
            "name": "Guild Owner",
            "value": String(msg.guild.ownerID),
            "inline": true
            },
            {
            "name": "Guild ID",
            "value": String(msg.guild.id),
            "inline": true
            },
            {
            "name": "Member count",
            "value": msg.guild.memberCount,
            "inline": true
            },
            {
            "name": "MFA level",
            "value": mfaValue,
            "inline": true
            },
            {
            "name": "Nitro Subscribers",
            "value": msg.guild.premiumSubscriptionCount,
            "inline": true
            },
            {
                "name": "Creation Date",
                "value": msg.guild.createdTimestamp,
                "inline": true
            },
            {
                "name": "Guild Description",
                "value": guildDes,
                "inline": true
            },
            {
                "name": "Explicit content filter level",
                "value": msg.guild.explicitContentFilter,
                "inline": true
            },
            {
                "name": "Maximum Member count",
                "value": msg.guild.maximumMembers,
                "inline": true
            },
            {
                "name": "Prefered language",
                "value": msg.guild.preferredLocale,
                "inline": true
            },
            {
                "name": "Guild Region",
                "value": msg.guild.region,
                "inline": true
            },
            {
                "name": "Websocket shard",
                "value": String(msg.guild.shard),
                "inline": true
            },
            {
                "name": "Verification level",
                "value": msg.guild.verificationLevel,
                "inline": true
            },
            {
                "name": "Server widget",
                "value": widgetValue,
                "inline": true
            }
        ]
    };
    console.log(embed)
    //msg.channel.send(embed)
}
