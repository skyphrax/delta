const Discord = require("discord.js");
const colours = require("../colours.json");
 
module.exports.run = async (bot, message, args) => {
 
    if(!message.member.hasPermission("MANAGE_MESSAGES"))
    return message.reply(":x:  Vous n'avez pas la permission.");
    return message.reply("Synthaxe: d!clear <nombre de message>");
 
    message.channel.bulkDelete(args[0]).then(() => {
        
        let clearEmbed = new Discord.MessageEmbed()
        .setColor(colours.red_light)
        .addField("Vous avez supprimer ", `${args[0]} message(s)`)

        message.channel.send(clearEmbed).then(async msg => {
            msg.delete({timeout: 5000})
        })
    })
}
 
module.exports.help = {
    name: "clear"
}
