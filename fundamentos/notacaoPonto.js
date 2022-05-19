// Notação Ponto
console.log(Math.ceil(6.1));

const obj1 = {}
obj1.nome = 'Bola'
// obj1['nome'] = 'Bola2'

console.log(obj1.nome);

function Obj(nome, id) {
    this.nome = nome
    this.id = id
    this.exec = function () {
        console.log("Exec...");
    }
}

const obj2 = new Obj('Cadeira', 19)
const obj3 = new Obj('Mesa', 20)
console.log(obj2);
console.log(obj3);
obj3.exec()