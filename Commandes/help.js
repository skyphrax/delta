const Discord = require("discord.js");
const {PREFIX} = require("../config.js");
const colours = require("../colours.json")

module.exports.run = (client, message, args) => {
    var help = new Discord.MessageEmbed()
        .setColor(colours.red_light)
        .setTitle(":globe_with_meridians: • Listes des commandes disponibles :")
        .addField(":zap: • __Administration__", "`say`, `annonce`, `setwelcome`, `setleave`")
        .addField(":warning: • __Modération__", "`ban`, `kick`, `clear`, `tempmute`, `dm`")
        .addField(":hammer: • __Utile__", "`help`, `ping`")
        .addField(":video_game: • __Divertissement__", "`sondage`")
        .addField(":film_frames: • __Fun__", "`dog`, `cat`, `8ball`")
        .setThumbnail(client.user.displayAvatarURL())
        .setColor("#282830");
        .setTimestamp()
        .setFooter ( `Tout droit résérvé | DeltaBot © ️ 2020` ,  client . user . displayAvatarURL )
         message.channel.send({ embed: help })
}

module.exports.help = {
    name: "help",
};
