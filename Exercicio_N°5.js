//inicio do algoritimo
const prompt = require('prompt-sync')();
console.clear();

//variaveis
var peso;
var altura;
var imc;

//entrada
console.log(`${"=".repeat(12)} Algoritimo que caucula seu (Imc) indice de massa corporal ${"=".repeat(12)}\n`);

peso = prompt("Digite seu peso (Kg): ");
console.log("");
altura = prompt("Digite sua altura (M): ");

imc = peso / (altura * altura);

//saida
console.log(`\nSeu Imc é Aproximadamente: ${imc.toFixed(2)}`);

if (imc <= 19) {
    console.log("Você está abaixo do peso\n");
}
if (imc >= 20 && imc <= 24) {
    console.log("Você está Saudavel\n");
}
if (imc >= 25 && imc <= 29) {
    console.log("Você está sobre peso\n");
}
if (imc >= 30 && imc <= 39) {
    console.log("Você está obeso\n");
}
if (imc >= 40) {
    console.log("Você está obeso mórbido\n");
}
