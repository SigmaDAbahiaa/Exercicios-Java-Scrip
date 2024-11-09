const prompt = require('prompt-sync')();
console.clear();

// Entrada
console.log(`${"=".repeat(12)} Algoritmo que informa as medidas pluviométricas de junho ${"=".repeat(12)}\n`);
const indicePluviometrico = [];

for (let dia = 1; dia <= 30; dia++) {
    const indice = Number(prompt(`Informe o índice pluviométrico do dia ${dia} de junho: `));
    indicePluviometrico.push(indice);
}

// Processamento
const diaMaiorIndice = indicePluviometrico.indexOf(Math.max(...indicePluviometrico));
const diaMenorIndice = indicePluviometrico.indexOf(Math.min(...indicePluviometrico));
const primeiraQuizena = indicePluviometrico.slice(0, 15).reduce((a, b) => a + b, 0) / 15;
const segundaQuizena = indicePluviometrico.slice(15).reduce((a, b) => a + b, 0) / 15;

// Saída
console.log(`\nDia que mais choveu: dia ${diaMaiorIndice + 1}, com um índice de ${indicePluviometrico[diaMaiorIndice]} mm`);
console.log(`Dia que menos choveu: dia ${diaMenorIndice + 1}, com um índice de ${indicePluviometrico[diaMenorIndice]} mm`);
console.log(`\nMédia Pluviométrica da Primeira Quinzena: ${primeiraQuizena.toFixed(2)} mm`);
console.log(`Média Pluviométrica da Segunda Quinzena: ${segundaQuizena.toFixed(2)} mm\n`);
