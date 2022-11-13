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

function mostrarPokamions(){
    for (var i = 0; i < pokemons.length; i++) { 
        for (var nombre in pokemons[i]) {
            console.log(pokemons[i].nombre)
        }
    }
}

function mostrarPokamionsFuego(){
    for (var i = 0; i < pokemons.length; i++) { 
        for (var tipoDePokemon in pokemons[i]) { 
            if (pokemons[i].tipoDePokemon[0] == "Fuego" || pokemons[i].tipoDePokemon[1] == "Fuego" ) {
                console.log(pokemons[i].nombre);
            }
        }
    }
}

mostrarPokamions();
mostrarPokamionsFuego();