const prompt = require("prompt-sync")({sigint:true})

 
var senhabanco = "joia"

for (tentativa = 0; tentativa<3; tentativa++) {
senha = prompt("digite sua senha ")
if ( senha == senhabanco){
    console.log("entrou");
    break
}else{
    console.log("tentativa", tentativa,"...|||")
    if(tentativa == 3){
        console.log ()
    }
}
}