//1
const doble = (num) => {
    return num * 2;
}

console.log(doble(2));

//2
const elevar = (num) => {
    return num * num;
}

console.log(elevar(2));

//Otra forma
const elevar2 = (num) => {
    return Math.pow(num, 2);
}

console.log(elevar2(2));

//3
const areaRectangulo = (base, altura) => {
    return base * altura;
}

console.log(areaRectangulo(4, 2));

//4
const par = (num) => {
    if (num % 2 == 0){
        return "Es par";
    }else{
        return "Es impar";
    };
}

console.log(par(3));

//5
const personas = [

    { nombre: 'Juan', edad: 18 },
  
    { nombre: 'María', edad: 16 },
  
    { nombre: 'Pedro', edad: 20 },
  
    { nombre: 'Pablo', edad: 15 },
  
    { nombre: 'Laura', edad: 19 },
  
];

const mayorDeEdad = (personas) => {
    for (var i = 0; i < personas.length; i++) { 
        for (var edad in personas[i]) { 
            if (personas[i].edad >= 18) {
                console.log(personas[i].nombre + " tiene " + personas[i].edad + " años.");
            }
        }
    }
}

const masJoven = (personas) => { 
    minValue = Math.min(...personas.map(x=>parseInt(x.edad)));

    for (var i = 0; i < personas.length; i++) { 
        for (var edad in personas[i]) { 
            if (personas[i].edad == minValue) {
                console.log(personas[i].nombre + " es el más joven.");
            }
        }
    }
}

const masMayor = (personas) =>{
    maxValue = Math.max(...personas.map(x=>parseInt(x.edad)));

    for (var i = 0; i < personas.length; i++) { 
        for (var edad in personas[i]) { 
            if (personas[i].edad == maxValue) {
                console.log(personas[i].nombre + " es el mayor.");
            }
        }
    }
}

mayorDeEdad(personas);
masJoven(personas);
masMayor(personas);

//6
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

const mostrarPokamions = () => {
    for (var i = 0; i < pokemons.length; i++) { 
        for (var nombre in pokemons[i]) {
            console.log(pokemons[i].nombre)
        }
    }
}

const mostrarPokamionsFuego = () => {
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