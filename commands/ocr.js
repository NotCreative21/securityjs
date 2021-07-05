const Discord = require('discord.js')
const fs = require('fs')
const jsonedit = require("edit-json-file");
const translate = require("translate");
// guild specific config file
module.exports.run = (client, msg, args, config) =>{
    translate.from = "en";
    translate.engine = "libre";
    const { createWorker } = require('tesseract.js');
    const worker = createWorker();
    const serverconfig = JSON.parse(fs.readFileSync(`./servers/${msg.guild.id}/members.json`))
    //msg.channel.send(JSON.stringify(serverconfig.ocr))
    if (JSON.stringify(serverconfig.ocr) === '"true"') {
        
        (async () => {
            let messageAttachment = msg.attachments.size > 0 ? msg.attachments.array()[0].url : null
            if(!messageAttachment) return;
            msg.channel.send(":monkey: Processing... this may take a while")
            msg.channel.send("recognizing image: <" + messageAttachment + ">")
            await worker.load();
            await worker.loadLanguage('eng');
            await worker.initialize('eng');
            const { data: { text } } = await worker.recognize(messageAttachment);
            //console.log(text)
            msg.channel.send(text);
            if (args[0]) {
                await translate(text, { from: "es" }).then(text => {
                    msg.channel.send("translated to english: " + text); // Hola mundo
                  });
                await worker.terminate();
                //await msg.channel.stopTyping();
            }
          })().catch(err => {
              msg.channel.send("Error occurred :(")
              console.log(err)
          });
         
    } else {
        msg.channel.send(`this server was not set for ocr`)
    }
    
}
