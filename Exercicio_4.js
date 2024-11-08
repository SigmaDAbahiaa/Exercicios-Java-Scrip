const prompt = require('prompt-sync')();
console.clear();

// Entrada
console.log(`${"=".repeat(12)} Algoritmo que informa se um número é divisível por 10, 5 ou 2 ${"=".repeat(12)}\n`);
const num = Number(prompt("Digite um número: "));

// Saída
const divisores = [];
if (num % 10 === 0) divisores.push("10");
if (num % 5 === 0) divisores.push("5");
if (num % 2 === 0) divisores.push("2");

if (divisores.length > 0) {
    console.log(`O número pode ser dividido por: ${divisores.join(', ')}`);
} else {
    console.log("O número não pode ser dividido nem por 10, nem 5, nem 2");
}
