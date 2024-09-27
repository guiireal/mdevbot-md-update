const fs = require('fs');
const path = require('path');

const CONFIG_PATH = path.resolve(__dirname, 'admin', 'info.json');

const CONFIG = JSON.parse(fs.readFileSync(CONFIG_PATH, 'utf8'));

// configuraçoes de dono
const prefix = CONFIG.prefixo;
const nomeDono = CONFIG.nomeDono;
const nomeBot = CONFIG.nomeBot;
const numeroDono = CONFIG.numeroDono;

// config de APIs
const API_DATA_PATH = path.resolve(__dirname, 'apis', 'keys.json');
const APIKEYS_DATA = JSON.parse(fs.readFileSync(API_DATA_PATH, 'utf8'));
const API_KEYs = APIKEYS_DATA.apikeys;

module.exports = {
    prefix,
    nomeDono,
    nomeBot,
    numeroDono,
    API_KEYs,
}
