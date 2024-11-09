const prompt = require('prompt-sync')();
console.clear();

// Entrada
console.log(`${"=".repeat(12)} Algoritmo que lê um vetor e mostra o número de ocorrências ${"=".repeat(12)}\n`);
console.log("Digite 15 números inteiros:");

const vetor = Array.from({ length: 15 }, (_, i) => {
    return Number(prompt(`Digite o número para a posição ${i + 1}: `));
});

// Busca
const valorBuscado = Number(prompt("\nDigite o número que deseja buscar no vetor: "));
const contador = vetor.filter(num => num === valorBuscado).length;

// Saída
console.log(`\nO número ${valorBuscado} aparece ${contador} vez(es) no vetor.`);
