const Discord = require('discord.js');
const client = new Discord.Client();
const fs = require('fs');
const {TOKEN, PREFIX} = require("./config.js");
const colours = require("./colours.json");
const db = require('quick.db')
client.login(process.env.TOKEN);

client.commands = new Discord.Collection();
fs.readdir("./Commandes/", (error, f) => {
  if(error) console.log(error);

  let commandes = f.filter(f => f.split(".").pop() === "js");
  if(commandes.length <= 0) return console.log("aucune commande trouvé dans le dossier");

  commandes.forEach((f) => {
    let commande = require(`./Commandes/${f}`);
    console.log(`${f} commande chargée !`);
    client.commands.set(commande.help.name, commande);

  });
});

fs.readdir("./Events/", (error, f) => {
  if(error) console.log(error);
  console.log(`${f.length} events en chargement`);

  f.forEach((f) => {
      const events = require(`./Events/${f}`);
      const event = f.split(".")[0];

    client.on(event, events.bind(null, client));
  });
  
  
  
  client.on("guildMemberRemove", (member) => {
  let ch = db.get(`levchannel_${member.guild.id}`);
  
  if(ch === null) {
    return;
  }
      let embed = new Discord.MessageEmbed()
  .setAuthor(member.user.username, member.user.avatarURL())
  .setColor(colours.red_light)
  .setThumbnail(member.user.avatarURL())
  .setDescription(`Nous espèrons te revoir bientôt !`);
  
  member.guild.channels.cache.get(ch).send(embed)

  })
  
  client.on("guildMemberAdd", (member) => {
  let ch = db.get(`welchannel_${member.guild.id}`);
  
  if(ch === null) {
    return;
  }
      let embed = new Discord.MessageEmbed()
  .setAuthor(member.user.username, member.user.avatarURL())
  .setColor(colours.green_light)
  .setThumbnail(member.user.avatarURL())
  .setDescription(`Nous sommes content de vous voir ici !`);
  
  member.guild.channels.cache.get(ch).send(embed)

  })
  
  client.on('guildCreate', guild =>{
    const channel = client.channels.cache.get("763707176573075497") //channel où le message sera mis
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
});
  
  client.on('guildDelete', guild =>{
    const channel = client.channels.cache.get("763707176573075497")//channel où le message s'envoi
    //console.log(channel)
    let removeembed = new Discord.MessageEmbed()
        .setTitle(`BOT vient d\'être retiré du serveur serveur ${guild.name}`)
        .setThumbnail(guild.iconURL())
        .addField(`👑 Propriétaire:`, `${guild.owner}`)
        .addField(`📇 Nom du serveur :`, `${guild.name}`)
        .addField(` Id du serveur:`, `${guild.id}`)
        .addField(` Nombre de membres:`, `${guild.memberCount}`)
        .setColor(`fc3d12`)
        .setFooter( `Désormais : ${client.guilds.cache.size} serveurs`, client.user.displayAvatarURL())
    channel.send(removeembed)    
    //console.log(channel)
});
  
})
