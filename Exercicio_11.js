const prompt = require('prompt-sync')();
console.clear();

// Entrada
console.log(`${"=".repeat(12)} Algoritmo que converte m/s para km/h ${"=".repeat(12)}\n`);
const velocidadeMs = prompt("Digite a velocidade em m/s: ");

// Cálculo e Saída
const velocidadeKmh = velocidadeMs * 3.6;
console.log(`\n${velocidadeMs} m/s é igual a: ${velocidadeKmh.toFixed(2)} km/h`);
