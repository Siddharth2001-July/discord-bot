import DiscordJS, { Channel, Intents } from 'discord.js'
import dotenv from 'dotenv'
dotenv.config()

const client = new DiscordJS.Client({
    intents: [
        Intents.FLAGS.GUILDS,
        Intents.FLAGS.GUILD_MESSAGES
    ]
})

client.on('ready', () => {
    console.log('Bot is ready !!!');
})
client.on('messageCreate', (message) => {
    let mess = message.content.toLowerCase();
    switch (mess) {
        case 'ping':
            message.reply({
                content: 'pong'
            })
            break;
        case 'hey':
            message.reply({
                content: 'Hello'
            })
            break;
        case 'discord':
            message.reply({
                content: 'is FUN !!!'
            })
            break;
        case 'abusive words':
            message.delete();
            break;
        case 'clear chat':
            if (message.channel.type == "DM") return;
            if (message.author.bot) return;
            // if (!message.content.startsWith(config.prefix)) return;
            const deleteCount = parseInt('50', 10);
            if (!deleteCount || deleteCount < 1 || deleteCount > 100) return;
            message.channel.bulkDelete(100, true).catch(error => message.reply(`Couldn't delete messages because of: ${error}`))
            message.channel.send('A fresh Hello to everyone');
            break;
        default:
            break;
    }
})

client.login(process.env.DISCORDJS_BOT_TOKEN)