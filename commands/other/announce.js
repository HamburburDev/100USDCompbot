const Discord = require('discord.js')
const {readFileSync, readdirSync} = require('fs');

module.exports = {
    name: "purge",
    category: "other",

    description: "Delete up to 100 messages in a channel",
    timeout: 1000,
    run: async(client, message, args) => {
        const embed = new Discord.MessageEmbed()
        let bot = message.guild.members.cache.get(client.user.id)
        if(!bot.hasPermission('MANAGE_MESSAGES') || !message.member.hasPermission('MANAGE_MESSAGES')) {
            embed.setColor('RED')
            .setDescription('>>> 🚫 Missing Permission \`MANAGE_MESSAGES\`')
            return message.channel.send(embed)
        }
        if(!args[0] || args[0] > 100 || isNaN(args[0])) {
            embed.setColor('RED')
            .setDescription('>>> 🚫 You need to provide a number from \`1 - 100\`!')
            return message.channel.send(embed)
        }
        let msg = await message.channel.send(`Purging \`${args[0]}\` Messages...`)
        await msg.delete()
        const msgs = await message.channel.bulkDelete(+args[0]);
        embed.setColor('RED')
        .setDescription(`Purged \`${msgs.size}\` messages in <#${message.channel.id}>`)
        .setFooter('This message will auto delete!')
        await message.channel.send(embed).then(msg => msg.delete({timeout: 5000}))

    }
}

//ping command done!