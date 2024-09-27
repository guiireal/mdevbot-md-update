const menus = require(".");

module.exports = function MenuPrincipal(prefix='', pushName='', nomeBot='', nomeDono=''){
    let p = prefix;
    let text = `
> ┏━━━━┉┉┉┅┅------┅┅┉┉┉━━━━┓

                  Menu de Comandos

> Usuário: ${pushName}
> Algoritmo: ${nomeBot}
> Dono: ${nomeDono}

> ━━━━┉┉┉┅┅--------┅┅┉┉┉━━━━

                   Acesse outros Menus

${menus(prefix)}
> ━━━━┉┉┉┅┅--------┅┅┉┉┉━━━━

                   Comandos Diversos

- ❧ ${p}ping  
- ❧ ${p}login        
- ❧ ${p}sticker       
- ❧ ${p}clima + cidade
- ❧ ${p}sugestao + opnião

> ┗━━━━┉┉┉┅┅------┅┅┉┉┉━━━━┛

> © ${nomeBot} ²⁰²⁴    
    `;

    return text;
}