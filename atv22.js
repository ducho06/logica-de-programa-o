const prompt = require("prompt-sync")({sigint:true})

var tempo=0, velocidadem=0, gasolina=0, distancia=0 

tempo=Number(prompt("Digite o tempo gasto na viagem: "))
velocidadem=Number(prompt("Digite a velocidade: "))
gasolina = Number(prompt("digite a quantidade de gasolina gasta: "))


distancia = (velocidadem*tempo)
gasolina= (distancia/gasolina)
console.log("Foram percorridos", distancia,"km com o consumo médio de",gasolina)
