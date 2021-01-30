const Discord = require('discord.js')

let questions = [
    {
        title: "Best Programming Language?",
        options: ["JavaScript/TypeScript", "Python", "C++", "Ruby", "Rust"],
        correct: 1
    },
    {
        title: "Best Pet",
        options: ["Dog", "Cat", "Lizzard", "Gecko", "Frog"],
        correct: 1
    }
]

module.exports = {
    name: "trivia",
    category: "fun",

    description: "Play some trivia, maybe you'll win!",
    timeout: 1000,
    run: async(client, message, args) => {
        let q = questions[Math.floor(Math.random()*(questions.length))]
        console.log(q)
        let i = 0;
        const embed = new Discord.MessageEmbed()
        .setColor('RED')
        .setTitle(q.title)
        .setDescription(q.options.map(opt=>{
            i++;
            return `${i} - ${opt}`
        }))
        .setFooter('Respond to this message in the next 15 seconds for your answer to be validated!')
        message.channel.send(embed)
        try{
            let finalembed = new Discord.MessageEmbed()
            let msgs = await message.channel.awaitMessages(u2=>u2.author.id==message.author.id, {time: 15000, max: 1, errors: ["time"]})
            if(parseInt(msgs.first().content)==q.correct) {
                finalembed.setColor('GREEN')
                .setDescription('You answered correctly!')
                return message.channel.send(finalembed)
            } else {
                finalembed.setColor('RED')
                .setDescription(`Hmm... You got it incorrect sadly. The correct answer was \`${q.correct}\`!`)
                return message.channel.send(finalembed)
            }

        } catch(e) {
            embed.setColor('RED')
            .setDescription(e.message)
            return message.channel.send(embed)
        }
    }
}
