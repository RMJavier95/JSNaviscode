const personas = [

    { nombre: 'Juan', edad: 18 },
  
    { nombre: 'María', edad: 16 },
  
    { nombre: 'Pedro', edad: 20 },
  
    { nombre: 'Pablo', edad: 15 },
  
    { nombre: 'Laura', edad: 19 },
  
];

function mayorDeEdad(array){
    for (var i = 0; i < personas.length; i++) { 
        for (var edad in personas[i]) { 
            if (personas[i].edad >= 18) {
                console.log(personas[i].nombre + " tiene " + personas[i].edad + " años.");
            }
        }
    }
}

function masJoven(personas){
    minValue = Math.min(...personas.map(x=>parseInt(x.edad)));

    for (var i = 0; i < personas.length; i++) { 
        for (var edad in personas[i]) { 
            if (personas[i].edad == minValue) {
                console.log(personas[i].nombre + " es el más joven.");
            }
        }
    }
}

function masMayor(personas){
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

