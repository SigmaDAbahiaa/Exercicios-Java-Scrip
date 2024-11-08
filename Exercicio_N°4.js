//inicio do algoritimo
const prompt = require('prompt-sync')();
console.clear();

//variaveis
var num;

//entrada
console.log(`${"=".repeat(12)} Algoritimo que informa se um numero é divisivel por 10, 5 ou 2 ${"=".repeat(12)}\n`);

num = prompt("Digite um Numero: ");

//saida
if (num % 10 == 0 && num % 5 == 0 && num % 2 == 0) {
    console.log("O numero pode ser dividido por 10, 5 e 2");
}
else if (num % 10 == 0) {
    console.log("O numero pode ser dividido por 10");
}
else if (num % 5 == 0) {
    console.log("O numero pode ser dividido por 5");
}
else if (num % 2 == 0) {
    console.log("O numero pode ser dividido por 2");
}
else {
    console.log("O numero não pode ser dividido nem por 10, nem 5, nem 2");
}
