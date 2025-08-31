
const puppeteer  = require('puppeteer');
const express = require("express");
console.log("Olá eu sou um robô Scraper!");


const app = express();
const PORT = 3000;

app.use(express.static(__dirname));
app.get('/conversor', async(req,res) => {
const browser = await puppeteer.launch();
  const page = await browser.newPage();

  const moedaBase = req.query.moedaBase;
  const moedaFinal = req.query.moedaFinal;
  const quantidade = req.query.quantidade;

    const qualquerUrl =`https://wise.com/br/currency-converter/${moedaBase}-to-${moedaFinal}-rate?amount=${quantidade}`;
  await page.goto(qualquerUrl);




await page.waitForSelector('#target-input');
  const resultado =  await page.evaluate(() => {
    return  document.querySelector('#target-input').value;
  
  });

  //await browser.close();
  res.json({ resultado: resultado });   
});
app.listen(PORT, () => console.log(`Servidor rodando em http://localhost:${PORT}`));




 