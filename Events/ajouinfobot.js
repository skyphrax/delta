const Discord= require('discord.js')
module.exports = (client, guild) => {
    
    const channel = client.channels.cache.get("762692633231097866") //channel où le message sera mis
    //console.log(channel)
    let addembed = new Discord.MessageEmbed()
        .setTitle(`BOT vient d'être ajouté sur le serveur : ${guild.name}`)
        .setThumbnail(guild.iconURL())
        .addField(`👑 Propriétaire:`, `${guild.owner}`)
        .addField(`📇 Nom du serveur :`, `${guild.name}`)
        .addField(` Id du serveur:`, `${guild.id}`)
        .addField(` Nombre de membres:`, `${guild.memberCount}`)
        .setColor("11d646")
        .setTimestamp()
        .setFooter( `Merci grâce à toi nous sommes à ${client.guilds.cache.size} serveurs`, client.user.displayAvatarURL())
    channel.send(addembed)    
};
