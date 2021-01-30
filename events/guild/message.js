const {prefix} = require('../../config.json')
const ms = require('ms')
const Timeout = new Set()
module.exports=async(client,message)=>{
    if(message.author.bot) return;
    if(!message.content.startsWith(prefix)) return;
    if(!message.member) return
    const args = message.content.slice(prefix.length).trim().split(/ +/g);
    const cmd = args.shift().toLowerCase();
    if(cmd.length   == 0) return;
    const command = client.commands.get(cmd)
    if(!command) return;
    if(command) {
        if(command.timeout) {
            if(Timeout.has(`${message.author.id}${command.name}`)){
                return message.channel.send(`You can only use this command every \`${ms(command.timeout)}\``)
            }else {
                Timeout.add(`${message.author.id}${command.name}`)
                setTimeout(()=> {
                    Timeout.delete(`${message.author.id}${command.name}`)
                }, command.timeout);
            }
        } 
        command.run(client,message,args)
    }
}