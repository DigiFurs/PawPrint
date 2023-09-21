const Discord = require('discord.js');
const client = new Discord.Client({intents: [
    Discord.GatewayIntentBits.AutoModerationConfiguration,
    Discord.GatewayIntentBits.AutoModerationExecution,
    Discord.GatewayIntentBits.DirectMessages,
    Discord.GatewayIntentBits.DirectMessageTyping,
    Discord.GatewayIntentBits.GuildMessages,
    Discord.GatewayIntentBits.GuildScheduledEvents,
    Discord.GatewayIntentBits.GuildModeration
 ]});
const user = client.user;
client.on('ready', () => {
    console.log('Primed and logged in...');
});

client.on('messageCreate', () => {
    console.log("Message was sent...");
});

client.login('');

