const Discord = module.require('discord.js');
const colours = require("../colours.json");

module.exports.run = async (bot, message) => {
    
message.delete();

let desti = message.mentions.users.first()

const guild = message.guild;

if (!message.member.hasPermission('MANAGE_MESSAGES')) return message.channel.send('Vous n\'avez pas la permission d\'utiliser cette commande.')
if (!desti) {
    let helpembed = new Discord.MessageEmbed()
   .setDescription("~DM~")
   .setColor(colours.red_light)
   .addField("Mentionnez l'utilisateur", "```exemple: d!dm @steve ...```")
   .addField("La raison", "```exemple:d!dm @... allé dans attente recrutement```")
    message.channel.send({ embed: helpembed })
}
let messageArray = message.content.split(" ");
let args = messageArray.slice(1);
let texte = args.join(" ").slice(22);

const embed = new Discord.MessageEmbed()
  .setColor(colours.red_light)
  .setTitle("Attention")
  .setDescription(`**le serveur ${guild.name} vous a contactée**`)
  .addField('\u200B', `pour **${texte}**`)
  .setFooter(message.author.username,message.author.avatarURL({dynamic: true}))
  
desti.send(embed)

}
  module.exports.help = {
    name: "dm"
}
