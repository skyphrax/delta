const Discord = require("discord.js")
const db = require("quick.db")

module.exports.run = async (client, message, args) => {
    
  
if(!message.member.hasPermission("MANAGE_MESSAGES")) {
  return message.channel.send(":x: | Vous n'avez pas les permissions !");
    }
  
    let channel = message.mentions.channels.first()
    
    if(!channel) {
      return message.channel.send(":x: | Veuillez indiquer le salon de leave à définir !")
    }
    
    
    db.set(`welchannel_${message.guild.id}`, channel.id)
    
  
    message.channel.send(`:white_check_mark: | Le salon de message de bienvenue est défini sur : ${channel}`)
  
}

module.exports.help = {
    name: "setwelcome"
}