//a51 - Contexto de Execução: Browser vs Node

let a = 3 //#1
global.b = 123
this.c = 456
this.d = false
this.e = 'teste'

// console.log(this.a);   #1
// console.log(global.a); #1
console.log(a);
console.log(global.b);
console.log(this.c);
console.log(module.exports.c);
console.log(module.exports === this);
console.log(module.exports);
// criando uma var maluca(bomba): sem var e let!
abc = 3 // não faça isso em casa!!! .. nem na rua
console.log(global.abc);

// module.exports = { e: 456, f: false, g: 'teste' }