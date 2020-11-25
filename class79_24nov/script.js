
// 1) -  Crear una funcióm crearUsuario que reciba como argumento un callback. La función debe pedir mediante un prompt ingresar el nombre de un usuario, y luego ejecutar el callback.

const crearUsuario = (callback) => {
    const user = prompt("Por favor, ingrese su nombre de usuario");
    console.log(user)
    callback();
}

const confirmarCreacion = () => alert("Usuario creado!"); // callback

//crearUsuario(confirmarCreacion);

// 2)-  Crear una función validarUsuario que reciba como argumento un callback validador. El callback debe ser una función que tome un string como argumento, haga alguna validación, y devuelva true o false si pasa dicha validación o no. La funci´ón validarUsuario, al ejecutarse, debe pedir mediante un prompt ingresar el nombre de un usuario, pasar dicho nombre como argumento del callback validador y en base a lo que el callback devuelva, mostrar un mensaje si el usuario ingresado es correcto o no.

// Ejemplos de validaciones (solo tiene que validar una de ellas):

// - que no tenga espacios
// - que tenga más de X caracteres
// - que no tenga números
// - que tenga mayúsculas

const validarUsuario = (callback) => {
    const user = prompt("Por favor, ingrese su nombre de usuario");
    callback(user);
}

const validador = (str) => {
    if (str.includes(" ") || str.length < 4) {
        alert("Datos erróneos");
    } else {
        alert("Usuario creado correctamente!")
    }
}
//validarUsuario(validador)

// 3)- Crear una función map que acepte un array y un callback y que:
// - por cada elemento del array ejecute el callback pasándole dicho elemento como argumento
// - obtenga el resultado
// - lo pushee a un nuevo array
// - devuelva el array final con el resultado de cada una de las llamadas al callback.

const numeros = [1, 2, 3]
const duplicar = (x) => x * 2

const map = (array, callback) => {
    let elementosMultiplicados = [];

    for (data of array) {
        elementosMultiplicados.push(callback(data));
    }
    console.log(elementosMultiplicados)
}
//map(numeros, duplicar) // [2, 4, 6]

// 4) - Crear una función filter que acepte un array y un callback y que:
// - por cada elemento del array ejecute el callback pasándole dicho elemento como argumento
// - si dicho callback devuelve true, pushea el elemento a un nuevo array
// - devuelva el array final con los elementos que pasaron el "filtro".


const numbers = [10, 2, 3, 40, 33, 50]
//const multiploDe10 = (x) => x % 10 === 0

const filter = (array, callback) => {
    let arrayNew = [];

    for (data of array) {
        if (callback(data) == true) {
            arrayNew.push(data)
        }
    }
    console.log(arrayNew)
}

//filter(numbers, multiploDe10) // [10, 40, 50]

// 5)- Crear una función every que acepte un array y un callback y que:
// - por cada elemento del array ejecute el callback pasándole dicho elemento como argumento
// - devuelva true si todas las llamadas al callback devolvieron true

// Ejemplo:

const numeros2 = [10, 2, 3, 40, 33, 50]
const multiploDe10 = (x) => x % 10 === 0
const esPositivo = (x) => x >= 0


const every = (array, callback) => {
    const arrayNew = [];

    for (data of array) {
        arrayNew.push(callback(data));
    }
    if (arrayNew.includes(false)) {
        console.log(false)
    } else {
        console.log(true)
    }
}

//every(numeros2, multiploDe10) // false
//every(numeros2, esPositivo) // true

// 6)- Crear una función some que acepte un array y un callback y que:
// - por cada elemento del array ejecute el callback pasándole dicho elemento como argumento
// - devuelva true si al menos una de las llamadas al callback devolvió true

const some = (array, callback) => {

}

some(numeros2, multiploDe10) // true
//some(numeros2, esPositivo) // true