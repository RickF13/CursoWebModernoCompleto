// here 
// array  = []
// usando em um ARRAY como parâmetro de uma função
function rand([min = 0, max = 1000]) {
// function rand([min = 0, max = 1000] = []) { // #* colocando como padrão um array vazio evita o error
    if (min > max) [min, max] = [max, min] 
    const valor = Math.random() * (max - min) + min
    return Math.floor(valor)
}

console.log(rand([50, 40]));
console.log(rand([992]));
console.log(rand([,10]));
console.log(rand([]));
// console.log(rand());    //error
// console.log(rand());    // #* error evitado