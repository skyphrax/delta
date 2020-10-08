const Discord = require('discord.js');
const client = new Discord.Client();
const fs = require('fs');
const {PREFIX} = require("./config.js");
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
  
  client.on('messageReactionAdd', async(reaction, user) => {
    const message = reaction.message;
    const member = message.guild.members.cache.get(user.id);
    
    if(user.bot) return;
    if(
      ["📥"].includes(reaction.emoji.name)
    ) {
      switch(reaction.emoji.name) {
          case "📥":
          
          
          break;
      }
    }
  })
  
})
