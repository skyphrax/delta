const Discord = require('discord.js');
const {PREFIX} = require("../config.js");

module.exports = async (guild) => {
  guild.channels.create({name: "Delta-log", type: "text"})
}
