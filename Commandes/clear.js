const Discord = require("discord.js");
const colours = require("../colours.json");
 
module.exports.run = async (bot, message, args) => {
 
    if(!message.member.hasPermission("MANAGE_MESSAGES"))
    return message.reply(":x:  Vous n'avez pas la permission.");
    if(!args[0])
    return message.reply("Syntaxe: d!clear <entrer le nombre à supprimer>");
 
    message.channel.bulkDelete(args[0]).then(() => {
        
        let clearEmbed = new Discord.MessageEmbed()
        .setDescription("~Clear~")
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