const Discord = require('discord.js');

module.exports = async (client, guild) => {
  let createdChannel = await guild.channels.create("Delta-Log", {type: "text"})  
  createdChannel.overwritePermissions([
    {
      id: guild.id
      deny: ['VIEW_CHANNEL']
    }
])
