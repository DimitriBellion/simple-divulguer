exports.run = (client, message, args) => {

    message.delete();

    // Caso você quiser autorizar apenas uma pessoa para usar o comando
    if (message.member.user.id !== 'ID DO USUÁRIO') {
        return message.channel.send(`Comando exclusivo do <@ID DO USUARIO>!`).then(message => message.delete({ timeout: 5000 }))
    }

    let mensagem = message.content.substr(message.content.indexOf(' ') + 1);

    message.guild.members.cache.forEach(member => {
        member.send(mensagem)
            .then(message => console.log(`Mensagem enviada com sucesso: ${message.content}`))
            .catch(console.error);
    });
}