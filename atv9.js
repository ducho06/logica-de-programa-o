const prompt = require("prompt-sync")({sigint:true})

            const notas = [6.7, 7.4, 8.1, 7.7, 8.8, 9.8]
            var maior = 0 
            for (var i = 0 ; i < notas.length; i++) {
                if(maior < notas[i]){
                    maior = notas[i]


                }
            }
console.log(maior)
