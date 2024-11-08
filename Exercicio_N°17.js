//inicio do algoritimo
const prompt = require('prompt-sync')();
console.clear();

//variaveis
const vetor = Array(15);
var ValorBuscado = 0;

//entrada
console.log(`${"=".repeat(12)} Algoritimo que le um vetor de é mostra o numero de ocorrencias ${"=".repeat(12)}\n`);
console.log("Para realizar o cauculo é preciso que você digite 15 numeros inteiros");

for (i = 0; i < vetor.length; i++){
    console.log(`\nDigite o numero para a posição ${i + 1}, do vetor`);
    vetor[i] = prompt("C/> ");

    console.clear();
    console.log(`numero adicionado na posição ${i + 1}.`);
}

console.log("\nDigite o numero que deseja buscar no vetor");
ValorBuscado = prompt("C/> ");

//saida
let contador = 0;

for (i = 0; i < vetor.length; i++){
    if (vetor[i] == ValorBuscado){
        contador++;
    }
}

console.log(`\nO número ${ValorBuscado} aparece ${contador} vez(es) no vetor.`);
