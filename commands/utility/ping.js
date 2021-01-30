const Discord = require('discord.js')

module.exports = {
    name: "ping",
    category: "utility",

    description: "Returns Ping",
    timeout: 1000,
    run: async(client, message, args) => {
        message.channel.send('🏓 Pinging...').then((msg) => {
            const embed = new Discord.MessageEmbed()
            .setTitle('Pong')
            .setDescription(`🏓 | Latency is \`${Math.floor(msg.createdTimestamp - message.createdTimestamp)}\`ms \n🏓 | API Latency is \`${client.ws.ping}\`ms!`)
            .setColor('#6bd309')
            msg.edit(embed)
            msg.edit("\u200B")
        })
    }
}

//ping command done!