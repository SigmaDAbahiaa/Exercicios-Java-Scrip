//inicio do algoritimo
const prompt = require('prompt-sync')();
console.clear();

//variaveis
var ValorDeVendas;

//entrada
console.log(`${"=".repeat(12)} Algoritimo que determina a comissão de um vendedor ${"=".repeat(12)}\n`);
console.log("Para caucular a comissão e nessesario que você informe o valor total de vendas realizadas no mês\n");

ValorDeVendas = prompt("Numero de Vendas: ");

//saida
console.log(`
Com uma Comissão de: ${(ValorDeVendas * 0.15).toFixed(2)}
O salario total deste vendedor é igual a: ${(1200 + (ValorDeVendas * 0.15)).toFixed(2)}
`);
