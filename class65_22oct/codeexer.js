
//1) Ejercicio 1 
const calcularPorcentaje = (num, por) =>{
    return num * por/100
}

//2) Ejercicio 2 
const restarPorcentaje = (num, por) =>{
    return num - calcularPorcentaje(num, por);
}

//3) Ejercicio 3 
const burlarse = (str) => {
    let reemplazo= str.replace((/a|e|o|u/gi), "i");

    return reemplazo;
}

//4) Ejercicio 4

const aHackerSpeak=(str) => {
    let rules =  [{from: "i", to: "1"}, {from: "e", to: "3"}, {from: "a", to: "4"}, {from: "s", to: "5"}, {from: "o", to: "0"}];

    for(let i = 0; rules.length > i; i++){
        str = str.replace((rules[i].from),(rules[i].to))
    }
    return str;
}

