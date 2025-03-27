const prompt = require("prompt-sync")({sigint:true})

// equilatero todos os lados sao iguais 
//isoceles dois iguais e um diferente 
// escaleno todos diferentes 

var lado1 = 0, lado2 = 0, lado3 = 0

lado1 = Number (prompt("digite o primeiro lado do triangulo: "))
lado2 = Number (prompt("digite o segundo lado do triangulo: "))
lado3 = Number (prompt("digite o terceiro lado do triangulo: "))

if(lado1 == lado2 && lado1 == lado3 && lado2 == lado3 ){
console.log("este e um triangulo equilatero")

}else if(lado1 != lado2 && lado1 != lado3 && lado2 != lado3 ){

    console.log("este e um triangulo escaleno")
    }else{

        console.log("este e um triangulo isoceles")
    }
    
