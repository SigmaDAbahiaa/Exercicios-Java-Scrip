//inicio do algoritimo
const prompt = require('prompt-sync')();
console.clear();

//variaveis
var Velocidade_Ms;
var Velocidade_Kmh;

//entrada
console.log(`${"=".repeat(12)} Algoritimo que converte m/s para km/h ${"=".repeat(12)}\n`);

console.log("Digite em (m/s) Metros por segundo a velocidade que deseja ser convertida.");
Velocidade_Ms = prompt("C/>: ");

//saida
Velocidade_Kmh = Velocidade_Ms * 3.6;
console.log(`\n${Velocidade_Ms} m/s Convertidos para km/h é igual a: ${Velocidade_Kmh.toFixed(2)} km/h`);
