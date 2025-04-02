const prompt = require("prompt-sync")({sigint:true})

var num=0, maior =0

while (num !=9999){
    num = Number(prompt("digite um numero ou 9999 para sair: "))
    if (num !=9999){
        if (num > maior){
            maior = num
        }
    }
}
console.log("o maior numero é: ", maior)