const Discord = require ("discord.js");

module.exports.run = (client,message, args) => {
  let perm = message.member.hasPermission('MANAGE_MESSAGES')
if(!perm) return message.channel.send("Tu n'as pas la permission de taper cette commande!")
  const embed = new Discord.MessageEmbed()
      .setColor("#f94343") 
      .setTitle("Liste des commandes de modérations")
      .setURL("https://discord.gg/pJnP2pP")
      .setThumbnail(client.user.displayAvatarURL())
      .setImage(client.user.displayAvatarURL())
      .addField("d!kick", "`| sert a kick une personne`")
      .addField("d!ban", "`| sert a ban une personne`")


.setTimestamp()
.setFooter("Tout droit résérvé | DeltaBot ©️ 2020");

message.channel.send(embed);



    }

  module.exports.help = {
    name: 'modhelp',
  };
