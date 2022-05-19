// Destructuring #1
// novo recurso do ES2015
// usando em um objeto

const pessoa = {
    nome: 'Ana',
    idade: 5,
    endereco: {
        logradouro: 'Rua ABC',
        numero: 1000
        
    }
}

const { nome, idade } = pessoa
console.log(nome, idade);

const { nome: n, idade: i } = pessoa
console.log(n, i);

const {sobrenome, bemHumorada = true, miro =  null} = pessoa
console.log(sobrenome, bemHumorada, miro);

const {endereco: {logradouro, numero, cep} } = pessoa
console.log(logradouro, numero, cep);

// erro
// #* no js quase nunca da erro
// const {conta: {ag, num} } = pessoa
// console.log(ag, num);
// console.log(conta);


// # teste
// let {endereco } = pessoa  // #* pode ser let tbm poh
// console.log(endereco);
// console.log(typeof endereco);

// endereco.rua = "casa da ana"

// console.log(endereco);

// endereco = [{rua:'Rua da minha sogra', n:"não lembro"}, "perguntar para a Ana"]
// console.log(endereco);
// console.log(typeof endereco);

// endereco = ['Rua da minha sogra', 'não lembro']
// console.log(endereco);
// console.log(typeof endereco);

// #* teste 2 
// #* pra saber se vira let, var ou const, vamos testar...
// n = "Juliana"
// i = 15
// console.log(n, i);
// #* deu erro e flw que n é uma constante

// #* Vamos tentar especificar que é pra ser let
// #* hm ja entendi...
// #* é const pq chamamos de const msm, não é padrão...
// #* seguindo então...

// let {nome:nameX, idade:age} = pessoa
// console.log(nameX, age);

// nameX = "Juliana"
// age = 15
// console.log(nameX, age);

