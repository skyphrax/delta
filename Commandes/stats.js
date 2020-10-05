const Discord = require('discord.js');
const {PREFIX} = require("../config.js");
const os = require('os');

module.exports.run = async (client, message, args) => {
    if (message.author.bot) return;

    let servercount = client.guilds.cache.size;
    let usercount = client.users.cache.size;
    let channelscount = client.channels.cache.size;
    let arch = os.arch();
    let platform = os.platform();
    let shard = client.ws.shards.size;
    let NodeVersion = process.version;
    let cores = os.cpus().length;

    let stats = new Discord.MessageEmbed()
    .setTitle(`Statistics du ${client.user.username}`)
    .setColor('BLUE')
    .addField("Nombre de serveurs", `${servercount}`, true)
    .addField("Nombre d'utilisateurs", `${usercount}`, true)
    .addField("Nombre de channel", `${channelscount}`, true)
    .addField('Architecture', `${arch}`, true)
    .addField('Plate-forme', `${platform}`, true)
    .addField('Node-Version', `${NodeVersion}`, true)
    .addField('Shards', `${shard}`, true)
    .addField('Cores', `${cores}`, true)
    .setTimestamp()
    .setFooter(`${message.author.tag}`, message.author.displayAvatarURL());
    message.channel.send(stats);
};

module.exports.help = {
    name: "stats"
}