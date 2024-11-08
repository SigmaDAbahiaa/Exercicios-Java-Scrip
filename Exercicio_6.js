//inicio do algoritimo
const prompt = require('prompt-sync')();
console.clear();

//variaveis
var idade;

//entrada
console.log(`${"=".repeat(12)} Algoritimo que fala sua classe eleitoral ${"=".repeat(12)}\n`);

idade = Number(prompt("Digite sua idade: "));

//saida
if (idade < 16){
    console.log("\nNão Eleitor");
}
if (idade >= 18 && idade < 65) {
    console.log("\nEleitor Obrigatorio");
}
if (idade >= 16 && idade < 18 || idade >= 65) {
    console.log("\nEleitor Facultativo");
}
