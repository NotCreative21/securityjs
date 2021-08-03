// Code by NotCreative, inspired by AFunkyMonk(yoinked from hypnos bot)
// Defines Discord and client
const Discord = require('discord.js')
const client = new Discord.Client()
const fs = require('fs')
client.commands = new Discord.Collection()
// config file
const config = JSON.parse(fs.readFileSync("./config.json"))
let commandlist = []
// Command Handler
fs.readdirSync("./commands").forEach(i => { 
    if (!i.endsWith(".js")) return;
    let commandFile = i.split(".")[0].trim()
    commandlist.push(i)
    client.commands.set(commandFile, require(`./commands/${commandFile}.js`))
})
console.log(`Loaded ${client.commands.size} commands.`)

//When bot is up and running it just logs it to console
client.on('ready', () => {
    console.log(`Logged in as ${client.user.tag}!`);
    client.user.setPresence({ activity: { name: 'transitioning to javascript'}, status: 'dnd'});
})

client.on('message', msg => {
    try {
        if(config.ocr.includes(msg.channel.id)) {
            if (msg.author.id != client.user.id) {
                const args = msg.content.slice(config.prefix.length).trim().split(/ +/)
                const command = args.shift().toLowerCase()
                client.commands.get("ocr").run(client, msg, args, config)
                return;
            }
        }
        //Returns if msg doesn't start with prefix
        if(!msg.content.startsWith(config.prefix)) return
        if(msg.content.length <= 2) return
        if(msg.content == "!commandslist") {
            msg.channel.send("Command list: " + commandlist)
            return
        }
        //Declares args and command value
        const args = msg.content.slice(config.prefix.length).trim().split(/ +/)
        const command = args.shift().toLowerCase()
        client.commands.get(command).run(client, msg, args, config) /*
        try {
            client.commands.get(command).run(client, msg, args, config)
        } catch (err) {
            console.log("invalid command");
        }*/
    }catch (err) {
        console.log("upsi command had error " + err);
    }
})
//Logs into the bot
client.login(config.token).catch(()=>{
    console.error("Invalid token")
})