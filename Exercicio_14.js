const prompt = require('prompt-sync')();
console.clear();

// Entrada
console.log(`${"=".repeat(12)} Algoritmo que informa se um empréstimo pode ser concedido ${"=".repeat(12)}\n`);
const rendaMensal = Number(prompt("Renda Mensal: "));
const valorEmprestimo = Number(prompt("Valor do Empréstimo: "));
const numeroPrestacoes = Number(prompt("Número de Prestações: "));

// Cálculo e Saída
if (valorEmprestimo > 10 * rendaMensal) {
    console.log("\nO valor do empréstimo excede o limite permitido.");
} else {
    const valorPrestacao = valorEmprestimo / numeroPrestacoes;
    
    if (valorPrestacao > 0.3 * rendaMensal) {
        console.log("\nO valor da prestação excede 30% da renda mensal.");
    } else {
        console.log("\nO empréstimo pode ser concedido.");
    }
}
