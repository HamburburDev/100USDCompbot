const Discord = require('discord.js')

module.exports = {
    name: "8ball",
    category: "fun",

    description: "Answers everything you ask",
    timeout: 1000,
    run: async(client, message, args) => {
        let embed = new Discord.MessageEmbed()
        let question = message.content.slice(client.prefix.length+6)
        if(!question) {
            embed.setColor('RED')
            .setDescription(`>>> Seems like you didnt provide a question. Try again \`${client.prefix}8Ball [question]\``)
            return message.channel.send(embed)
        } else{
            const responces = [
                "Yes",
                "No",
                "Possibly",
                "Without a doubt",
                "My sources say no",
                "I must deny that",
                "My sources say yes",
                "Most Likely",
                "Surely",
                "Indeed"
            ]
            let answer = responces[Math.floor(Math.random()*(responces.length))]
            const embed = new Discord.MessageEmbed()
            embed.setTitle('8Ball')
            .setDescription(`Your question was: ${question} \nMy responce is \`${answer}\``)
            .setColor('RANDOM')
            message.channel.send(embed)
        }
    }
}
