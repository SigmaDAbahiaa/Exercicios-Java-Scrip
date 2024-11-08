//inicio do algoritimo
const prompt = require('prompt-sync')();
console.clear();

//variaveis
var Caractere;
var num;

//entrada
console.log(`${"=".repeat(12)} Algoritimo que exibe se um digito é uma vogal, consoante, numero ou simbolo ${"=".repeat(12)}\n`);

Caractere = prompt("Tecle um Digito: ");

//saida
if (Caractere.toString().length == 1){
    num = parseInt(Caractere);

    if (isNaN(num) == false){
        console.log(`\nO Caracteré: ${Caractere} é um Numero.`);
    }
    else {
        if ("aeiou".indexOf(Caractere.toLowerCase()) >= 0){
            console.log(`\nO Caracteré: ${Caractere} é uma Vogal.`);
        }
        else if (Caractere.match(/[a-zA-Z]/)){
            console.log(`\nO Caracteré: ${Caractere} é uma Consoante.`);
        }
        else{
            console.log(`\nO Caracteré: ${Caractere} é um Símbolo.`);
        }
    }
}
else{
    console.log("\nInsira Apenas um Digito !");
}
