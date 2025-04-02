const prompt = require("prompt-sync")({sigint:true})

var a=[], cont=0, num=0, contadord=0, contadorf=0, v=0

v=Number(prompt("digite um limite de contagem: "))
while(cont<=v)
if(v==0)
    console.log("por favor digite um nomero valido:)}
        {
          num= Number(prompt("digite um numero qualquer: "))
          a.push(num)
          cont++
        }

for(i=0;i<a.length;i++){
    if(a[i]>=10 && a[i] <= 20){
        contadord++
}else{
    contadorf++ 
}
}
console.log("foram digitados", contadord,"dentro do intervalo de 10-20")
console.log("foram digitados", contadorf,"fora do intervalo de 10-20")
//push serve para puxar o valor da variavel




