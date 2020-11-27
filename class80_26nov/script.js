// Crear una función find que acepte un array y un callback y que:
// - por cada elemento del array ejecute el callback pasándole dicho elemento como argumento
// - devuelva el elemento pasado como argumento del primer callback que devuelva true
// - si ningún callback devuelve true, devuelva undefined

const find = (array, callback) => {
    let auxiliar = [];
    for (element of array) {
        if (callback(element)) {
            auxiliar.push(element);
        }
    }
    if (auxiliar.length === 0) {
        return undefined;
    }
    return auxiliar[0];
}

// const numeros = [8, 2, 3, 40, 33, 50]
// const multiploDe10 = (x) => x % 10 === 0
// find(numeros, multiploDe10) // 40

// Crear una función findIndex que acepte un array y un callback y que:
// - por cada elemento del array ejecute el callback pasándole dicho elemento como argumento
// - devuelva el índice del elemento pasado como argumento del primer callback que devuelva true
// - si ningún callback devuelve true, devuelva undefined

const findIndex = (array, callback) => {
    let auxiliar = [];
    for (element of array) {
        if (callback(element)) {
            let indice = array.indexOf(element);
            auxiliar.push(indice);
        }
    }
    if (auxiliar.length === 0) {
        return undefined;
    }
    return auxiliar[0];
}

// const numeros = [8, 2, 3, 40, 33, 50]
// const multiploDe10 = (x) => x % 10 === 0
// findIndex(numeros, multiploDe10) // 3

  
// Crear una función dropWhile que acepte un array y un callback y que:
// - por cada elemento del array ejecute el callback pasándole dicho elemento como argumento
// - devuelva un array con los elementos a partir del primer callback que devolvió false

// (Es decir, crea un nuevo array y va recorriendo elemento por elemento, mientras el callback de true, no los agrega,
// cuando el callback da false por primera vez agrega todos los elementos restantes a partir de dicho elemento inclusive)

const dropWhile = (array, callback) => {
    for (element of array) {
        if (!callback(element)) {
            let falso = array.indexOf(element);
            return array.slice(falso);
        }
    }
}

// const numeros = [40, 33, 50, 8, 2, 3, 20]
// const multiploDe10 = (x) => x % 10 === 0
// dropWhile(numeros, multiploDe10) // [33, 50, 8, 2, 3, 20]

// Crear una función takeWhile que acepte un array y un callback y que:
// - por cada elemento del array ejecute el callback pasándole dicho elemento como argumento
// - devuelva un array con los elementos hasta el primer callback que devolvió false

const takeWhile = (array, callback) => {
    for (element of array) {
        if (!callback(element)) {
            let falso = array.indexOf(element);
            return array.slice(0, falso);
        }
    }    
}

// (Inverso del dropWhile)
// const numeros = [40, 50, 33, 8, 2, 3, 20]
// const multiploDe10 = (x) => x % 10 === 0
// takeWhile(numeros, multiploDe10) // [40, 50]