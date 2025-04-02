const prompt = require("prompt-sync")({sigint:true})

var a=[], cont=0, num=0, contadord=0, contadorf=0, v=0

v=Number(prompt("digite um limite de contagem: "))
while(cont<=v){
    num= Number(prompt("digite um numero qualquer: "))
    a.push(num)

}