// 1 - Crear una función obtenerMenor que tome como argumento un array de números (numeros) y devuelva el menor de ellos. Ejemplo:
const obtenerNumeroMenor = (numeros) => {
    let minValue = numeros[0];

    for (i = 0; i < numeros.length; i++) {
        let valor = numeros[i];
        if (minValue > valor) {
            minValue = valor
        }
    }
    return minValue
}

const obtenerNumeroMenor2 = (numeros) => {
    let minValue = Math.min(...numeros);
    return minValue
}

//console.log(obtenerNumeroMenor([5, 7, 99, 34, 54, 2, 12])); // 2

// 2-  Crear una función sumar que tome como argumento un array de números (numeros) y devuelva la suma de ellos. Ejemplo:

const sumarNumeros = (numeros) => {
    let sumar = 0;

    for (i = 0; i < numeros.length; i++) {
        sumar += numeros[i]
    }
    return sumar
}

//console.log(sumarNumeros([5, 7, 10, 12, 24])); // 58

// 3 - Crear una función contiene que tome como argumentos un número (numero) y un array de números (numeros) y devuelva true o false dependiendo de si dicho numero se encuentra en el array de numeros. Ejemplo:

const contiene = (numero, numeros) => {

    for (i = 0; i < numeros.length; i++) {
        if (numero !== numeros[i]) {
            return false
        }
        return true
    }
}

//console.log(contiene(15,[5, 7, 10, 12, 24])); // true

// 4 -Crear una función invertirCaso que tome como argumento un string string y devuelva un string donde cada letra tiene el caso invertido, es decir, cada letra está mayúscula si estaba en minúscula, y viceversa.

const invertirCaso = (string) => {
    for (let i = 0; i < string.length; i++) {
        const char = string.charAt(i);

        string =
            char === char.toLowerCase()
                ? string.replace(char, char.toUpperCase())
                : string.replace(char, char.toLowerCase());
    }
    return string;
};

//console.log(invertirCaso("jaVasCripT"));

// 5 -Crear una función separar que tome como argumento un string con emojis de perros y gatos y devuelva un string con los perros agrupados por un lado y los gatos por otro.

const perrosYGatos = "PGPGGPPPGPG"
// P = emoji de perro
// G = emoji de gato

let perros = ''
let gatos = ''

const separar = (string) => {
    let primerLetra = string[0] // P

    for (let letra of string) {
        if (letra === primerLetra) {
            perros += letra
        } else {
            gatos += letra
        }
    }

    return perros + gatos
}

//console.log(separar(perrosYGatos));

// 6 -Crear una función gano que tome como argumento un array tragamonedas con 5 símbolos y devuelva true si son iguales y false sino. Si el array tiene más de 5 símbolos, s´ólo debe comparar los 5 primeros.

const gano = (array) => {
    for (let i = 0; i < 4; i++) {
        if (array[i] !== array[i + 1]) return false;
    }
    return true;
};

//console.log(gano(["X", "X", "X", "O", "O"])); // false
//console.log(gano(["O", "O", "O", "O", "O"])); // true
//console.log(gano(["O", "O", "O", "O", "O", "X"])); // true


// 7 - Crear una función estanJuntos que tome como argumento un array de strings (personajes), y devuelva true si Sam se encuentra al lado de Frodo, ya sea antes o después, o false sino. Ejemplo:

const estanJuntos = (personajes) => {
    let sam = personajes.indexOf("Sam");

    if (personajes[sam] == 0) {
        return personajes[sam + 1] == "Frodo";
    }

    if (personajes[sam+1] == "Frodo" || personajes[sam-1] == "Frodo"){
        return true
    }
return false
}


console.log(estanJuntos(["Sam", "Frodo", "Legolas"])); //true
console.log(estanJuntos(["Aragorn", "Frodo", "Frodo"])); //false
console.log(estanJuntos(["Sam", "Orco", "Frodo"])); //false