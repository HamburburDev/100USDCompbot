const Discord = require('discord.js')

module.exports = {
    name: "kick",
    category: "moderation",

    description: "Kick a member from the guild",
    timeout: 1000,
    run: async(client, message, args) => {
        let embed = new Discord.MessageEmbed()
        const target = message.mentions.users.first()

        let bot = message.guild.members.cache.get(client.user.id)

        if(!bot.hasPermission('KICK_MEMBERS') || !message.member.hasPermission('KICK_MEMBERS')) {
            embed.setColor('RED')
            if(!message.member.hasPermission('KICK_MEMBERS')) {
                embed.setDescription('>>> **🚫 Missing Permissions \`KICK_MEMBERS\`**')
                return message.channel.send(embed)
            }
            embed.setDescription('>>> **🚫 Bot Missing Permissions \`KICK_MEMBERS\`**')
            return message.channel.send(embed)
        }
        
        if(!target){
            embed.setColor('RED')
            .setDescription('>>> **🚫 No user provided!**')
            return message.channel.send(embed)
        }
        if(target.id == message.member.id) {
            embed.setColor('RED')
            .setDescription('>>> **You Cannot Kick Yourself!**')
            return message.channel.send(embed)
        }
        args.shift()
        const reason = args.toString()
        console.log(reason)
        if(!reason || reason == undefined || reason == []) {
            //wth??????????????
            embed.setColor('RED')
            .setDescription(`>>> **You need to provide a reason for kicking that user!**`)
            return message.channel.send(embed)
        }
        if(reason) {
            const user = await message.guild.members.cache.get(target.id)
            user.kick({ reason })
            embed.setColor('RED')
            .setDescription(`>>> <@${target.id}> has been kicked for \`${args.join(' ')}\`!`)
            .setTimestamp()
            return message.channel.send(embed)
        }
    }
}

//ping command done!