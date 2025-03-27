const prompt = require("prompt-sync")({sigint:true})

var x = 0, media = 0,y=0,b=0, aluno= 0

aluno = (prompt("nome do aluno: "))
x = Number(prompt("digite o valor da nota 1: "))
y = Number(prompt("digite o valor da nota 2 : "))
b = Number(prompt("digite o valor da nota 3: "))
media = (x+y+b)/3

if( media >= 5){
        console.log(aluno ," aprovado:", x )
}
else if(media >= 3 && media < 5){
        console.log(aluno ," recuperaçao :", x)
}else{
        console.log(aluno ," reprovado:", x)
}
