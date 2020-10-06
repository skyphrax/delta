const Discord = require('discord.js');

module.exports = async (client, guild) => {
  guild.channels.create("Delta-Log", {type: "text"})
}
