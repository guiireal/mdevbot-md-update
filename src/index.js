const { Connection } = require('./utils/connection');
const { GetSimpleResultAPI } = require('./utils/functions');

const {
    prefix, 
    nomeBot, 
    nomeDono, 
    numeroDono,
    API_KEYs
} = require('./data/config');
const path = require('path');

const { SendMessage } = require('./utils/messages');

const PingMsg = require('./utils/messages/templates/Ping-msg');
const MenuPrincipal = require('./utils/messages/menus/Menu');

const execComandoClima = require('./utils/commands/Clima');
const ComandoInvalidoMsg = require('./utils/messages/templates/ComandoInvalido-msg');

async function startBot(){
    const bot = await Connection();

    bot.ev.on("messages.upsert", async ({messages}) => {
        const msgBot = await messages[0];

        const from = msgBot?.key?.remoteJid;
        const participant = msgBot?.key?.participant;
        const pushName = msgBot?.pushName;
        const isMsgBot = msgBot?.key?.fromMe;
        const message = msgBot?.message?.extendedTextMessage?.text;

        if(isMsgBot) return; // não faz nada

        // verificadores de comandos
        const isCommand = message.startsWith(prefix);
        const command = isCommand ? message.slice(prefix.length).split(' ')[0].trim().toLowerCase() : null;
        const args = isCommand ? message.slice(prefix.length + command.length).trim() : message;

        if(isCommand){

            const MDEVBOT = new SendMessage(bot, msgBot, from);

            switch (command) {
                case 'ping':
                    MDEVBOT.enviarImagem('ping.png', PingMsg(pushName, prefix, nomeBot));
                    break;
                case 'menu':
                    MDEVBOT.enviarImagem('menu-principal.png', MenuPrincipal(prefix, pushName, nomeBot, nomeDono));
                    break;
                case 'clima':
                    if(!args) return MDEVBOT.enviarTexto('Você precisa informar o nome da cidade junto do comando.');
                    var resultado = await execComandoClima(args, API_KEYs);

                    MDEVBOT.enviarImagem('previsao-tempo.png', resultado);
                    break;
                default:
                    MDEVBOT.enviarTexto(ComandoInvalidoMsg(command, pushName, prefix, nomeBot));
                    break;
            }
        }
        
    });

}

startBot();