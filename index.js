const { Client } = require('discord.js');

const client = new Client();

const prefix = "ADICIONE SEU PREFIXO AQUI";
const token = "ADICIONE SEU TOKEN AQUI";

client.on("ready", () => {
    console.log(`Logado como ${client.user.tag}.`);
})

client.on("message", message => {
    if (message.author.bot) return;
    if (!message.content.startsWith(prefix)) return;

    let command = message.content.split(" ")[0];
    command = command.slice(prefix.length);

    let args = message.content.split(" ").slice(1);
    try {
        let commandFile = require(`./commands/${command}.js`);
        commandFile.run(client, message, args);
    } catch (err) {
        console.error(err);
    }
});

client.login(token);
