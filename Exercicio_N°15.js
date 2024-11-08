//inicio do algoritimo
console.clear();

//variaveis
var Populacao_A = 5000000;
var Populacao_B = 7000000;
const TaxaDeNatalidadeA = 0.03;
const TaxaDeNatalidadeB = 0.02;
var anos = 0;

//saida
while (Populacao_A <= Populacao_B){
    Populacao_A += Populacao_A * TaxaDeNatalidadeA;
    Populacao_B += Populacao_B * TaxaDeNatalidadeB;
    anos++;
}

console.log(`Serâo necessarios ${anos} anos para que a População do Pais A ultrapasse a População do Pais B\n`);
