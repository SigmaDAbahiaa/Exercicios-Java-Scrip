const prompt = require('prompt-sync')();
console.clear();

// Entrada
console.log(`${"=".repeat(12)} Algoritmo que calcula seu IMC ${"=".repeat(12)}\n`);
const peso = Number(prompt("Digite seu peso (Kg): "));
const altura = Number(prompt("Digite sua altura (M): "));

// Cálculo e Saída do IMC
const imc = peso / (altura ** 2);
const categoria = imc < 20 ? "abaixo do peso" :
                  imc < 25 ? "saudável" :
                  imc < 30 ? "sobrepeso" :
                  imc < 40 ? "obeso" : "obeso mórbido";

console.log(`\nSeu IMC é aproximadamente: ${imc.toFixed(2)}`);
console.log(`Você está ${categoria}\n`);
