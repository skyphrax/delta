const Discord = require("discord.js");
const {PREFIX} = require("../config.js");
const colours = require("../colours.json")

module.exports.run = (client, message, args) => {
    
    if(!args.length) {
      return message.channel.send("Please Give the Suggestion")
    }
                                                    
    
    let embed = new Discord.MessageEmbed()
    .setAuthor("SUGGESTION: " + message.author.tag, message.author.avatarURL())
    .setThumbnail(message.author.avatarURL())
    .setColor("#ff2050")
    .setDescription(args.join(" "))
    .setTimestamp()
    . setFooter ( `Tout droit résérvé | DeltaBot © ️ 2020` ,  client . user . displayAvatarURL )
    
    
    message.channel.send(embed).then(m => {
      m.react("✅")
      m.react("❌")
    })
    

    
}

module.exports.help = {
    name: 'suggest',

  }
