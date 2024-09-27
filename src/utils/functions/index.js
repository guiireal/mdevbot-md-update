const readline = require("readline");

function InputText(message) {
    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout,
    });

    return new Promise((resolve) => rl.question(message, resolve));
};

async function GetSimpleResultAPI(URL){
    const response = await fetch(URL);
    const data = await response.json();

    return await data;
}

module.exports = { 
    InputText,
    GetSimpleResultAPI,
};

