const prompt = require("prompt-sync")({sigint:true})

var semaforo="", 

semaforo= prompt("digite uma cor: ")

if(semaforo.toUpperCase=="VERDE")
{
    console.log("pode passar!!")
}else{
    console.log("Não pode passar!!")
}