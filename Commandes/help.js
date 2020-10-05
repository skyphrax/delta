const Discord = require("discord.js");
const {PREFIX} = require("../config.js");

module.exports.run = (client, message, args) => {
    var help = new Discord.MessageEmbed()
        .setColor("RANDOM")
        .setTitle(":globe_with_meridians: • Listes des commandes disponibles :")
        .addField(":zap: • __Administration__", "`say`, `annonce`, `setwelcome`, `setleave`")
        .addField(":warning: • __Modération__", "`ban`, `kick`, `clear`, `tempmute`, `dm`")
        .addField(":hammer: • __Utile__", "`help`, `ping`")
        .addField(":video_game: • __Divertissement__", "`sondage`")
        .addField(":film_frames: • __Fun__", "`dog`, `cat`, `8ball`")
        .setThumbnail(client.user.displayAvatarURL())
        .setColor("#282830");
    message.channel.send({ embed: help })
}

module.exports.help = {
    name: "help",
};