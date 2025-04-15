const prompt = require("prompt-sync")({sigint:true})

var nome="", count=0

nome= prompt("digite seu nome: ")

while(count<=10){

console.log(nome)

count++
}