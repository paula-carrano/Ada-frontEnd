
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
    let reemplazo= str.replace((/a|e|o|u/gi), function(i){
        return "i";
    })
    return reemplazo;
}

//4) Ejercicio 4

