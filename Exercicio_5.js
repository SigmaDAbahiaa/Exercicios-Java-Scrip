const prompt = require('prompt-sync')();
console.clear();

// Entrada
console.log(`${"=".repeat(12)} Algoritmo que calcula seu IMC ${"=".repeat(12)}\n`);
const peso = Number(prompt("Digite seu peso (Kg): "));
const altura = Number(prompt("Digite sua altura (M): "));

// Cálculo do IMC
const imc = peso / (altura ** 2);
console.log(`\nSeu IMC é aproximadamente: ${imc.toFixed(2)}`);

// Saída de resultado
let categoria;
if (imc < 20) {
    categoria = "abaixo do peso";
} else if (imc < 25) {
    categoria = "saudável";
} else if (imc < 30) {
    categoria = "sobrepeso";
} else if (imc < 40) {
    categoria = "obeso";
} else {
    categoria = "obeso mórbido";
}

console.log(`Você está ${categoria}\n`);
