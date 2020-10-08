const Discord = require("discord.js");
const {PREFIX} = require("../config.js");
const colours = require("../colours.json")

module.exports.run = async (client, message, args) => {
    message.delete()
    if(!message.member.hasPermission("ADMINISTRATOR")) return;
    
    let OpenTicket = new Discord.MessageEmbed()
    .setDescription('React `📥` for open a ticket')
    message.channel.send(OpenTicket)
    .then(msg => msg.react('📥'))
}

module.exports.help = {
    name: "openticket"
}
