const prompt = require('prompt-sync')();
console.clear();

// Entrada
console.log(`${"=".repeat(12)} Algoritmo que exibe sua idade em dias ${"=".repeat(12)}\n`);
console.log("Digite sua data de nascimento com dia, mês e ano separados por '-' (ex: 00-00-0000)\n");
const dataNascimento = prompt("Data de Nascimento: ");

// Processamento
const [dia, mes, ano] = dataNascimento.split("-").map(Number);
const dataAtual = new Date();
const idadeEmAnos = dataAtual.getFullYear() - ano;
const mesesDesdeNascimento = dataAtual.getMonth() - (mes - 1); // Ajuste para meses começando em 0
const diasDesdeNascimento = dataAtual.getDate() - dia;

const idadeEmDias = (idadeEmAnos * 365) + (mesesDesdeNascimento * 30) + diasDesdeNascimento;

console.log(`\nSua idade expressa em dias é aproximadamente: ${idadeEmDias.toFixed(0)} dias`);
