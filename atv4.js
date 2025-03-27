const prompt = require("prompt-sync")({sigint:true})

var cm = 0, tempo=0, vel=0, litros =0, dist =0 

tempo = Number (prompt("digite o tempo gasto na viagem:"))
vel = Number (prompt("digite a velocidade media na viagem:"))
dist = tempo* vel
litros = dist / cm

console.log(" A media de velocidade de fi de ", vel )
console.log(" A media de velocidade de fi de ", tempo )
console.log(" A media de velocidade de fi de ", dist )
console.log(" A media de velocidade de fi de ", litro )