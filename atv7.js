const prompt = require("prompt-sync")({sigint:true})

var valor1=0, valor2=0, resultado=0


valor1= Number (prompt("digite o primeiro valor: "))
valor2= Number (prompt("digite o segundo valor: "))

while (valor2==0){
    valor2= Number (prompt("digite o segundo valor diferente de 0: "))
    
    
}
resultado= valor1/valor2
console.log ('o resultado da divisao do primeiro pelo segundo e:',resultado)