//inicio do algoritimo
const prompt = require('prompt-sync')();
console.clear();

//variaveis
var CustoFabrica ;
var ComicaoRevendedor;
var inpostos;
var PrecoFinal;

//entrada
console.log(`${"=".repeat(12)} Algoritimo que determina a comissão de um vendedor ${"=".repeat(12)}\n`);

console.log(`Para descobrir o valor final do revendedor levando em consideração 25% que é a
porcentagem do revendedor e que 45% são os inpostos aplicados ao custo de fabrica.\n
`);
    
CustoFabrica = Number(prompt("Digite o custo de fabrica: "));

//saida
ComicaoRevendedor = CustoFabrica * 0.25;
inpostos = CustoFabrica * 0.45;
PrecoFinal = CustoFabrica + ComicaoRevendedor + inpostos;

console.log(`\nO custo de fabrica era de: ${CustoFabrica.toFixed(2)}
O percentual de 25% do revendedor ficou por: ${ComicaoRevendedor.toFixed(2)}
E os inpostos ficaram com o valor de: ${inpostos.toFixed(2)}

Somando tudo, o preço final de seu carro ficou por: ${Number(PrecoFinal).toFixed(2)}
`);
