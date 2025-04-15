const prompt = require("prompt-sync")({sigint:true})

var aumento=0, salario=0, salariototal=0, digitado=0

salario=Number(prompt("digite o salario: "))

aumento= Number (prompt("Para obter o valor do aumento digite: 1, 2, 3 ou 4 para por a porcentagem desejada: "))

switch(aumento){
    case 1 :
        aumento= salario +(salario *(15/100))
         
        console.log(aumento)
    break
    case 2 :
        aumento= salario +(salario *(10/100))
         
        console.log(aumento)
    break
    case 3 :
        aumento= salario +(salario *(7/100))
         
        console.log(aumento)
    break
    
    case 4 :
digitado = Number(prompt("digite o valor da porcentagem desejada: "))
        aumento= salario +(salario *(digitado/100))

        console.log(aumento)
    break
    default:
        alert("digite um valor valido: ")
}

