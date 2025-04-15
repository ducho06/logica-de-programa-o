const prompt = require("prompt-sync")({sigint:true})

var texto= "Loops são legais!!!", count=0

while(count <30){
    console.log(texto, "-",texto)
count++
}

