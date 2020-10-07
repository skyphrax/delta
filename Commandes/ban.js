const Discord = require("discord.js");
const colours = require("../colours.json");
 
module.exports.run = async (client, message, args) => {
 
   let bannedUser = message.guild.member(message.mentions.users.first() || message.guild.members.cache.get(args[0]));
   if(!bannedUser) {
       let helpembed = new Discord.MessageEmbed()
   .setDescription("~Ban~")
   .setColor(colours.red_light)
   .addField("Mentionnez l'utilisateur ```exemple: d!ban @steve ...```")
   .addField("La raison ```exemple:d!ban @... menace de ddos```")
    .setFooter(`Tout droit résérvé | DeltaBot © ️ 2020` , client.user.displayAvatarURL)
    message.channel.send(helpembed)
   }
   let banReason = args.join(" ").slice(22);
   if(!message.member.hasPermission("MANAGE_MESSAGES")) {
       return message.channel.send("You don't have permission !")
   }
   if(bannedUser.hasPermission("MANAGE_MESSAGES")) {
       return message.channel.send("You don't ban this person")
   }
   let banEmbed = new Discord.MessageEmbed()
   .setDescription("~Ban~")
   .setColor(colours.red_light)
   .addField("User banned", `${bannedUser} (ID: ${bannedUser.id})`)
   .addField("Autor of ban", `${message.author} (ID: ${message.author.id})`)
   .addField("Canal", message.channel)
   .addField("Raison", banReason)
   . setTimestamp ( )
    .setFooter(`Tout droit résérvé | DeltaBot © ️ 2020` , client.user.displayAvatarURL)

   message.channel.send(banEmbed)
 
   bannedUser.ban({banReason})
}
 
module.exports.help = {
    name: "ban"
}
