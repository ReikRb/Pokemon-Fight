

function changeImage() {
    var image = document.querySelector("#pokeball")
    if (image.src.match("pokeball")) {
        image.src = "pikachu_walk.png"
        
        document.querySelector("audio").src = './04_Professor_Oak.mp3'
        let writing = str => {
            let arrFromStr = str.split('')
            let i = 0
            let printStr = setInterval(function(){
                document.querySelector("#p2").innerHTML += arrFromStr[i]
                i++
                
                if (i ===  arrFromStr.length){
                    clearInterval(printStr)
                    document.querySelector("#p2").innerHTML += `<a href="./Combate.html" id="si"> sí</a>`
                }
            },100)
        }
        writing('Bienvenido a Pueblo Paleta, si estás listo para el combate Pokémon, presiona ')
        document.querySelector("#dialogImg").innerHTML = `<img src="dialog.png"></img>`
    
}}


