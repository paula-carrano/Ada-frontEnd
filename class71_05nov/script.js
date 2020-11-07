const inhabitants = getInhabitants();

// 14 Mostrar en pantalla al/los personajes mas enanos de "Brastlewark"

const masBajos = () => {
    let valorMin = inhabitants[0].height

    for (i = 0; i < inhabitants.length; i++) {
        let altura = inhabitants[i].height
        if (valorMin > altura) {
            valorMin = altura
        }
    }
    //console.log(valorMin)
}
//masBajos();


// 15 Crear una funcion que devuelva los personajes por ID en base a un rango numerico.

const personajesId = (num1, num2) => {
    let array = [];
    for (i = 0; i < inhabitants.length; i++) {
        let rangoId = inhabitants[i].id
        if (rangoId >= num1 && rangoId <= num2) {
            array.push(inhabitants[i])
        }
    }
    //return array

}
//console.table   (personajesId(2,5))


// 16 Crear una funcion que devuelva una lista de los habitantes de "Brastlewark" por el color de pelo.

const colorPelo = (color) => {
    let pelo = inhabitants.filter((inhabitant) => inhabitant.hair_color == color);

    return pelo;
}

//console.table(colorPelo('Black'))

// 17 Crear una funcion que devuelva una lista de los habitantes de "Brastlewark" en base a una propiedad
// y un valor enviados como parámetros.

const showProperty = (prop, valor) => {
    let property = inhabitants.filter((inhabitant) => inhabitant[prop] == valor);

    return property;
}

/*console.table(showProperty('age', 306))
console.table(showProperty('weight', 39.065952))
console.table(showProperty('professions', "Metalworker"))*/

// 18 - Crear una funcion que devuelva al mas alto, al mas bajo, al mas anciano, al mas joven o al mas ancho de "Brastlewark".

const habitante = (caracteristica) => {
    let resultado = {};

    switch (caracteristica) {
        case 'alto':
            resultado = getMax('height')
            return resultado;
        case 'bajo':
            resultado = getMin('height')
            return resultado;
        case 'anciano':
            resultado = getMax('age')
            return resultado;
        case 'joven':
            resultado = getMin('age')
            return resultado;
        case 'ancho':
            resultado = getMax('weight')
            return resultado;
        default:
            console.log("No existen valores")
    }
}

const getMax = (prop) =>{
    let valorMax = inhabitants[0][prop]
    let inhabitat =  inhabitants[0]

    for (i = 0; i < inhabitants.length; i++) {
        let value = inhabitants[i][prop]
        if (value> valorMax) {
             valorMax = value
             inhabitat = inhabitants[i]
        }
    }
    return inhabitat
}

const getMin = (prop) => {
    let valorMin = inhabitants[0][prop]
    let inhabitat =  inhabitants[0]

    for (i = 0; i < inhabitants.length; i++) {
        let value = inhabitants[i][prop]
        if (valorMin > value) {
            valorMin = value
            inhabitat = inhabitants[i]
        }
    }
    return inhabitat
}

//console.table(habitante('alto'));
//console.table(habitante('joven'));
//console.table(habitante('ancho'));

// 19 - Mostrar una tabla con "Fizwood Mysttink" y todos sus amigos.

const showFriends = () => {
    let fizwood = inhabitants.filter(inhabitant => inhabitant.name === "Fizwood Mysttink")[0];  //trae el objeto y no el array porque le ponemos indice [0]  

    let nombreFriends = fizwood.friends;
    let friends = [];
    
    
    for(i=0; i< nombreFriends.length; i++){
        friends[i] =  inhabitants.filter(inhabitant => inhabitant.name === nombreFriends[i])[0]            
    }

    friends.unshift(fizwood);
    console.table(friends)
}
showFriends();

// 20 - Listar a todos los personajes que tengan como profesión "Woodcarver".

const showprofession = (profesion) => {
    let woodcarver = inhabitants.filter((inhabitant) => inhabitant.professions == profesion);
    return woodcarver;
}

//console.table(showprofession("Woodcarver"));

// 21 - Listar a todos los personajes que tengan como profesion un dato enviado como como parámetro.

const showprofession2 = (profesion) => {
    let profession = inhabitants.filter((inhabitant) => inhabitant.professions == profesion);
    return profession;
}

//console.table(showprofession("Carpenter"));

