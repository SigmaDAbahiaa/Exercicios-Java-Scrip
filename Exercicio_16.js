//inicio do algoritimo
const prompt = require('prompt-sync')();
console.clear();

//variaveis
const indice_pluviometrico = [];
var dia_maior_indice = 0;
var dia_menor_indice = 0;
var PrimeraQuizena = 0;
var SegundaQuizena = 0;

//entrada
console.log(`${"=".repeat(12)} Algoritimo que informa as medidas pluviometricas de junho ${"=".repeat(12)}\n`);
console.log("Para que o programa possa funcionar é precisso que informe o indice do pluviometro do dia 1 até 30 de junho");

for (dia = 0; dia < 30; dia++){
    console.log(`\nInforme o índice pluviometrico do dia ${dia + 1} de junho`);
    indice_pluviometrico[dia] = prompt("C/> ");

    console.clear();
    console.log("Indice adicionado a lista.");
}
//saida
for (i = 1; i < 30; i++){
    if (indice_pluviometrico[i] > indice_pluviometrico[dia_maior_indice]){
        dia_maior_indice = i;
    }
    if (indice_pluviometrico[i] < indice_pluviometrico[dia_menor_indice]){
        dia_menor_indice = i;
    }
}

for (i = 0; i < 15; i++){
    PrimeraQuizena =+ indice_pluviometrico[i];
}
for (i = 15; i < 30; i++){
    SegundaQuizena =+ indice_pluviometrico[i];
}

PrimeraQuizena /= 15;
SegundaQuizena /= 15;

console.log(`\nDia que Mais choveu foi dia ${dia_maior_indice + 1}, com um indice de ${indice_pluviometrico[dia_maior_indice]} mm`);
console.log(`Dia que Menos choveu foi dia ${dia_menor_indice + 1}, com um indice de ${indice_pluviometrico[dia_menor_indice]} mm`);

console.log(`\nMerdia Pluviometrica da Primeira Quizena: ${PrimeraQuizena.toFixed(2)} mm`);
console.log(`Merdia Pluviometrica da Segunda Quizena: ${SegundaQuizena.toFixed(2)} mm\n`);
