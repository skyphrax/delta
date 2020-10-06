const Discord = require('discord.js');

module.exports = async (client, guild) => {
  let createdChannel = await guild.channels.create("Delta-Log", {type: "text"})
  createdChannel.send({
	  const exampleEmbed = new Discord.MessageEmbed()
	.setColor('#0099ff')
	.setTitle('test')
	  
	channel.send(exampleEmbed);
  })
  
  
  createdChannel.overwritePermissions([
    {
      id: guild.id,
      deny: ['VIEW_CHANNEL'],
    }
], "Création du salon log et fermeture de l'accès au public")
}
