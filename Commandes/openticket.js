const Discord = require("discord.js");
const {PREFIX} = require("../config.js");
const colours = require("../colours.json")
const db = require('quick.db')

module.exports.run = async (client, message, args, member) => {
    message.delete()
    if(!message.member.hasPermission("ADMINISTRATOR")) return;
    let chd = db.get(`tickchannel_${member.guild.id}`);
    
    let OpenTicket = new Discord.MessageEmbed()
    .setDescription('React `📥` for open a ticket')
      message.guild.channels.cache.get(chd).send(OpenTicket).then(msg => msg.react('📥'))
}

module.exports.help = {
    name: "openticket"
}
