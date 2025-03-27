const prompt = require("prompt-sync")({sigint:true})

var f=0, c=0
c= Number (prompt("digite o valor de grau celcius: "))
f=(9.0*c+160.0)/5.0


if (f <50){
console.log (" ta friooooo a temperatura esta em ", f , "fahrenheint")

}
else{
    console.log (" ta calor  a temperatura esta em ", f , "fahrenheint")

}
