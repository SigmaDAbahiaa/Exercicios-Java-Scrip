const prompt = require('prompt-sync')();
console.clear();

// Entrada
console.log(`${"=".repeat(12)} Algoritmo que exibe sua idade em dias ${"=".repeat(12)}\n`);
const dataNascimento = prompt("Data de Nascimento (dd-mm-aaaa): ");

// Processamento
const [dia, mes, ano] = dataNascimento.split("-").map(Number);
const dataAtual = new Date();
const idadeEmDias = Math.floor((dataAtual - new Date(ano, mes - 1, dia)) / (1000 * 60 * 60 * 24));

console.log(`\nSua idade expressa em dias é aproximadamente: ${idadeEmDias} dias`);
