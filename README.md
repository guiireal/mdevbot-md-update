# Base MDev-Bot md

Essa base possui trechos do código do **Sky-bot**, repositório: https://github.com/guiireal/sky-bot

Créditos à Gui Real, desenvolvedor do **Sky-bot** - YouTube -> `https://www.youtube.com/@devgui_`

## Criador do Script

Luhdev - Luciano Mendes

> YouTube: `https://www.youtube.com/@MDev28`

## Comandos para usuários do Termux

Para iniciar o bot no celular android você precisará instalar o apk do termux. É possível encontrá-lo na Play Store, mas esteja ciente de que há algumas notas informando que a sua versão na loja de Apps está desatualizada.

### Comandos:

```bash
# Atualização de pacotes
pkg upgrade -y
pkg update -y

# Instalação do Git e Nodejs
pkg install git -y # Instalar o `git`
apt install nodejs && apt install nodejs-lts # Instalar o NodeJs e NPM no celular

# Verifique se está tudo instalado
git --version
node --version
npm --version

# Instalar repositório do Bot do GitHub
termux-setup-storage # dá permissão de pastas do seu dispositivo
cd /sdcard # vê se o nome ficou verde após esse comando
git clone https://github.com/Kamado8421/base.mdevbot-md.git

# Entrar na pasta do bot e iniciá-lo
cd base.mdevbot-md
npm start # inicia o script
```
