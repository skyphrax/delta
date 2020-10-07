const Discord = require("discord.js");
const colours = require("../colours.json")
const ms = require("ms")
 
module.exports.run = async (bot, message, args) => {
 
    if(!message.member.hasPermission("MANAGE_ROLES") || !message.guild.owner) return message.channel.send("Vous n'avez pas la permissions pour faire cette commande !")
    if(!message.guild.me.hasPermission(["MANAGE_ROLES", "ADMINISTRATOR"])) return message.channel.send("Veuillez m'ajoutez ces permissions `MANAGE_ROLES` + `ADMINISTRATOR` pour utilisez cette commande.")
 
    let mutee = message.mentions.members.first() || message.guild.members.cache.get(args[0])
    if(!mutee) {
       const helpembed = new Discord.MessageEmbed()
   .setDescription("~Tempmute~")
   .setColor(colours.red_light)
   .addField("Mentionnez l'utilisateur", "```exemple: d!tempmute @steve ...```")
   .addField("La durée", "```exemple:d!tempmute @... number(s=second,d=days,y=years)```")
   .addField("La raison", "```exemple:d!tempmute @... ...d Raconte des choses racistes```")
    .setFooter(`Tout droit résérvé | DeltaBot © ️ 2020` , client.user.displayAvatarURL)
    message.channel.send(helpembed)
 
    let reason = args.slice(2).join(" ");
    if(!reason) reason = "Aucune raison donnée"
 
    let muterole = message.guild.roles.cache.find(r => r.name === "Mute")
    if(!muterole) { 
        return message.channel.send(':x: | Aucun rôle nommé `Mute` n\'est actuellement sur le serveur ! Veuillez en créer un, et configurer les salons.')
    }
 
    let muteTime = (args[1]);
    if(!muteTime) return message.channel.send("Spécifier la durée.")
 
    await mutee.roles.add(muterole.id).then(() => {
        message.delete()
 
        let MuteEmbed = new Discord.MessageEmbed()
        .setDescription(`TEMPMUTED - Vous avez été tempmute dans le serveur \`${message.guild.name}\` avec comme raison : **${reason}**`)
        .setColor(colours.orange)
 
        mutee.send(MuteEmbed).catch(err => console.log(err))
        message.channel.send(`${mutee.user.tag} à été mute.`)
        })
 
    let MuteLogEmbed = new Discord.MessageEmbed()
    .setColor(colours.orange)
    .setAuthor(`${message.guild.name} LOG`, message.guild.iconURL)
    .addField("Moderation :", "**TEMPMUTE**")
    .addField("Utilisateur ayant été tempmute", mutee.user.username)
    .addField("Utilisateur ayant tempmute", message.author.tag)
    .addField("Raison", reason)
 
    message.channel.send(MuteLogEmbed)
 
    setTimeout(() => {
        mutee.roles.remove(muterole.id)
        message.channel.send(`${mutee.user.tag} n'est plus mute.`)
        let TempMuteEmbed = new Discord.MessageEmbed()
        .setDescription(`UNMUTED - Vous avez été unmute dans le serveur \`${message.guild.name}\` avec comme raison : **${reason}**`)
        .setColor(colours.green_dark)
 
        mutee.send(TempMuteEmbed)
    }, ms(muteTime))
}
 
module.exports.help = {
    name: "tempmute"
}
