const inhabitants = getInhabitants();

// 1 Mostrar en pantalla al/los personajes mas enanos de "Brastlewark"

const masBajos = () => {
    let valorMin = inhabitants[0].height

    for (i=0; i < inhabitants.length; i++) {
        let altura = inhabitants[i].height 
            if (valorMin > altura) {
                valorMin = altura
            }
        
       
    }
//console.log(valorMin)
}
//masBajos();


// 2 Crear una funcion que devuelva los personajes por ID en base a un rango numerico.

const personajesId = (num1, num2) =>  {
    let array = [];
    for (i=0; i < inhabitants.length; i++) {
        let rangoId = inhabitants[i].id
        if ( rangoId >= num1 && rangoId <= num2) {
            array.push(inhabitants[i])
        }
    }
//return array

}
//console.table   (personajesId(2,5))


// 3 Crear una funcion que devuelva una lista de los habitantes de "Brastlewark" por el color de pelo.

const colorPelo = (color) => {
let pelo = inhabitants.filter((inhabitant) => inhabitant.hair_color == color);
  
return pelo;
}

//console.table(colorPelo('Black'))

// 4 Crear una funcion que devuelva una lista de los habitantes de "Brastlewark" en base a una propiedad
// y un valor enviados como parámetros.

const showProperty = (prop, valor) =>{
    let property = inhabitants.filter((inhabitant) => inhabitant[prop] == valor);
  
return property; 
}

/*console.table(showProperty('age', 306))
console.table(showProperty('weight', 39.065952))
console.table(showProperty('professions', "Metalworker"))*/

// 5 Crear una funcion que devuelva al mas alto, al mas bajo, al mas anciano, al mas joven o al mas ancho de "Brastlewark".

const habitante = (caracteristica) => {
    
}

// 6 Mostrar una tabla con "Fizwood Mysttink" y todos sus amigos.

const showFriends = () =>{
    
}
showFriends();

// 7 - Listar a todos los personajes que tengan como profesión "Woodcarver".

const showprofession = (profesion) =>{
    let woodcarver = inhabitants.filter((inhabitant) => inhabitant.professions == profesion);
return woodcarver; 
}

//console.table(showprofession("Woodcarver"));

// 8 - Listar a todos los personajes que tengan como profesion un dato enviado como como parámetro.

const showprofession2 = (profesion) =>{
    let profession= inhabitants.filter((inhabitant) => inhabitant.professions == profesion);
return profession; 
}

console.table(showprofession("Carpenter"));

