const prompt = require('prompt-sync')();
console.clear();

// Entrada
console.log(`${"=".repeat(12)} Algoritmo que classifica um caractere ${"=".repeat(12)}\n`);
const caractere = prompt("Tecle um caractere: ");

// Verificação e Saída
if (caractere.length === 1) {
    if (!isNaN(caractere)) {
        console.log(`\nO caractere: ${caractere} é um Número.`);
    } else if ("aeiou".includes(caractere.toLowerCase())) {
        console.log(`\nO caractere: ${caractere} é uma Vogal.`);
    } else if (/[a-zA-Z]/.test(caractere)) {
        console.log(`\nO caractere: ${caractere} é uma Consoante.`);
    } else {
        console.log(`\nO caractere: ${caractere} é um Símbolo.`);
    }
} else {
    console.log("\nInsira apenas um caractere!");
}
