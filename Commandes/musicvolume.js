const Discord = require("discord.js");
const colours = require("../colours.json");

module.exports.run = async (client, message, args) => {
  const voicechannel = message.member.voice.channel;
  const musicPlayer = client.musicPlayer.get(message.guild.id);
  
  if(!(musicPlayer && voiceChannel) && (musicPlayer.voiceChannel.id === voiceChannel.id) message.channel.send("Veuillez rejoindre le même salon que le bot!"));
  
  if(!isNaN(args[0]) && (args[0] > 0 && args[0] < 100)) {
    musicPlayer.setVolume(args[0]);
    message.channel.send(`Le volume est maintenant: ${args[0]}`);
  } else {
    message.channel.send("Merci de choisir un nombre entre 1 et 100!");
  } else {
    message.channel.send(`Le volume est actuellement: ${musicPlayer.volume}.`);
}
  
module.exports.help = {
    name: "volume"
}
