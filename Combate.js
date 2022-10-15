// document.querySelector("button[id=findPokemon]").addEventListener("click", (e) => {
//     e.preventDefault()
//     pokeName()
// })
// function pokeName(){
//     let inputPokemon = document.querySelector("input[id='pokemonNameSearch']").value
//     fetch("https://pokeapi.co/api/v2/pokemon" + inputPokemon)
//     .then((response) => response.json())
//     .then((response) => {
//         console.log(response)
//         document.querySelector("#pokedata").innerHTML = `
//         <h2>${response.name}</h2>
//         <img src="${response.sprites.front_default}"/>
//         `
// })
// }
// Get the input field
var input = document.getElementById("buscador");

// Execute a function when the user presses a key on the keyboard
input.addEventListener("keypress", function (event) {
    // If the user presses the "Enter" key on the keyboard
    if (event.key === "Enter") {
        // Cancel the default action, if needed
        event.preventDefault();
        // Trigger the button element with a click
        document.getElementById("button").click();
    }
});
document.querySelector("input[type='submit']").addEventListener("click", (e) => {
    e.preventDefault()
    pokeDex()
}) //selección de pokemon

function pokeDex() {
    let inputPokemon = document.querySelector("input[type='text']").value
    fetch("https://pokeapi.co/api/v2/pokemon/" + inputPokemon.toLowerCase())
        .then((response) => response.json())
        .then((response) => {
            document.querySelector("#pokemon1").innerHTML = `<div id=pokeImage>
            <img src="./Imagenes_Coliseo/statsBackground.png">
            <img id=sprite src="${response.sprites.front_default}"/>
            <p id=pokeName>${response.name.toUpperCase()}</p>
            <p id=pokeNumber>Number:  ${response.order}</p> </div>
            <div id="stats"></div>
            <input id="selection1" class="player1" type="submit" value="SELECT">
            
        ` //dar name & img a la selección
            for (let a = 0; a < response.stats.length; a++) {
                let b = ["Health", "Attack", "Defense", "Sp.Att.", "Sp.Def.", "Speed"]
                document.querySelector("#stats").innerHTML += `
            <h3 id=${response.stats[a].stat.name} class="stats" value="${response.stats[a].base_stat}">
                ${b[a].toUpperCase()} = ${response.stats[a].base_stat} </h3>
            `

                //dar "value" e "id" a los "h2" correspondientes. identificar los stats y nombrarlos. 
            }
            document.querySelector("input[id='selection1']").addEventListener("click", (d) => {
                d.preventDefault()
                var atributos = pokemonSelect()
                document.querySelector("#player1").innerHTML = ""
                document.querySelector("#selection1").value = "SELECTED"
                document.querySelector("#vs").innerHTML = `<img id="vs"src="./Imagenes_Coliseo/VS.png">`
                if ((selection1.value) == "SELECTED" && (selection2.value) == "SELECTED") {
                    document.querySelector("body").innerHTML = ""

                    //////////////////////////////////////////comabte pokemon////////////////////////////////

                }
            })

            function pokemonSelect() {
                let obj = response
                let selection = JSON.stringify(obj)
                localStorage.setItem("Pokemon1", selection)
                let atributos = JSON.parse(localStorage.getItem("Pokemon1"))
                atk = atributos.stats[1].base_stat
                def = atributos.stats[2].base_stat
                speed = atributos.stats[5].base_stat
                hp = atributos.stats[0].base_stat
                name = atributos.name
                img = atributos.sprites.back_default

                ///////////////bucle para sacar el atk y el nombre de las habilidades///////////////

                for (let a = 0; a < 4; a++) {
                    let numeroRandom = Math.floor(Math.random() * atributos.moves.length)
                    fetch("https://pokeapi.co/api/v2/move/" + numeroRandom)
                        .then((response) => response.json())
                        .then((response) => {
                            atkHabilidad.push(response.power)


                        })
                    habilidades.push(atributos.moves[numeroRandom].move.name)

                    
                } 
            }
        })

}



//------------------------------------------------------------------------------------------------------------------------

var input2 = document.getElementById("buscador2");

// Execute a function when the user presses a key on the keyboard
input2.addEventListener("keypress", function (event) {
    // If the user presses the "Enter" key on the keyboard
    if (event.key === "Enter") {
        // Cancel the default action, if needed
        event.preventDefault();
        // Trigger the button element with a click
        document.getElementById("button2").click();
    }
});
document.querySelector("input[id='button2']").addEventListener("click", (z) => {
    z.preventDefault()
    pokeDex2()
}) //busqueda de pokemon

