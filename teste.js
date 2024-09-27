const puppeteer = require('puppeteer');
const fs = require('fs');

async function gerarImagem() {
  // Lê o arquivo HTML (ou você pode gerar dinamicamente o HTML com as variáveis)
  var teste = 'luciano'
  const html = `
  <html>
    <style>
      .container {
        width: 100%;
        height: 100vh;
        display: flex;
        align-items: center;
        justify-content: center;
        background-color: #000;
      }
      .imagem {
        width: 600px;
        height: 400px;
        background-color: white;
        padding: 20px;
        font-family: Arial, sans-serif;
      }
    </style>
    <div class="container">
      <div class="imagem">
        <h1>Exemplo da imagem</h1>
        <p>Texto da minha imagem</p>
        <span>Exemplo de variável ${teste}</span>
      </div>
    </div>
  </html>
  `;

  // Abre o navegador
  const browser = await puppeteer.launch({ headless: true });
  const page = await browser.newPage();

  // Define o conteúdo HTML
  await page.setContent(html);
  await page.setViewport({ width: 1200, height: 800, deviceScaleFactor: 2 });


  // Seleciona a div pela classe 'imagem'
  const div = await page.$('.imagem');

  // Tira o screenshot da div selecionada
  await div.screenshot({ path: 'imagem.png', omitBackground: true });

  console.log('Imagem gerada com sucesso!');

  await browser.close();
}

gerarImagem();
