const Discord = require('discord.js')

module.exports = {
    name: "ban",
    category: "moderation",

    description: "Ban a member in the guild",
    timeout: 1000,
    run: async(client, message, args) => {
        let embed = new Discord.MessageEmbed()
        const target = message.mentions.users.first() || message.guild.members.get(args[0])

        let bot = message.guild.members.cache.get(client.user.id)

        if(!bot.hasPermission('BAN_MEMBERS') || !message.member.hasPermission('BAN_MEMBERS')) {
            embed.setColor('RED')
            if(!message.member.hasPermission('BAN_MEMBERS')) {
                embed.setDescription('>>> **🚫 Missing Permissions \`BAN_MEMBERS\`**')
                return message.channel.send(embed)
            }
            embed.setDescription('>>> **🚫 Bot Missing Permissions \`BAN_MEMBERS\`**')
            return message.channel.send(embed)
        }
        
        if(!target){
            embed.setColor('RED')
            .setDescription('>>> **🚫 No user provided!**')
            return message.channel.send(embed)
        }
        if(target.id == message.member.id) {
            embed.setColor('RED')
            .setDescription('>>> **You Cannot Ban Yourself!**')
            return message.channel.send(embed)
        }
        args.shift()
        const reason = args.toString()
        console.log(reason)
        if(!reason || reason == undefined || reason == []) {
            //wth??????????????
            embed.setColor('RED')
            .setDescription(`>>> **You need to provide a reason for banning that user!**`)
            return message.channel.send(embed)
        }
        if(reason) {
            const user = await message.guild.members.cache.get(target.id)
            user.ban({ reason })
            embed.setColor('RED')
            .setDescription(`>>> <@${target.id}> has been banned for \`${args.join(' ')}\`!`)
            .setTimestamp()
            return message.channel.send(embed)
        }
    }
}

//ping command done!