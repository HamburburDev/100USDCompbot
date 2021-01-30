const Discord = require('discord.js')
const { token, prefix } = require('./config.json')
const fs = require('fs')

const client = new Discord.Client()
client.prefix = prefix;
client.commands = new Discord.Collection();
client.aliases = new Discord.Collection();
client.categories = fs.readdirSync('./commands/')
client.events = new Discord.Collection();
const message = require('./events/guild/message')
require(`./handlers/command.js`)(client)



client.on('ready', () => {
    require('./events/client/ready')(client);
})

client.on('message', async(message) => {
    require('./events/guild/message')(client, message)

})

client.login(token)