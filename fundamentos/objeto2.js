// 3 - Objeto vs função
console.log(typeof Object);
console.log(typeof new Object);

const Cliente = function() {}
console.log(typeof Cliente);
console.log(typeof new Cliente);

class Produto {} // ES 2015 (ES6)
console.log(typeof Produto);
console.log(typeof new Produto());


// last aula
// testando * 
// const x = function(){

// }

// const y = new x()

// console.log(`x ${typeof x}`);
// console.log(`y ${typeof y}`);
// console.log(typeof y);