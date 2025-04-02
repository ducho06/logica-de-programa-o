
const prompt = require("prompt-sync")({sigint:true})

var a=[], cont="N", num=0, contadord=0, contadorf=0

while(cont!="S"){
    num= Number(prompt("digite um numero qualquer: "))
    cont =prompt("digite <S> para sair, ou aperte qualquer tecla para CONTINUAR: ")
    a.push(num)

}
for(i=0;i<a.length;i++){
    if(a[i]>=10 && a[i] <=20){
        contadord++
}else{
    contadorf++ 
}
}
console.log("foram digitados", contadord,"dentro do intervalo de 10-20")
console.log("foram digitados", contadorf,"fora do intervalo de 10-20")
//push serve para puxar o valor da variavel





