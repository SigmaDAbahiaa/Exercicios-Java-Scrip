//inicio do algoritimo
const prompt = require('prompt-sync')();
console.clear();

//variaveis
var taxa_desconto = 0.11;
var desconto_maximo = 334.29;
var salario;
var desconto;

//entrada
console.log(`${"=".repeat(12)} Algoritimo que calcula o desconto previdenciario ${"=".repeat(12)}\n`);
salario = prompt("Informe o Salario: ");

//saida
desconto = salario * taxa_desconto;

if (desconto > desconto_maximo) {
    desconto = desconto_maximo;
}

console.log(`\nO Desconto Previdenciario Será de: R$ ${desconto.toFixed(2)}`);
