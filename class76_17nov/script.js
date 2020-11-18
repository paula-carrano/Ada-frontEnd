// Hacer un programa que al iniciarse pida mediante un prompt ingresar un nombre, y una vez ingresado muestre un saludo con el nombre dentro de un h1. El h1 debe estar centrado y tener un tamaño de letra y una tipografía distinta de la que viene por defecto.

const saludo = () => {
    let nombre = prompt('Ingrese su nombre');
    let greeting = 'Bienvenido';
    let size = '40px';
    let estilo = 'verdana'
    let alineacion = 'center'

    document.getElementById("saludar").style.fontSize = size;
    document.getElementById("saludar").style.fontFamily = estilo;
    document.getElementById("saludar").style.textAlign = alineacion;

    document.getElementById('saludar').innerHTML = `${greeting}, ${nombre}`
}
//saludo();

// Hacer un programa que al iniciarse pida mediante un prompt ingresar un color en sistema hexadecimal, y una vez ingresado ponga el color de fondo del body con dicho color.

const cambiarColor = () => {
    let colorSelect = prompt("Ingrese su color en sistema hexágesimal");

    color.style.backgroundColor = colorSelect;
}

//cambiarColor();

// Hacer un programa que al iniciarse pida mediante tres prompts ingresar los valores correspondientes a un color en sistema rgb, y una vez ingresado ponga el color de fondo del body con dicho color. Los valores van del 0 al 255 y corresponden a rojo, verde y azul.

const cambiarColorRgb = () => {

    let red = parseInt(prompt('Ingrese un valor de 0 a 255 para rojo'));
    let green = parseInt(prompt('Ingrese un valor de 0 a 255 para verde'));
    let blue = parseInt(prompt('Ingrese un valor de 0 a 255 para azul'));

    if (red >= 0 && red <= 255) {
        red = red;
    } else {
        alert('Su número ingresado para rojo es incorrecto');
        return
    }

    if (green >= 0 && green <= 255) {
        green = green;
    } else {
        alert('Su número ingresado para verde es incorrecto');
        return
    }

    if (blue >= 0 && blue <= 255) {
        blue = blue;
    } else {
        alert('Su número ingresado para verde es incorrecto');
        return
    }

    color.style.backgroundColor = `rgb(${red}, ${green},${blue})`;
}

//cambiarColorRgb();

// Hacer un programa que al iniciarse pregunte mediante un prompt por un tamaño de imagen (siendo las opciones posibles chica, mediana y grande) y dependiendo de la opción elegida modifique el tamaño de una imagen (cualquiera) en el documento html. Por ejemplo:

const elegirImagen = () => {
    let seleccion = prompt("Ingrese el tamaño de imagen (chica, mediana ó grande)")
    let picture = document.getElementById('picture');
    let chica = '200px';
    let mediana = '500px';
    let grande = '800px'

    switch (seleccion) {
        case 'chica':
            picture.style.width = chica;
            break;
        case 'mediana':
            picture.style.width = mediana;
            break;
        case 'grande':
            picture.style.width = grande;
            break;
        default:
            alert('Opción no encontrada')
    }

}

//elegirImagen();
// Opción elegida	Ancho de imagen
// chica =>	    200px
// mediana =>	500px
// grande =>	800px