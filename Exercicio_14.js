//inicio do algoritimo
const prompt = require('prompt-sync')();
console.clear();

//variaveis
var renda_mensal;
var valor_emprestimo;
var numero_prestacoes;
var valor_prestacao;

//entrada
console.log(`${"=".repeat(12)} Algoritimo que informa se um emprestimo pode ser concedido ${"=".repeat(12)}\n`);

renda_mensal = prompt("Renda Mensal: ");
console.log("");
valor_emprestimo = prompt("Valor do emprestimo: ");
console.log("");
numero_prestacoes = prompt("N° de Prestações: ");

//saida
if (valor_emprestimo > 10 * renda_mensal){
    console.log("\nO valor do emprestimo excede o limite permitido.");
}
else{
    valor_prestacao = valor_emprestimo / numero_prestacoes;

    if (valor_prestacao > 0.3 * renda_mensal){
        console.log("\nO valor da prestação excede 30% da renda mensal.");
    }
    else{
        console.log("\nO emprestimo pode ser concedido.");
    }
}
