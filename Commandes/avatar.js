const Discord = require("discord.js");
const {PREFIX} = require("../config.js");
const colours = require("../colours.json")

module.exports.run = (client, message, args) => {
  let user;
  
  if (message.mentions.users.first()) {
    user = message.mentions.users.first();
  
  } else {
    user = message.author;
  }
  
  let avatar = user.displayAvatarURL({size: 4096, dynamic: true});
  
  const embed = new Discord.MessageEmbed()
  .setTitle(`${user.tag} avatar`)
  .setDescription(`[Avatar URL de **${user.tag}**](${avatar})`)
  .setColor(0x00AE86)
  .setImage(avatar)
  
  return message.channel.send(embed);
}

module.exports.help = {
    name: "avatar",
};
