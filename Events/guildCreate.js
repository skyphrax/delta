const Discord = require('discord.js');
const {PREFIX} = require("../config.js");

module.exports = async (guild) => {
  guild.channels.create("Delta-Log", {type: "text"})
}
