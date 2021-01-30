const Discord = require('discord.js')
const {readFileSync, readdirSync} = require('fs');

module.exports = {
    name: "help",
    category: "utility",

    description: "Help Command",
    timeout: 1000,
    run: async(client, message, args) => {
        const commands = readdirSync(`./commands/`)
        console.log(commands)       
        const embed = new Discord.MessageEmbed()
        if(!args[0]) {
        embed.setColor('ORANGE')
        .setTitle('Help Command')
        .setDescription('Please pick a category listed below')
        .addField('Categories', commands.join(' '))
        return message.channel.send(embed)
        }
        var category = commands.filter(obj => {
            return obj == args[0]
        })
        if(!category || category == '' || category == undefined) {
            embed.setColor('RED')
            .setDescription('That is an invalid category!')
            return message.channel.send(embed)
        } else {
            let i = 0;
            const command = readdirSync(`./commands/${category}/`).filter(file=>file.endsWith('.js'))
            embed.setColor('GREEN')
            .setDescription(`**Commands Under \`${category}\` category!**`)
            .addField('Commands', command.map(opt => {
                i++
                return `${i} - \`${opt.replace('.js', '')}\``
            }))
            return await message.channel.send(embed)
        }

    }
}

//ping command done!