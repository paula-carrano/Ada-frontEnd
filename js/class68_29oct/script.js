// 1 - Crear una función multiplicar que tome como argumentos un número (multiplicador) y un array de números (numeros), y que devuelva un array donde cada elemento es el resultado del elemento del primer array (en la misma posición) multiplicado por el número ingresado. Ejemplo:
const multiplicar = (multiplicador, numeros) => {
    let numModificados = [];

    for (i = 0; i < numeros.length; i++) {
        let result = multiplicador * numeros[i];
        numModificados.push(result);
    }
    return numModificados;
}

//console.log(multiplicar(2, [5, 7, 15, 22, 40])); // [10, 14, 30, 44, 80]
//console.log(multiplicar(10, [2, 5, 77])); // [20, 50, 770]

//2- Crear una función filtrarPorLongitud que tome como argumentos un número (longitud) y un array de strings (palabras) y que devuelva un array con las palabras que tengan una cantidad de letras mayor a longitud. Ejemplo:

const filtrarPorLongitudMayorA = (longitud, palabras) =>{
    const result = palabras.filter(palabra => palabra.length > longitud);
    return result;
}

/*console.log(filtrarPorLongitudMayorA(4, [
    "dia",
    "remolacha",
    "azul",
    "sorpresa",
    "te",
    "verde",
])); //['remolacha', 'sorpresa', 'verde'] */


// 3- Crear una función recortar que tome como argumentos un número (cantidadLetras) y un array de strings (palabras) y devuelva un array con las mismas palabras pero recortadas. Las palabras se recortan dejando cantidadLetras letras al iniciando, y recortando las demás. Por ejemplo, elefante recortada a 4 letras queda elef.

const recortar = (cantidadLetras, palabras) => {

    let palabrasrecortadas = palabras.map(word => {
        let palabracortada = "";

        for (i=0; i<cantidadLetras; i++){
            palabracortada += word[i];
        }
        return palabracortada
    })

    return palabrasrecortadas
}


//console.log(recortar(4, ["elefante", "dinosaurio", "chocolate", "avion", "america"])); // ['elef', 'dino' 'chocolate', 'avio', 'amer']
//console.log(recortar(1, ["algoritmo", "bug", "compilador"])); // ['a', 'b', 'c']

// 4- Crear una función sonIguales(a, b) que tome como argumentos dos arrays a y b y devuelva true si ambos arrays tienen los mismos valores en la misma posición, o false sino.

const sonIguales = (a,b) =>{

    for(i=0; i<a.length; i++){
        if (a[i] !== b[i]){
            return false
        }
        return true
    }    
}

//console.log(sonIguales([10, 25, 6, 33, 48, 105], [10, 25, 6, 33, 48, 105])); // true
//console.log(sonIguales([10, 25, 6, 33, 48, 105], [11, 25, 6, 33, 48, 105])); // false
//console.log(sonIguales([10, 25, 6, 33, 48, 105], [25, 10, 6, 33, 48, 105])); // false 



// 5- Crear una función obtenerResultado que tome como argumentos dos strings jugadoraA y jugadoraB con los nombres de cada jugadora respectivamente, y dos arrays de numeros puntajesA y puntajesB de la misma longitud. La función debe devolver un string con el nombre de la ganadora o Empate en caso de que no haya ninguna. Para eso, debe comparar las mismas posiciones de cada array de puntajes, y sumar puntos a la jugadora correspondiente dependiendo de quien tenga el puntaje más alto. Por ejemplo:

const scoreA = [3, 5, 2];
const scoreB = [4, 6, 2];

const obtenerResultado = (playerA, playerB, scoreA, scoreB) => {

}

// puntajesA[0] vs. puntajesB[0] -> Gana B
// puntajesA[1] vs. puntajesB[1] -> Gana B
// puntajesA[2] vs. puntajesB[2] -> Empate

// Resultado final: Gana Jugadora B
console.log(obtenerResultado("Ada", "Grace", [4, 4, 4], [1, 2, 3])); // Ada
console.log(obtenerResultado("Ada", "Grace", [3, 5, 5, 7], [4, 1, 2, 9])); // Empate
console.log(obtenerResultado("Ada", "Grace", [5, 6, 3, 1, 8], [8, 2, 4, 2, 3])); // Grace

/*// 6- Crear una función jugarPiedraPapelTijeras que tome como argumentos dos strings jugadoraA y jugadoraB con los nombres de cada jugadora respectivamente, y dos arrays de strings jugadasA y jugadasB con jugadas de Piedra, Papel o Tijera, de la misma longitud. La función debe devolver un string con el nombre de la ganadora o Empate en caso de que no haya ninguna. Para eso, debe comparar las mismas posiciones de cada array de jugadas, y sumar puntos a la jugadora correspondiente. Por ejemplo:

const jugadasA = ["piedra", "piedra", "tijera"];
const jugadasB = ["papel", "tijera", "tijera"];

// jugadasA[0] vs. jugadasB[0] -> Gana B
// jugadasA[1] vs. jugadasB[1] -> Gana A
// jugadasA[2] vs. jugadasB[2] -> Empate

// Resultado final: Empate

jugarPiedraPapelTijeras("Ada", "Grace", ["tijera"], ["piedra"]); // Grace
jugarPiedraPapelTijeras("Ada", "Grace", ["papel"], ["papel"]); // Empate
jugarPiedraPapelTijeras(
  "Ada",
  "Grace",
  ["piedra", "papel", "papel", "piedra", "tijera"],
  ["papel", "piedra", "tijera", "tijera", "papel"]
); // Ada*/