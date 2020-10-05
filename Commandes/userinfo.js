const Discord = require("discord.js");
const {PREFIX} = require("../config.js");
const colours = require("../colours.json")

module.exports.run = async (client, message, args) => {
    if (!message.guild)
    const user_mention = message.mentions.users.first();
    return message.channel.send("Une erreur s'est produite !");
    return message.reply("Syntaxe: d!ui <entrer l utilisateur mentionnnez>");
    const statusgame = {
        null: ":x: Aucun jeu"
      }
    
      const status = {
        online: "En ligne",
        idle: "Inactif",
        dnd: "Ne pas déranger ",
        offline: "Invisible"
      }
       var e = new Discord.MessageEmbed()
         .setThumbnail(message.author.displayAvatarURL)
       .setDescription(`**:bust_in_silhouette: Informations de l'utilisateur de  ${user_mention.tag} :**`)
         .addField("**:star:  | Pseudo :**", `**${user_mention.username}**`)
         .addField(
           "**:beginner:   | Discriminateur :**",
           ` **#${user_mention.discriminator}**`
         )
         .addField(
           "**:date:   | Création du compte :**",
           ` **$${user_mention.createdAt}**`
         )
         .addField("**:id:   | Identifiant :**", ` **${message.author.id}**`)
         .addField(
           "**:video_game:   | Jeu :**",
           ` **${statusgame[user_mention.presence.game]}**`
         )
         .addField(
           "**:computer:   | Status :**",
           ` **${status[user_mention.presence.status]}**`
         )
       .addField("**:busts_in_silhouette: | Aliases :**", "`userinfo` & `ui`")
   .setFooter(`${client.user.username} © 2020`)
   .setColor("GREEN")
       
       message.channel.send(e);
       message.react(":heavy_check_mark:");
}
  module.exports.help = {
    name: 'ui',
  }
