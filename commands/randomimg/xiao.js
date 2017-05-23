const { Command } = require('discord.js-commando');
const path = require('path');

module.exports = class XiaoCommand extends Command {
    constructor(client) {
        super(client, {
            name: 'xiao',
            aliases: ['xiao-pai'],
            group: 'randomimg',
            memberName: 'xiao',
            description: 'Sends a random image of Xiao Pai.'
        });
    }

    run(msg) {
        if (msg.channel.type !== 'dm')
            if (!msg.channel.permissionsFor(this.client.user).has('ATTACH_FILES'))
                return msg.say('This Command requires the `Attach Files` Permission.');
        const xiao = Math.floor(Math.random() * 10) + 1;
        return msg.say({ files: [path.join(__dirname, '..', '..', 'assets', 'images', `xiao${xiao}.png`)] })
            .catch(err => msg.say(`${err.name}: ${err.message}`));
    }
};