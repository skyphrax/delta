const Discord = require("discord.js");
const { PREFIX } = require("../config.js");
const colours = require("../colours.json");

module.exports.run = async (client, message, args) => {
  
  if(!args.join("")) {
    return message.reply("veuillez indiquer un message :thinking:")
  }
  const replies = ["Oui", "Non", "Peut-être", "laisse moi dormir"];
  const question = args.join(" ");
  const response = Math.floor(Math.random() * replies.length);

  let embed = new Discord.MessageEmbed()
    .setAuthor(message.author.username, message.author.displayAvatarURL())
    .setColor(colours.red_light)
    .setThumbnail(
      "https://e7.pngegg.com/pngimages/260/536/png-clipart-magic-8-ball-billiards-eight-ball-pool-billiard-balls-billiards.png"
    .addField(question, replies[response])
    )
   . setTimestamp ( )
    . setFooter ( `Tout droit résérvé | DeltaBot © ️ 2020` ,  client . user . displayAvatarURL )

  message.channel.send(embed);
};

module.exports.help = {
  name: "8ball"
};
