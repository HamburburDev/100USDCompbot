const Discord = require('discord.js')

module.exports = {
    name: "flip",
    category: "fun",

    description: "Flip a coin!",
    timeout: 1000,
    run: async(client, message, args) => {
        let embed = new Discord.MessageEmbed()

        let choice = ['Heads', 'Tails']
        let random = choice[Math.floor(Math.random()*(choice.length))]
        embed.setColor('RANDOM')
        .setDescription(`The coin landed on.... ${random}!`)
        message.channel.send(embed)
    }
}


