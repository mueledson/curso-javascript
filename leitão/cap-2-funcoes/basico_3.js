//arrow function
const felizNatal = () => console.log('Feliz Natal!!!!');
felizNatal();

const saudacao = (nome) => `Fala ${nome}, beleza!?!`;
console.log(saudacao('Miguelin'));

const somar = (... numeros) =>{
    let total = 0;
    for (let n of numeros) {
        total += n   
    }
    return total
}

const subtrair = (a, b) => a-b

console.log(subtrair(4,1))

console.log(somar(1,2,3))
console.log(somar(4,5,6))
console.log(somar(7,8,9,10));


const potencia = base => exp => Math.pow(base, exp)
console.log(potencia(2)(10));


// this
Array.prototype.log = function(){
    console.log(this[this.length -1])
}

const numeros = [1,2,3]
numeros.log()