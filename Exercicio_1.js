const prompt = require('prompt-sync')();
console.clear();

const DOLAR = 5.50;

// Entrada
console.log(`${"=".repeat(12)} Algoritmo que converte real para dólar ${"=".repeat(12)}\n`);
let real = prompt("Digite o valor em R$: ");

// Saída
console.log(`\nO valor: R$${real}, convertido para dólar é aproximadamente US$${(real / DOLAR).toFixed(2)}`);
