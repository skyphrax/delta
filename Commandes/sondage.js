const Discord = require("discord.js");
const {PREFIX} = require("../config.js");
const colours = require("../colours.json")

module.exports.run = async (client, message, args) => {
    if(!message.member.hasPermission("MANAGE_ROLES") || !message.guild.owner) return message.channel.send("Vous n'avez pas la permissions pour faire cette commande !");
    message.delete().catch;
    let embed = new Discord.MessageEmbed()
    .setAuthor(message.author.username, message.author.displayAvatarURL())
    .setColor(colours.red_light)
    .setDescription(args.join(" "))
    .addField("répondre à la question ci-dessus à l'aide d'une des réactions:",
     `
     ✅- Pour (oui)
     ❔- Je sais pas
     ❌- Contre (non)
    `)
    .setTimestamp()
    .setFooter("N'hésitez pas à envoyer un nouveau sondage")

    let poll = await message.channel.send(embed);
    await poll.react("✅")
    await poll.react("❔")
    await poll.react("❌")
}

module.exports.help = {
    name: "sondage"
}