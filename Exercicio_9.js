//inicio do algoritimo
const prompt = require('prompt-sync')();
console.clear();

//variaveis
const ValorTotal = 280000;
var ValorTotalPago;
var ValorFinal;
const Entrada = 2500;
const parcelas = 65;
var ValorFinanciado;
const TaxaAnual = 0.12;
var TaxaMensal;
var parcela;

//saida
ValorFinanciado = ValorTotal - Entrada;
TaxaMensal = Math.pow(1 + TaxaAnual, (1 / 12)) - 1;
parcela = ValorFinanciado * TaxaMensal / (1 - Math.pow(1 + TaxaMensal, parcelas * -1));

ValorTotalPago = parcela * parcelas;
ValorFinal = ValorTotalPago + Entrada;

console.log(`O valor final que Paulo irá pagar é de: R$${ValorFinal.toFixed(2)}`);
