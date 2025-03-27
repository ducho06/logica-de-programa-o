const prompt = require("prompt-sync")({sigint:true})

var num=0, cont=0, continua = "s", media =0, acumulado=0


while(continua == "s"){
    num= Number(prompt("digite um nomero; "))
    acumulado = acumulado + num
    cont++
    continua = prompt (`deseja continuar a digitar? (s/n):`)
}
media = acumulado / cont
console.log (media)