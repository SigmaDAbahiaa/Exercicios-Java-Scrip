const prompt = require('prompt-sync')();
console.clear();

// Constantes
const TAXA_DESCONTO = 0.11;
const DESCONTO_MAXIMO = 334.29;

// Entrada
console.log(`${"=".repeat(12)} Algoritmo que calcula o desconto previdenciário ${"=".repeat(12)}\n`);
const salario = Number(prompt("Informe o Salário: "));

// Cálculo do desconto
const desconto = Math.min(salario * TAXA_DESCONTO, DESCONTO_MAXIMO);

console.log(`\nO Desconto Previdenciário será de: R$ ${desconto.toFixed(2)}`);
