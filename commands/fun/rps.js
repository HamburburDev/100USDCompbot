const Discord = require('discord.js')

module.exports = {
    name: "rps",
    category: "fun",

    description: "Play rock paper scissors with the bot!",
    timeout: 1000,
    run: async(client, message, args) => {
        let embed = new Discord.MessageEmbed()

        const choices = [ "rock", "paper", "scissors" ]
        let i = 0;
        if(!args[0]){
            embed.setColor('RED')
            .setDescription(`>>> You need to provide a choice!`)
            .addField('Avalilable Choices', choices.join(', '))
            message.channel.send(embed)
        }
        let bot_choice = choices[Math.floor(Math.random()*(choices.length))]
        if(args[0] == 'rock' || args[0] == 'r' || args[0] == 'ROCK') {
            let choice = 'rock'
            if(bot_choice == choice) {
                embed.setColor('ORANGE')
                .setDescription(`You picked \`${args[0]}\`. I choose \`${bot_choice}\`.\nGame Result: \`Draw\``)
                return message.channel.send(embed)
            }
            if(bot_choice == 'paper') {
                embed.setColor('RED')
                .setDescription(`>>> You picked \`${args[0]}\`. I choose \`${bot_choice}\`.\nGame Result: \`Loss\``)
                return message.channel.send(embed)
            } else {
                embed.setColor('GREEN')
                .setDescription(`>>> You picked \`${args[0]}\`. I choose \`${bot_choice}\`.\nGame Result: \`Win\``)
                return message.channel.send(embed)
            }
        }

        if(args[0] == 'paper' || args[0] == 'p' || args[0] == 'PAPER') {
            let choice = 'paper'
            if(bot_choice == choice) {
                embed.setColor('ORANGE')
                .setDescription(`You picked \`${args[0]}\`. I choose \`${bot_choice}\`.\nGame Result: \`Draw\``)
                return message.channel.send(embed)
            }
            if(bot_choice == 'scissors') {
                embed.setColor('RED')
                .setDescription(`>>> You picked \`${args[0]}\`. I choose \`${bot_choice}\`.\nGame Result: \`Loss\``)
                return message.channel.send(embed)
            } else {
                embed.setColor('GREEN')
                .setDescription(`>>> You picked \`${args[0]}\`. I choose \`${bot_choice}\`.\nGame Result: \`Win\``)
                return message.channel.send(embed)
            }
        }

        if(args[0] == 'scissors' || args[0] == 's' || args[0] == 'scissors') {
            let choice = 'scissors'
            if(bot_choice == choice) {
                embed.setColor('ORANGE')
                .setDescription(`You picked \`${args[0]}\`. I choose \`${bot_choice}\`.\nGame Result: \`Draw\``)
                return message.channel.send(embed)
            }
            if(bot_choice == 'rock') {
                embed.setColor('RED')
                .setDescription(`>>> You picked \`${args[0]}\`. I choose \`${bot_choice}\`.\nGame Result: \`Loss\``)
                return message.channel.send(embed)
            } else {
                embed.setColor('GREEN')
                .setDescription(`>>> You picked \`${args[0]}\`. I choose \`${bot_choice}\`.\nGame Result: \`Win\``)
                return message.channel.send(embed)
            }
        }
    }
}


