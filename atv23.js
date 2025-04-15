const prompt = require("prompt-sync")({sigint:true})

var ws=0, casa=0, salariom=1518, payday=0

payday= Number(prompt("digite o dia do pagamento da conta: "))

ws=(salariom/7)

console.log(ws.toFixed(1))

if(payday<=5){
    desconto= ws-(ws *(10/100))
    console.log(desconto.toFixed(2))

}else{
    console.log(ws.toFixed(2))
}