const prompt = require("prompt-sync")({sigint:true})


const pessoa = {
    nome: 'Ana',
    sobrenome: 'Silva',
    idade: 29,
    peso: 64
    }
    for(let atributo in pessoa) {
    console.log(`${atributo} = ${pessoa[atributo]}`)
    }