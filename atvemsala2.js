const prompt = require("prompt-sync")({sigint:true})

var num =0, qpar=0, qimpar=0


while(num !=9999){
    num = Number(prompt("digite umnumero: "))
    if (num!=9999){
                    if(num%2 ==0){
                         qpar++
                        }else{
                             qimpar++
}
}
}
console.log("a quantidade de pares digitados é: ", qpar)
console.log("a quantidade de pares digitados é: ", qimpar)