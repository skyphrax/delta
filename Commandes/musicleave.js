const Discord = require("discord.js");
const colours = require("../colours.json");

module.exports.run = async (client, message, args) => {
  const voicechannel = message.member.voice.channel;
  const musicPlayer = client.musicPlayer.get(message.guild.id);
  
  const destroyMusicClient = id => {
  client.music.player.destroy(id);
  client.musicPlayer.delete(id);
  }
  
  (musicPlayer && voiceChannel) && (musicPlayer.voiceChannel.id === voiceChannel.id) ? destroyMusicClient(message.guild.id) : message.channel.send("Veuillez rejoindre le même salon que le bot!");
}
