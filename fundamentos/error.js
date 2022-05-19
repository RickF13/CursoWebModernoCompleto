// a52 - 52. Tratamento de Erro(Try/Catch/Throw)
function tratarErrorELancar(erro) {
    // throw new Error("...")
    // throw new Error("ERRouuuuuuuuuuuuu...")
    // throw 10
    // throw true
    // throw 'mensagem'
    throw{
        nome: erro.name,
        msg: erro.message,
        date: new Date
    }
}

function imprimirNomeGritado(obj) {
    try {
        console.log(obj.name.toUpperCase() + '!!!');
    } catch (e) {
        tratarErrorELancar(e)
    } finally {
        console.log('final');
    }

    // e = error; @_@
}
// erro name/nome
const obj = { nome: 'Roberto'}
imprimirNomeGritado(obj)