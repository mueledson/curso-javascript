
function exec(fn, a,  b) {
    return fn(a, b);
}

const somarNoTerminal = (x, y) => console.log(x + y);
const subtrairNoTerminal = (w, z) => console.log(w - z);
const subtrair = (w, z) => console.log(w - z);

exec(somarNoTerminal, 56, 38);
exec(subtrairNoTerminal, 182, 27);

const r = exec(subtrair, 5, 5);
console.log(r);

setInterval(function () {
    console.log('Exec3....')
}, 1000);