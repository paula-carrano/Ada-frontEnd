const inhabitants = getInhabitants();

// 22 - Crear una función que a partir de un string, devuelva todos los habitantes que contienen dicho string en su nombre.
const showdata = (str) => {
    let nombre = inhabitants.filter(inhabitant => (inhabitant.name.includes(str)));
    return nombre
}
//console.table(showdata("power"))

const showdata2 = (str) => {

    for (inhabitant of inhabitants) {
        if (inhabitant.name.includes(str)) {
            //console.log(inhabitant);
        }
    }
}
//showdata2("alb");

// 23 -Crear una función que devuelva un objeto con una propiedad con todas las profesiones que se desarrollan en "Brastlewark" y otra con la cantidad de profesiones encontradas.

const showProfessions = () => {
    const profesiones = [];
    const profesion = {};

    for (inhabitant of inhabitants) {
        for (profession of inhabitant.professions) {
            if (!profesiones.includes(profession)) {
                profesiones.push(profession)
            }
        }
    }

    profesion.profesiones = profesiones;
    profesion.cantidadProfesiones = profesiones.length;

    return profesion;
}

//console.log(showProfessions())

// 24- Crear una funcion que devuelva el habitante con mayor volumen de "Brastlewark". Calculamos el volumen multiplicando el alto por el ancho.

const showVolumen = () => {
    let volumenMin = inhabitants[0].height * inhabitants[0].weight;
    let inhabitante =  inhabitants[0]
    let inhabitant = {}

    for (inhabitant of inhabitants) {
        let volumen = inhabitant.height * inhabitant.weight;
        if (volumenMin < volumen) {
            volumenMin = volumen
            inhabitante = inhabitante
        }
    }

    inhabitant.volumen = volumenMin;
    inhabitant.inhabitante = inhabitante;

    return inhabitant;
}

console.table(showVolumen());