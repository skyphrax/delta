const Discord = require("discord.js");
const {PREFIX} = require("../config.js");
const colours = require("../colours.json")
const superragent = require("superagent")

module.exports.run = async (client, message, args) => {
    let msg = await message.channel.send("Generating...")
    let {body} = await superragent
    .get(`https://dog.ceo/api/breeds/image/random`)
    if(!{body}) return message.channel.send("I broke ! Try again")

    let dEmbed = new Discord.MessageEmbed()
    .setColor(colours.red_light)
    .setAuthor(`Delta DOGS !`, message.guild.iconUrl)
    .setImage(body.message)
    .setTimestamp()
    .setFooter(`Tout droit résérvé | DeltaBot ©️ 2020`, client.user.displayAvatarURL)
    message.channel.send(dEmbed);
}

module.exports.help = {
    name: "dog"
}