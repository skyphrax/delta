const Discord = require("discord.js");
const {PREFIX} = require("../config.js");
const colours = require("../colours.json")

module.exports.run = async (client, message, args) => {
    if(!message.member.hasPermission("MANAGE_ROLES") || !message.guild.owner) return message.channel.send("Vous n'avez pas la permissions pour faire cette commande !");
    message.delete().catch;
    let a = new Discord.MessageEmbed()
    .setColor(colours.red_light)
    .setDescription(args.slice(0).join(" "))
    .setTitle("Votre message")
    .setAuthor(message.author.username)
    .setFooter(`Tout droit résérvé | DeltaBot ©️ 2020`)
    message.channel.send(a)
}

module.exports.help = {
    name: "say"
}