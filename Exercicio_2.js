const prompt = require('prompt-sync')();
console.clear();

// Entrada
console.log(`${"=".repeat(12)} Olá, este é um algoritmo de autenticação ${"=".repeat(12)}\n`);
const nome = prompt("Digite seu nome: ");
const dataNasc = prompt("Digite sua data de nascimento (dd-mm-aaaa): ");

// Processamento
const [dia, mes, ano] = dataNasc.split("-").map(Number);
const dataAtual = new Date();
const idade = dataAtual.getFullYear() - ano - (dataAtual.getMonth() + 1 < mes || (dataAtual.getMonth() + 1 === mes && dataAtual.getDate() < dia) ? 1 : 0);

// Saída
console.log(`\nOlá ${nome}, você tem ${idade} anos`);
console.log(idade >= 18 ? "Acesso Liberado" : "Acesso Negado");
