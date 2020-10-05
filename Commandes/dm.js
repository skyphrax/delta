const Discord = module.require('discord.js');
const colours = require("../colours.json");

module.exports.run = async (bot, message) => {
    
message.delete();

let desti = message.mentions.users.first()

const guild = message.guild;

if (!message.member.hasPermission('MANAGE_MESSAGES')) return message.channel.send('Vous n\'avez pas la permission d\'utiliser cette commande.')
if (!desti) return message.channel.send('Veuillez mentionner la personne a dm')
let messageArray = message.content.split(" ");
let args = messageArray.slice(1);
let texte = args.join(" ").slice(22);
if(!texte) return message.reply("Veuillez indiquer un texte à envoyer")

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