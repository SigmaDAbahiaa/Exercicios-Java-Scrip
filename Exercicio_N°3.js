//inicio do algoritimo
const prompt = require('prompt-sync')();
console.clear();

//variaveis
var salario;
var prestacao;

//entrada
console.log(`${"=".repeat(12)} Algoritimo de Emprestimos Bancarios ${"=".repeat(12)}\n`);

salario = prompt("Valor salarial: ");
console.log('');
prestacao = prompt("Valor da Prestação: ");

//saida
if ((salario * 20 / 100) < prestacao){
    console.log("\nEsté emprestimo não pode ser concedido.");
}
else {
    console.log("\nEmprestimo pode ser Concedido");
}
