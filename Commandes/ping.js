const Discord = require('discord.js');
const {PREFIX} = require("../config.js");

module.exports.run = (client, message, args) => {
    const embed = new Discord.MessageEmbed()
        .setTitle(`Voici votre ping : ${client.ws.ping} ms`)
    . setTimestamp ( )
    . setFooter ( `Tout droit résérvé | DeltaBot © ️ 2020` ,  client . user . displayAvatarURL )
        return message.channel.send(embed)
}

module.exports.help = {
    name: "ping"
}
