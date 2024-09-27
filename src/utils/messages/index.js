const fs = require('fs');
const path = require('path');

class SendMessage {
    constructor(bot, msgBot, from){
        this.bot = bot;
        this.msgBot = msgBot;
        this.from = from;
    }

    async enviarTexto(texto){
        await this.bot.sendMessage(this.from, {text: texto}, {quoted: this.msgBot?.key});
    }

    async enviarImagem(filename, caption='', isImageCache=false, viewOnce=false){
        let folder = isImageCache ? 'cache' : 'images';
        await this.bot.sendMessage(this.from, { 
            image: fs.readFileSync(path.resolve(__dirname, '..', '..', '..', 'assets', folder, filename)), 
            caption: caption,
            footer: "Bot de WhatsApp",
            viewOnce: viewOnce
        });
    }
}

module.exports = { SendMessage };