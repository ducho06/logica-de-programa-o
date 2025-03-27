const prompt = require("prompt-sync")({sigint:true})

            const notas = [6.7, 7.4, 8.1, 7.7, 8.8, 9.8]
            var maior = 0, i = 0
            while( i < notas.length) {
                if(maior < notas[i]){
                    maior = notas[i]


                }
                i++
            }
console.log(maior)
 