const Discord = require("discord.js");
const colours = require("../colours.json");
 
module.exports.run = async (client, message, args) => {
 
   let kickedUser = message.guild.member(message.mentions.users.first() || message.guild.members.cache.get(args[0]));
    if(!kickedUser) {
       let helpembed = new Discord.MessageEmbed()
   .setDescription("-Kick-")
   .setColor(colours.red_light)
   .addField("Mentionnez l'utilisateur", "```exemple: d!kick @steve ...```")
   .addField("La raison", "```exemple:d!kick @... menace de ddos```")
    .setFooter(`Tout droit résérvé | DeltaBot © ️ 2020` , client.user.displayAvatarURL)
    message.channel.send(helpembed)
   }
   let kickReason = args.join(" ").slice(22);
   if(!message.member.hasPermission("MANAGE_MESSAGES")) {
       return message.channel.send("You don't have permission !")
   }
   if(kickedUser.hasPermission("MANAGE_MESSAGES")) {
       return message.channel.send("You don't kick this person")
   }
   let kickEmbed = new Discord.MessageEmbed()
   .setDescription("-Kick-")
   .setColor(colours.red_light)
   .addField("User kicked", `${kickedUser} (ID: ${kickedUser.id})`)
   .addField("Canal", message.channel)
   .addField("Raison", kickReason)
   . setTimestamp()
    . setFooter(`Tout droit résérvé | DeltaBot © ️ 2020`,  client.user.displayAvatarURL)
  
   message.channel.send(kickEmbed)
   message.guild.member(kickedUser).kick(kickReason);
}
 
module.exports.help = {
    name: "kick"
}
