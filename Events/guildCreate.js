const Discord = require('discord.js');

module.exports = async (guild) => {
  guild.channels.create("Delta-Log", {type: "text"})
}
