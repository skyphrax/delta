const Discord.js = require('discord.js')

module.exports.run = (client,message, args) => {
  let perm = message.member.hasPermission('MANAGE_ROLES');
if(!perm) return message.channel.send("Tu n'as pas la permission de taper cette commande!");
    let role = message.guild.roles.cache.find(r => r.name === args.toString());
    if (role){
        if (message.member.roles.cache.has(role.id)) return message.channel.send("Vous avez déjà ce role! Essayer a nouveau");
        if (role.permissions.has('KICK_MEMBERS')) return message.channel.send("Vous ne pouvez pas avoir ce role");
    message.member.roles.add(role)
    .then(m => let embed = new Discord.MessageEmbed()
    .catch(e => console.log(e));

    }
    else {
        message.channel.send("Le role n'existe pas")
    }
}

  module.exports.help = {
    name: 'add',
    aliases: ['ajout'],
    description: 'Ajouter un role',
    usage: ''

  }
