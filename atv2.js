const prompt = require("prompt-sync")({sigint:true})

var a= 0, b = 0, c = 0, delta=0


b = Number(prompt ("digite o valor de b:"))
a = Number(prompt ("digite o valor de a:"))
c = Number(prompt("digite o valor de c:"))

delta = (b*b)-(4*a*c)

console.log( "resultado",delta )


