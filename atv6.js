const prompt = require("prompt-sync")({sigint:true})

var op=0, num1=0, num2=0, res =0 

num1 = Number(prompt("digite o valor 1: "))
num2 = Number(prompt("digite o valor 2 : "))
op = (prompt("digite a operaçao +, -, *, / "))


switch (op) {
    case "+": res = num1 + num2
    console.log('o resultado da SOMA do numero é: ', res)
    break
    case "-": res = num1 - num2
    console.log('o resultado da SUBITRAÇÃO do numero é:', res )
    break
    case "/": res = num1 / num2
    console.log('o resultado da DIVISAO do numero é: ', res )
    break
    case "*": res = num1 * num2
    console.log('o resultado da MULTIPLICAÇÃO do numero é: ', res )
    break
    default:
    console.log('')
    
    }