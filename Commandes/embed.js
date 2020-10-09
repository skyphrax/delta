const { MessageEmbed } = require("discord.js");
module.exports.run = (client,message, args) => {
  let perm = message.member.hasPermission('MANAGE_MESSAGES')
if(!perm) return message.channel.send("Tu n'as pas la permission de taper cette commande!")
  const embed = new MessageEmbed()
      .setColor("#dc143c") 
      .setTitle("Annonce ")
      .setURL("https://discord.com/api/oauth2/authorize?client_id=756908224988446770&permissions=8&scope=bot")
      .setDescription("Bonsoir voici comment ajouter le Bot Kwartz a votre serveur")
      .setThumbnail(client.user.displayAvatarURL())
      .setImage(client.user.displayAvatarURL())
      .addFields(
      { name: 'You just have to click on the link ✅', value: 'Click on the word "Announcement" which is marked in blue, This will redirect you to add the Delta Bot '},
      

      )


.setTimestamp()
.setFooter("All right reserved | DeltaBot ©️ 2020");

message.channel.send(embed);



    }

  module.exports.help = {
    name: 'embed',
    aliases : ['poster'],
    description: 'send the embed',
    usage: '',
    args : false
    

  };
