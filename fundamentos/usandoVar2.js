//  Váriaveis pt2
// resumo: var não possui escopo de bloco.
var numero = 1
{
    var numero = 2
    console.log('dentro =', numero);
}
console.log('fora =', numero);