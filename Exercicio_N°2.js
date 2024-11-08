//inicio do algoritimo
const prompt = require('prompt-sync')();
console.clear();

//variaveis
const time = new Date();
const dia = time.getDate();
const mes = time.getMonth();
const ano = time.getFullYear();
var DataDeNascimento;
var DataAtual;
var idade;
var nome;

//entrada
console.log(`${"=".repeat(12)} Olá, Este é um algoritimo de autenticação ${"=".repeat(12)}\n`);
nome = prompt("Digite seu nome: ");

console.log("\nDigite sua data de nascimento com dia, mês e ano separados por '-' deste jeito: 00-00-0000");
DataDeNascimento = prompt("Data de nascimento: ");

DataDeNascimento = Number((DataDeNascimento.split("-").reverse().join("")));
if (mes < 10) {
    zero = '0';
}
else {
    zero = '';
}
DataAtual = Number(ano + '' + zero + mes + '' + dia);

idade = DataAtual - DataDeNascimento;
idade = Number(idade.toString().substring(0, 2));

console.log(`\nOlá ${nome}, Você tem ${idade} anos`);
if (idade >= 18) {
    console.log("Acesso Liberado");
}
else {
    console.log("Acesso Negado");
}
