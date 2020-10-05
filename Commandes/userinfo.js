const Discord = require("discord.js");
const {PREFIX} = require("../config.js");
const colours = require("../colours.json")

module.exports.run = async (client, message, args) => {
    if (!message.guild)
    return message.channel.send("Une erreur s'est produite !");
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
       .setDescription(`**:bust_in_silhouette: Informations de l'utilisateur de  ${message.author.username} :**`)
         .addField("**:star:  | Pseudo :**", `**${message.author.username}**`)
         .addField(
           "**:beginner:   | Discriminateur :**",
           ` **#${message.author.discriminator}**`
         )
         .addField(
           "**:date:   | Création du compte :**",
           ` **${message.author.createdAt}**`
         )
         .addField("**:id:   | Identifiant :**", ` **${message.author.id}**`)
         .addField(
           "**:video_game:   | Jeu :**",
           ` **${statusgame[message.author.presence.game]}**`
         )
         .addField(
           "**:computer:   | Status :**",
           ` **${status[message.author.presence.status]}**`
         )
       .addField("**:busts_in_silhouette: | Aliases :**", "`userinfo` & `ui`")
   .setFooter(`${client.user.username} © 2020`)
   .setColor("GREEN")
         .setTimestamp()
    . setFooter ( `Tout droit résérvé | DeltaBot © ️ 2020` ,  client . user . displayAvatarURL )
       
       message.channel.send(e);
       message.react(":heavy_check_mark:");
}
  module.exports.help = {
    name: 'ui',

  }
