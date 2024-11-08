//inicio do algoritimo
const prompt = require('prompt-sync')();
console.clear();

//variaveis
const time = new Date()
const ano = time.getFullYear();
var idadeEmDias;
var AnoNascimento;
var mesNascimento = 0;
var idade = [];
var Data;

//entrada
console.log(`${"=".repeat(12)} Algoritimo que exibe sua idade em dias ${"=".repeat(12)}\n`);

console.log("Digite sua data de nascimento com dia, mês e ano separados por '-' deste jeito: 00-00-0000\n");

Data = prompt("Data de Nascimento: ");
Data = Number((Data.split("-").reverse().join("")))

//saida
idade[0] = Number(String(Data).substring(0, 4));
idade[1] = Number(String(Data).substring(4, 6));
idade[2] = Number(String(Data).substring(6));

AnoNascimento = ano - idade[0];

for (i = idade[1]; i < 12; i++) {
    mesNascimento++;
}

idadeEmDias = (AnoNascimento * 365.5) + (mesNascimento * 12) + idade[2];

console.log(`\nSua idade expressa em dias é aproximadamente: ${idadeEmDias.toFixed(0)} dias`);
