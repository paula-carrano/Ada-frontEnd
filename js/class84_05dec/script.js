/* 1- 
 Crear una función renderTableHead que reciba una tabla y un objeto y en bases a sus prop, renderice la cabecera de una tabla en pantalla.
 Crear una función renderImage que renderice una imagen en pantalla.
 Crear una función renderTableData que reciba un row y un objeto y renderice una fila de tabla en pantalla.
 Haciendo uso de las funciones anteriores, crear una tabla en pantalla que muestre los generos disponibles.
 Haciendo uso de las funciones anteriores, crear una tabla en pantalla que muestre las peliculas mas populares.
 Paginar donde sea necesario.
*/
const base = "https://api.themoviedb.org/3/";
const baseImg = "https://image.tmdb.org/t/p/w500/";
const apiKey = "0bce2b3619ac231ad6ce364b6d8015ab";


const table = document.createElement('table');
table.setAttribute('border', 1)
document.body.appendChild(table);


const renderTableHead = (object, tabla) => {
    const tHead = document.createElement('thead');
    const trHead = document.createElement('tr');
    for (obj in object) {
        const th = document.createElement('th');
        th.innerHTML = obj;
        trHead.appendChild(th);
    }

    tHead.appendChild(trHead);
    tabla.appendChild(tHead);
}
//renderTableHead(animal, table)

const renderImage = (parent, path) => {
    const imagen = document.createElement('img');
    imagen.src = path;
    parent.appendChild(imagen);
}
const div = document.createElement('div');
document.body.appendChild(div);

//renderImage(div, animal.img);


const renderTableRow = (tBody, object) => {
    const tr = document.createElement('tr');
    for (obj in object) {
        td = document.createElement('td');
        td.innerHTML = object[obj];
        tr.appendChild(td);
    }
    tBody.appendChild(tr);
}
//enderTableRow(tBody, animal)

const renderTable = (data, tabla) => {
    const tBody = document.createElement('tbody');
    renderTableHead(data[0], tabla);
    for (obj of data) {
        renderTableRow(tBody, obj);
    }
    tabla.appendChild(tBody);
}


fetch(`${base}genre/movie/list?api_key=${apiKey}`)
    .then(response => {
        return response.json();
    })
    .then(data => {
        renderTable(data.genres, table)
    })


fetch(`${base}movie/top_rated?api_key=${apiKey}`)
    .then(response => {
        return response.json();
    })
    .then(data => {
        renderTable(data.results, table)
    })