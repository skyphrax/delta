const Discord = require ("discord.js");
const colors = require ("../ colours.json");

module.exports.run = (client,message, args) => {
  let perm = message.member.hasPermission('MANAGE_MESSAGES')
if(!perm) return message.channel.send("Tu n'as pas la permission de taper cette commande!")
  const embed = new Discord.MessageEmbed()
      .setColor(colours.red_light) 
      .setTitle("Liste des commandes de modérations")
      .setURL("https://discord.gg/pJnP2pP")
      .setDescription("Annonce à l'attention de tout le monde")
      .setThumbnail(client.user.displayAvatarURL())
      .setImage(client.user.displayAvatarURL())
      .addField("Quel est ce bot?","Ce bot est le bot qui sera rendu public lors de la fin de son developpement.")
      .addFields(
      { name: 'Date du bot ', value: 'Le 2 Octobre 2020', inline: true},
      { name: 'Fonctionnalité du Bot', value: 'Il sera polyvalent et pourra vous aidez dans plusieurs taches.Pour plus,contactez Kwartz Kreiz#0001', inline: true}

      )


.setTimestamp()
.setFooter("Tout droit résérvé | DeltaBot ©️ 2020");

message.channel.send(embed);



    }

  module.exports.help = {
    name: 'modhelp',
  };