function pokeDex2() {
    let inputPokemon2 = document.querySelector("input[id='buscador2']").value
    fetch("https://pokeapi.co/api/v2/pokemon/" + inputPokemon2.toLowerCase())
        .then((response) => response.json())
        .then((response) => {
            document.querySelector("#pokemon2").innerHTML = `<div id=pokeImage2>
            <img src="./Imagenes_Coliseo/statsBackground.png">
            <img id=sprite2 src="${response.sprites.front_default}"/>
            <p id=pokeName2>${response.name.toUpperCase()}</p>
            <p id=pokeNumber2>Number:  ${response.order}</p> </div>
            <div id="stats2"></div>
            <input id="selection2" class="player2" type="submit" value="SELECT">
            
        ` //dar name & img a la selección
            for (let a = 0; a < response.stats.length; a++) {
                let b = ["Health", "Attack", "Defense", "Sp.Att.", "Sp.Def.", "Speed"]
                document.querySelector("#stats2").innerHTML += `
            <h3 id=${response.stats[a].stat.name}2 class="stats2" value="${response.stats[a].base_stat}">
                ${b[a].toUpperCase()} = ${response.stats[a].base_stat} </h3>
            ` //dar "value" e "id" a los "h2" correspondientes. identificar los stats y nombrarlos. 
            }
            document.querySelector("input[id='selection2']").addEventListener("click", (e) => {
                e.preventDefault()
                let atributos2 = pokemonSelect2()
                document.querySelector("#player2").innerHTML = ""
                document.querySelector("#selection2").value = `SELECTED`
                document.querySelector("#vs").innerHTML = `<img id="vs"src="./Imagenes_Coliseo/VS.png">`
                if ((selection1.value) == "SELECTED" && (selection2.value) == "SELECTED") {
                    document.querySelector("body").innerHTML = ""


                    //////////////////////////////////combate pokemon////////////////////////////////////

                    atk2 = atributos2.stats[1].base_stat
                    def2 = atributos2.stats[2].base_stat
                    speed2 = atributos2.stats[5].base_stat
                    hp2 = atributos2.stats[0].base_stat
                    name2 = atributos2.name
                    img2 = atributos2.sprites.front_default

                        

                            document.querySelector("body").innerHTML = `
                        <div id="hp">
                    ${hp}Hp
                    </div>
                    <div id="image_back">

                    <img src="${img}"><img>

                    </div>

                    <div id="habilidades"> 

                    <button class="habilidades">${habilidades[0]} ${atkHabilidad[0]}</button>
                    <button class="habilidades">${habilidades[1]}</button>
                    <button class="habilidades">${habilidades[2]}</button>
                    <button class="habilidades">${habilidades[3]}</button>

                    </div>


                    <div id="hp2">
                    ${hp2}Hp
                    </div>

                    <div id="image_front">

                    <img src="${img2}"><img>

                    </div>

                    <div id="habilidades2"> 

                    <button class="habilidades2">${habilidades2[0]}</button>
                    <button class="habilidades2">${habilidades2[1]}</button>
                    <button class="habilidades2">${habilidades2[2]}</button>
                    <button class="habilidades2">${habilidades2[3]}</button>

                    </div>



                    `







                        }
            })


            function pokemonSelect2() {
                let obj = response
                let selection = JSON.stringify(obj)
                localStorage.setItem("Pokemon2", selection)
                let atributos2 = JSON.parse(localStorage.getItem("Pokemon2"))
                atk2 = atributos2.stats[1].base_stat
                def2 = atributos2.stats[2].base_stat
                speed2 = atributos2.stats[5].base_stat
                hp2 = atributos2.stats[0].base_stat
                name2 = atributos2.name
                img2 = atributos2.sprites.back_default
                for (let i = 0; i < 4; i++) {
                    habilidades2.push(atributos2.moves[Math.floor(Math.random() * atributos2.moves.length)].move.name)

                }
                return atributos2
            }
        })
}


///// variable combate pokemon /////

var atkHabilidad = []
var atk
var speed
var def
var hp
var name
var img
var habilidades = []

var atkHabilidad2
var atk2
var speed2
var def2
var hp2
var name2
var img2
var habilidades2 = []








