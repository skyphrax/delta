const Discord = require ("discord.js");

module.exports.run = (client,message, args) => {
  let perm = message.member.hasPermission('MANAGE_MESSAGES')
if(!perm) return message.channel.send("Tu n'as pas la permission de taper cette commande!")
  const embed = new Discord.MessageEmbed()
      .setColor("#f94343") 
      .setTitle("Liste de commandes d'administrations")
      .setURL("https://discord.gg/pJnP2pP")
      .setThumbnail(client.user.displayAvatarURL())
      .setImage(client.user.displayAvatarURL())
      .addField("d!say", "`Sert a envoyer un message`")
      .addField("d!annonce", "`Sert a faire une annonce`")
      .addField("d!setwelcome", "`Sert a définir un canal pour le message de bienvenue`")
      .addField("d!setleave", "`Sert a définir un canal pour le message de bienvenue`")
      .addField("d!dm", "`Sert a convoqué une personne`")


.setTimestamp()
.setFooter("Tout droit résérvé | DeltaBot ©️ 2020");

message.channel.send(embed);
    }

  module.exports.help = {
    name: 'adminhelp',
  };
