//inicio do algoritimo
const prompt = require('prompt-sync')();
console.clear();

//variaveis
const Dolar = 5.50;
var Real;
var Cambio;

//entrada
console.log(`${"=".repeat(12)} Algoritimo que converte real para dolar ${"=".repeat(12)}\n`);

Real = prompt("Digite o valor em R$: ");

//saida
Cambio = Real / Dolar;

console.log(`\nO valor: R$${Real}, Convertido para dolar é aproximadamente igual a: US$${Cambio.toFixed(2)}`);
