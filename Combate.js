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
input.addEventListener("keypress", function(event) {
  // If the user presses the "Enter" key on the keyboard
  if (event.key === "Enter") {
    // Cancel the default action, if needed
    event.preventDefault();
    // Trigger the button element with a click
    document.getElementById("button").click();
  }
});
document.querySelector("input[type='submit']").addEventListener("click", (e) =>{
    e.preventDefault()
    pokeDex()
}) //selección de pokemon

function pokeDex(){
    let inputPokemon = document.querySelector("input[type='text']").value
    fetch("https://pokeapi.co/api/v2/pokemon/" + inputPokemon.toLowerCase())
    .then((response) => response.json())
    .then ((response) => {
        document.querySelector("#pokemon1").innerHTML =`<div id=pokeImage>
            <img src="./Imagenes_Coliseo/statsBackground.png">
            <img id=sprite src="${response.sprites.front_default}"/>
            <p id=pokeName>${response.name.toUpperCase()}</p>
            <p id=pokeNumber>Number:  ${response.order}</p> </div>
            <div id="stats"></div>
            <input id="selection1" class="player1" type="submit" value="SELECT">
            
        ` //dar name & img a la selección
        for(let a = 0; a < response.stats.length; a++){
            let b = ["Health", "Attack", "Defense", "Sp.Att.", "Sp.Def.", "Speed"]
            document.querySelector("#stats").innerHTML +=`
            <h3 id=${response.stats[a].stat.name} class="stats" value="${response.stats[a].base_stat}">
                ${b[a].toUpperCase()} = ${response.stats[a].base_stat} </h3>
            ` 
            
            //dar "value" e "id" a los "h2" correspondientes. identificar los stats y nombrarlos. 
        }
        document.querySelector("input[id='selection1']").addEventListener("click", (d) =>{
            d.preventDefault()
            pokemonSelect()
            document.querySelector("#player1").innerHTML=""
            document.querySelector("#selection1").value =`SELECTED
            `
        }) 
        
        function pokemonSelect(){
            let obj = response
            let selection = JSON.stringify(obj)
            localStorage.setItem("Pokemon1", selection)
            let atributos = JSON.parse(localStorage.getItem("Pokemon1"))
        }
    })

}



//------------------------------------------------------------------------------------------------------------------------

var input2 = document.getElementById("buscador2");

// Execute a function when the user presses a key on the keyboard
input2.addEventListener("keypress", function(event) {
  // If the user presses the "Enter" key on the keyboard
  if (event.key === "Enter") {
    // Cancel the default action, if needed
    event.preventDefault();
    // Trigger the button element with a click
    document.getElementById("button2").click();
  }
});
document.querySelector("input[id='button2']").addEventListener("click", (z) =>{
    z.preventDefault()
    pokeDex2()
}) //busqueda de pokemon

function pokeDex2(){
    let inputPokemon2 = document.querySelector("input[id='buscador2']").value
    fetch("https://pokeapi.co/api/v2/pokemon/" + inputPokemon2.toLowerCase())
    .then((response) => response.json())
    .then ((response) => {
        document.querySelector("#pokemon2").innerHTML =`<div id=pokeImage2>
            <img src="./Imagenes_Coliseo/statsBackground.png">
            <img id=sprite2 src="${response.sprites.front_default}"/>
            <p id=pokeName2>${response.name.toUpperCase()}</p>
            <p id=pokeNumber2>Number:  ${response.order}</p> </div>
            <div id="stats2"></div>
            <input id="selection2" class="player2" type="submit" value="SELECT">
            
        ` //dar name & img a la selección
        for(let a = 0; a < response.stats.length; a++){
            let b = ["Health", "Attack", "Defense", "Sp.Att.", "Sp.Def.", "Speed"]
            document.querySelector("#stats2").innerHTML +=`
            <h3 id=${response.stats[a].stat.name}2 class="stats2" value="${response.stats[a].base_stat}">
                ${b[a].toUpperCase()} = ${response.stats[a].base_stat} </h3>
            ` //dar "value" e "id" a los "h2" correspondientes. identificar los stats y nombrarlos. 
        }
        document.querySelector("input[id='selection2']").addEventListener("click", (e) =>{
            e.preventDefault()
            pokemonSelect2()
            document.querySelector("#player2").innerHTML=""
            document.querySelector("#selection2").value =`SELECTED
            `
        
        }) 
        
        function pokemonSelect2(){
            let obj = response
            let selection = JSON.stringify(obj)
            localStorage.setItem("Pokemon2", selection)
            let atributos2 = JSON.parse(localStorage.getItem("Pokemon2"))
        }
    })
}
