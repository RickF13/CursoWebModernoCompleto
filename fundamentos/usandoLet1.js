//  32 - usando Let
// resumo: let tem escopo de bloco, var n tem, var possui apenas escopo de função e global.
let numero = 1
{
    let numero = 2
    console.log('dentro =', numero);
}
console.log('fora =', numero);

// the last