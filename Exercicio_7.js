const prompt = require('prompt-sync')();
console.clear();

// Entrada
console.log(`${"=".repeat(12)} Algoritmo que determina a comissão de um vendedor ${"=".repeat(12)}\n`);
console.log(`Para descobrir o valor final do revendedor, considere que 25% é a comissão e 45% são impostos.\n`);

const custoFabrica = Number(prompt("Digite o custo de fábrica: "));

// Cálculo
const comissaoRevendedor = custoFabrica * 0.25;
const impostos = custoFabrica * 0.45;
const precoFinal = custoFabrica + comissaoRevendedor + impostos;

// Saída
console.log(`
Custo de fábrica: R$ ${custoFabrica.toFixed(2)}
Comissão do revendedor (25%): R$ ${comissaoRevendedor.toFixed(2)}
Impostos (45%): R$ ${impostos.toFixed(2)}
Preço final do carro: R$ ${precoFinal.toFixed(2)}
`);
