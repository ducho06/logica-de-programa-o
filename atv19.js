const prompt = require("prompt-sync")({sigint:true})

var nome="", idade=0, sexo="", x=0

nome = prompt ("digite o seu nome: ")
idade = Number (prompt("digite sua idade: "))
sexo = prompt("digite seu gênero: Feminino ou Masculino ")

if(sexo=="feminino" ||sexo =="f" && idade<25){
console.log(nome, "aceita!!")

}else{
  console.log(nome, "Não aceita. ")
}
