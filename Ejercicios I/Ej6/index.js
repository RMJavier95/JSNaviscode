const pokemons = [
    {"nombre": "Charizard",
    "tipoDePokemon": ["Fuego", "Volador"]
    },
    {"nombre": "Metagross",
    "tipoDePokemon": ["Acero", "Psiquico"]
    },
    {"nombre": "Mewtwo",
    "tipoDePokemon": ["Psiquico"]
    },

]

//PRIMER MODO

if (pokemons[0].tipoDePokemon[0] == "Fuego" || pokemons[0].tipoDePokemon[1] == "Fuego" ) {
    console.log("¡Es un pokemon de fuego!");
};

if (pokemons[1].tipoDePokemon[0] == "Fuego" || pokemons[1].tipoDePokemon[1] == "Fuego" ) {
    console.log("¡Es un pokemon de fuego!");
};

if (pokemons[2].tipoDePokemon[0] == "Fuego" || pokemons[2].tipoDePokemon[1] == "Fuego" ) {
    console.log("¡Es un pokemon de fuego!");
};

//SEGUNDO MODO

for (var i = 0; i < pokemons.length; i++) { 
    for (var tipoDePokemon in pokemons[i]) { 
        if (pokemons[i].tipoDePokemon[0] == "Fuego" || pokemons[i].tipoDePokemon[1] == "Fuego" ) {
            console.log("¡Es un pokemon de fuego!");
        }
    }
}