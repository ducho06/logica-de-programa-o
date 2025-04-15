const prompt = require("prompt-sync")({sigint:true})

var estado=""

estado = prompt ("digite o seu estado: RJ, MG, SP: " )

if(estado.toUpperCase() =="RJ" ){

    console.log("carioca")

}else if(estado.toUpperCase() == "SP" ){

    console.log("paulista")

}else if(estado.toUpperCase() == "MG")
{
    console.log("mineiro")
}