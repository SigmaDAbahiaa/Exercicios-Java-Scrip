const prompt = require('prompt-sync')();
console.clear();

// Constantes
const VALOR_TOTAL = 280000;
const ENTRADA = 2500;
const PARCELAS = 65;
const TAXA_ANUAL = 0.12;

// Cálculo
const valorFinanciado = VALOR_TOTAL - ENTRADA;
const taxaMensal = Math.pow(1 + TAXA_ANUAL, 1 / 12) - 1;
const parcela = (valorFinanciado * taxaMensal) / (1 - Math.pow(1 + taxaMensal, -PARCELAS));
const valorTotalPago = parcela * PARCELAS;
const valorFinal = valorTotalPago + ENTRADA;

// Saída
console.log(`O valor final que Paulo irá pagar é de: R$ ${valorFinal.toFixed(2)}`);
