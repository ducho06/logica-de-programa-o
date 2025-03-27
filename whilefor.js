const prompt = require("prompt-sync")({sigint:true})

 var count = 0, continua="s"

 while (continua =="s" ){
  console.log(count)
   count++ 
   continua = prompt("digite s para continuar: ")}


/*///
while depende de interação para continuar o ciclo 
já o for não precisa nescessariamente de interação com o usuario 
Depende da logica de programaçao aplicada no sistema
///*/
/*
for(var count=0;count <10; count++){
   console.log(count)
}
 */