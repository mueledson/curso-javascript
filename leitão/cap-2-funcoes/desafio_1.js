// somar(3)(4)(5)
function somar(a,b,c) {
    a = 3;
    b = 4;
    c = 5;

    let adicao = a + b + c ;
    console.log(adicao);
}

somar();
// calcular(3)(7)(function)
function calcular(x) {
    return function(y) {
        return function(fn) {
            return fn(x,y)
        }
    }
}

function subtrair(a,b) {
    return a - b
}

function multiplicar(a,b) {
    return a * b
}

const r1 = calcular(10)(5)(subtrair);
console.log(r1);

const r2 = calcular(10)(5)(multiplicar);
console.log(r2);