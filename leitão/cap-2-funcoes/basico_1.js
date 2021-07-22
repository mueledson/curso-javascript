
let a = 4;
console.log(a);

// Function Declaration
function BomDia(){
    console.log('Bom Dia!');
}
BomDia();
// Function Expression
const BoaTarde = function () {
    console.log('Boa Tarde!')
}
BoaTarde(); // undefined
function somar(a = 0, b = 0) {
    return a + b;
}
let resultado = somar(10, 20, 40, 05, 700);
console.log(resultado);

resultado = somar(10, 700, 40, 05, 20);
console.log(resultado);

resultado = somar(10);
console.log(resultado);

resultado = somar();
console.log(resultado);