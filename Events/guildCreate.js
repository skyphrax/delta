const Discord = require('discord.js');

module.exports = async (client, guild) => {
  createdChannel.send("Se salon a été créer pour config le bot")
  let createdChannel = await guild.channels.create("Delta-Log", {type: "text"})
  createdChannel.overwritePermissions([
    {
      id: guild.id,
      deny: ['VIEW_CHANNEL'],
    }
], "Création du salon log et fermeture de l'accès au public")
}
