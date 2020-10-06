const Discord = require("discord.js");
const colours = require("../colours.json");

module.exports.run = async (client, message, args) => {
  const voicechannel = message.member.voice.channel;
  const musicPlayer = client.musicPlayer.get(message.guild.id);
  
  const destroyMusicClient = id
}
