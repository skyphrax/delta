const Discord = require ("discord.js");

module.exports.run = (client,message, args) => {
  let perm = message.member.hasPermission('MANAGE_MESSAGES')
if(!perm) return message.channel.send("Tu n'as pas la permission de taper cette commande!")
  const embed = new Discord.MessageEmbed()
      .setColor("#f94343") 
      .setTitle("Liste de commandes de modérations")
      .setURL("https://discord.gg/pJnP2pP")
      .setThumbnail(client.user.displayAvatarURL())
      .setImage(client.user.displayAvatarURL())
      .addField("d!kick", "`Sert a kick une personne`")
      .addField("d!ban", "`Sert a ban une personne`")
      .addField("d!tempmute", "`Sert a mute une personne`")
      .addField("d!clear", "`Sert a clear des messages`")


.setTimestamp()
.setFooter("Tout droit résérvé | DeltaBot ©️ 2020");

message.channel.send(embed);



    }

  module.exports.help = {
    name: 'modhelp',
  };
