// Hacer un programa que al iniciarse pregunte mediante un prompt por un temperatura, y con ese dato modifique un h1 en el html, de forma tal que diga, por ejemplo, Temperatura actual: 20°. Cambiar el color del h1 dependiendo de la temperatura ingresada, siguiendo las siguientes reglas:

const obtenerTemperatura = () => {
    const temp = parseInt(prompt("Ingrese la temperatura"));
    const texto = document.createTextNode(temp)
    const h1 = document.createElement('h1')

    if (temp < 0) {
        h1.style.color = 'blue'
    }
    if (temp >= 0 && temp < 15) {
        h1.style.color = 'lightblue'
    }
    if (temp >= 15 && temp < 25) {
        h1.style.color = 'green'
    }
    if (temp >= 25 && temp < 30) {
        h1.style.color = 'yellow'
    }
    if (temp >= 30 && temp < 35) {
        h1.style.color = 'orange'
    }
    if (temp > 35) {
        h1.style.color = 'red'
    }
    h1.appendChild(texto);
    document.body.appendChild(h1)
}
// Temperatura	Color
// Menor a 0°	                        => Azul
// Mayor o igual a 0° y menor a 15°	    => Celeste
// Mayor o igual a 15° y menor a 25°	=> Verde
// Mayor o igual a 25° y menor a 30°	=> Amarillo
// Mayor o igual a 30° y menor a 35°	=> Naranja
// Mayor a 35°                          => Rojo
//obtenerTemperatura();

// Crear una barra de progreso con dos divs anidados. 
//Hacer un programa que al iniciarse pregunte mediante un prompt por un porcentaje de progreso y 
//modifique el ancho de la barra de progreso respectivamente 
//(si se ingresa 75 la barra de progreso tiene que ocupar el 75% de la barra contenedora)

const loading = () => {
    const contenedor = document.createElement('div');
    const barra = document.createElement('div');
    const porcentaje = parseInt(prompt('Ingrese porcentaje deseado:'));

    barra.style.backgroundColor = 'red';
    barra.style.height = '20px'
    barra.style.width = `${porcentaje}%`;
    contenedor.style.backgroundColor = 'lightgrey';

    document.body.appendChild(contenedor);
    contenedor.appendChild(barra);
}

//loading();

// En un documento html hacer un post de una red social que contenga:

// un h3 con la usuaria
// un p con un lorem ipsum
// 3 spans de reacciones con un ícono (por ejemplo Me gusta, Me encanta, Me asombra) más un número con la cantidad
// Dar estilos para que

// la tipografía sea distinta a la default
// los spans estén en línea, separados con márgenes, tengan un color de fondo gris suave y un border radius
// Hacer un programa que al iniciarse pregunte mediante tres prompts por la cantidad de cada una de las reacciones y actualice los valores de los spans correspondientes

const redSocial = () => {
    const user = prompt("Ingrese su usuario");
    const reacLike = parseInt(prompt("Ingrese cantidad de likes"));
    const reacLove = parseInt(prompt("Ingrese cantidad de love it"));
    const reacAw = parseInt(prompt("Ingrese cantidad de Awesome"));

    const h3 = document.createElement("h3");
    const p = document.createElement("p");
    const div = document.createElement("div");
    const spanLike = document.createElement("span");
    const spanLove = document.createElement("span");
    const spanAwesome = document.createElement("span");

    const textoUser = document.createTextNode(`Nombre de usuario: ${user}`);
    const textoP = document.createTextNode("Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab, sapiente! Ex aspernatur officiis quaerat, voluptatum quas exercitationem ducimus, vitae nam autem, numquam voluptate dolores magni quam doloribus cum aut corrupti!");
    const textlike = document.createTextNode(reacLike);
    const textlove = document.createTextNode(reacLove);
    const textAsw = document.createTextNode(reacAw);

    document.body.style.fontFamily = "Verdana";
    document.body.appendChild(h3);
    h3.appendChild(textoUser);
    document.body.appendChild(p);
    p.appendChild(textoP);
    document.body.appendChild(div);

    div.appendChild(spanLike);
    spanLike.style.margin = "3px";
    spanLike.style.color = "blue";
    spanLike.style.backgroundColor = "lightgrey";
    spanLike.style.borderRadius = "1px";
    spanLike.innerHTML = ('<i class="fas fa-thumbs-up"></i> ');
    spanLike.appendChild(textlike);

    div.appendChild(spanLove);
    spanLove.style.margin = "2px";
    spanLove.style.color = "red";
    spanLove.style.backgroundColor = "lightgrey";
    spanLove.style.borderRadius = "5px";
    spanLove.innerHTML = ('<i class="fas fa-heart"></i> ')
    spanLove.appendChild(textlove);

    div.appendChild(spanAwesome);
    spanAwesome.style.margin = "5px";
    spanAwesome.style.color = "green";
    spanAwesome.style.backgroundColor = "lightgrey";
    spanAwesome.style.borderRadius = "2px";
    spanAwesome.innerHTML = ('<i class="far fa-surprise"></i> ')
    spanAwesome.appendChild(textAsw);
}

//redSocial();

// Hacer un programa que al iniciarse pregunte mediante prompts por
// - un título
// - una url de una imagen
// - una url a un artículo

// Utilizar esos datos para completar en el html una card que tenga
// - una imagen, con la url de la imagen ingresada
// - un título, con el texto del título ingresado
// - un link que diga Leer más, con la url al artículo ingresado

// Dar algunos estilos mínimos a la card:
// - centrarla con respecto a la pantalla x 
// - agregarle un borde x
// - agregarle un sombreado x
// - cambiarle la tipografía x
// - cambiarle los tamaños de fuente x 
// - cambiarle los colores por defecto

const getCard = () => {
    const title = prompt("Ingrese un titulo");
    const image = prompt("Ingrese la URL de su imagen");
    const article = prompt("Ingrese la URL de su articulo");

    const contenedor = document.createElement("div");
    const card = document.createElement("div");

    document.body.appendChild(contenedor);
    contenedor.style.padding = "10px";
    contenedor.style.display = "flex";
    contenedor.style.justifyContent = "center";
    contenedor.style.alignItems = "center";
    contenedor.appendChild(card)

    card.style.border = "2px double #4C00B4";
    card.style.backgroundColor = "#FEFAC4";
    card.style.margin = "1rem";
    card.style.padding = "2rem";
    card.style.width = "60%";
    card.style.textAlign = "center";
    card.style.fontFamily = "verdana";

    const img = document.createElement("img");
    img.setAttribute("src", `${image}`);
    img.style.boxShadow = "5px 2px 2px #0ABDAF";
    img.style.marginTop = "5 px";
    card.appendChild(img);

    const titulo = document.createElement("h2");
    const tt = document.createTextNode(`Titulo: ${title}`);
    titulo.style.textShadow = "2px 2px grey";
    titulo.style.fontSize = "30px";
    titulo.style.color = "#282A2A";
    titulo.appendChild(tt);
    card.appendChild(titulo)

    const leerMas = document.createElement("a");
    const link = document.createTextNode("leer más");
    leerMas.setAttribute("target", "_blank");
    leerMas.setAttribute("href", `${article}`);
    leerMas.append(link);
    leerMas.style.color = "#7800B4";
    leerMas.style.marginBottom = "3px";
    card.appendChild(leerMas);
}
//getCard();

// En un documento html agregar al menos tres imágenes de distintos animales, una por cada animal. 
//Hacer un programa que al iniciarse pregunte mediante un prompt por un animal (indicando en el mensaje las opciones disponibles) 
//y muestre solamente la imagen del animal elegido.

const showAnimal = () => {
    const selectAnimal = prompt("Ingrese su animal favorito entre: mono, jirafa, perro, gato");
    const image = document.createElement("img");
    const contenedor = document.createElement("div");

    switch (selectAnimal) {
        case "mono":
            image.setAttribute("src", "data:image/jpeg;base64,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")
            break;
        case "jirafa":
            image.setAttribute("src", "https://static.wikia.nocookie.net/reinoanimalia/images/4/49/Jirafa_wiki.png/revision/latest/top-crop/width/360/height/450?cb=20130303115917&path-prefix=es")
            break;
        case "perro":
            image.setAttribute("src", "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxMSEhUQEBIVFRAVFQ8QFRUVFQ8VFRAPFRUWFhUVFRUYHSggGBolHRUVITEhJSkrLi4uFx8zODMtOCgtLisBCgoKDg0OFxAQGi0lHyUtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLf/AABEIAKgBLAMBIgACEQEDEQH/xAAcAAABBQEBAQAAAAAAAAAAAAADAQIEBQYABwj/xAA6EAABAwMCAwYEBQIGAwEAAAABAAIRAwQhEjEFQVETFCJhcYEGMpGhQrHB0fAH4RUjUlNi8TNykiT/xAAZAQADAQEBAAAAAAAAAAAAAAAAAQIDBAX/xAAhEQACAgIDAQEAAwAAAAAAAAAAAQIREiEDMUETUQQigf/aAAwDAQACEQMRAD8A2ffPNOF55rJ/4giNv1eSIpmsbeIjbtZVl+jsvkskOjTi6XC6WfZepe+IyQUX5uknelQd9Sd880ZIKNB3td3tZ/vqTvqdoVGh72k72s8b5N78i0FGj72u72s535d31FoKZpBdpe9rONvE4XaLQUzQ97Xd7Wf72V3e0Wgo0He13e1nu+Lu+FFodM0Bu0w3ioTeITrwoyQJF+6880F995qgdeqPUvCs5ciLUGaJ1/5qO/iHms5UvCgOuyspcxquM0rr/wA0B195rPm7KQ3SwlzGi4y6feqO+981UPulHfcrN8xeBbVL3zQKl/5qoqXCA+ul9WJxRZ1LtR33Sr3VkF1dGbET3XSjvvFBfWUd9ZFsTZMq3UqI6so76qEaiWyGzdtKe1yY1FYFp9i/mPYSjsJTWNRWtS+w/mPbUKd2hSAJYR9hfM4PKXUVwCWEfYPmJKWVwCWFX3F8xAnALmhEaE/sL5jdK4NRQ1EbTR9g+YJrEQMR6dGeSvOHcJac1PpkFXGbl0JwSM9oT2W7nfK0n0BK1Q4XRaZAPoSCPop9Ly2+ytX6LFGL/wANq/7b/wD5co9a1e35muHqCF6A89NkQAEQcp/6KjzNyC8r0h/DKMz2bZ3wAM+iqeNcAY8TThrxsNgfLyUSUqKVGFqPUao9GvWOYS14II5EEKtq1Vyy5GbqKH1KiA6qgVayjPrKMmGkTjVQ3V1CNdCfWUhZMfXUd9dRKlZR3VkUJyJrq6G6soRqpC9VRDZJdVQ3VUBz0Nz1aRNhX1EB701zkMuVJEtiucmykJTUyT0ViOwIFNSaa5jtJDAiBMYngqWMekXApUgFBSykAT4QA0JwSQlTEOCI1DaURiLEGYFPt7SW6yQ1vUyodIIPEbnW7s5ho+8clpBJ9hVlwb6nSEsydtWPsj/4sGgFxEnOd1mramXOjkNhyCPe1yHU6M5cdTz0ptEwfX9V0qTSJcUaKlfFx2Mn1wre1aTuRPMLMV+MU7Wk6tUIAaJJPIbACMkk4ACovhj4wqXV2GsaQHAkB2k+AGCTpJiPPK2itGT7PR3NcD7hHprnUyW+aBxCm/szo+cAx5noqqibskOOJ5KHUuMlvNed/Df9Q3m87lXYRL6jNnTTcJgPBHONwTEj22d5xBgq0hIh+pvuMx+aiboqKFr1Kbv/ACsa5zebmgwD0nksZ8ZcMayKtMeFxh0R4Xei1PEnNaYO+R6ghUXHxNvIJBBaCJMHEfsuabvTNa1ZgqjUB1NWTqCYbdZElcaaE6mrU26G62TEU9Smo76aun2yA61VCZU6Cu0lWRtU02yZJWuahlWTrZCdbKrJaK4phCnOtkw26LJIcJQFI7Bd2CMgo3bFJplRmKRTKxOmyQ0p8oYKe1IeQ9pTwmtT2qaDIcE8NSNRAE6DIbpXaUWE7QigsCAiMCfoTgEUFhrbBBVV8T25YBUaPCfm9Va0ke9p9pScw9D9lUeqHF7RS/DTS6XEy0ZVTZXTri+cN2gP2/CCf7BaThFnppNojBfv5M/Efpj3VTw2iKV3WkBo3HpK2/EU32Wt18P06o7Oq3tAY35H8grr4S+Gbe0c40WAOdGo843iVEs+IMaC6Zcdt8K3saxazUdzmf1yuqFdI5p36WnEOMUKDQatQNB2k7+yj8O+JLeuS2nUBI/Dz9gvBvjniN0LpznaSwHBJB8M9J29Oqr/AIe4xcmtTfTdTEPbIA8e/SZ99lrWjM+javCaXa9sGN7Qj5oEkeu6xv8AVC3LKVvVpeEsrEGP+dN4z7raCrroh0+INB+yy3xfUL7aSMtqUXcvEWvC5+XqjXje0yO67dWoUKzRJcNDj0I3Kr+MOmKY2G/mVY/DdPw1KOwJ7amOY1b49VV1G5M7/quNm0n4Vvd0ht1YaV2lSQV/d002ysdKQtRYFW61QnWiuNKaWJ2BSutEM2iuzTTDSTsVFI6zQn2a0HYpjrdFiozj7NBfaLSutkB9qnYsTOm0Te6rQOtUzuqLCh9Nyk0yoNNTKQUsLJLUVoQmI7ApHY9oRAEjQngIGc0IrExoRGJWFhWtRQ1DYitTsYmhdpREkIsBaYUpoMHTE8p2QGBTbdslUguiXwGwgmpUOqod+gHIAdFQ/EtlorGo0CHb75WvDdDI5qj4yO0Hou75f0r0yU3lZla1aAagAjcg8gNz5K2PE2vpMeCIgZEiPoqy5pjs30h8zsE7yOg8l57d3Fa1qGkx8McYIOQ1ry/xwehj2S4XtorkXTLz4payqSXBmkRl2I57lUfAadLWND2EguJIIDg2fPPNSeIcEfV+ck7QOXTEY5qBwLgpa4POI39ea0vRr8JJ0e68M4gwUg3WPHFNu3iJGY9AlurN1b/KdAaDHP8AJY74Q4cDVqOcXODNGkEnwlw1Ob7EwvR7Nn4iof8AZ0ZNYFVxvhHZsZUpEh1MRIPij339Cs3cPDnF0RP5816PcURUYWnmDHkeS84rsIcQdwSFh/IjTtChK9AoSaUQNS6VzGgHSu0ohCSErAEQmkIpCYQnYDNKbpRISEIsQ2FxCUppKLGI4IRankppKdgCc1DLUYoZRYEOnSUljEVlNHDEGYOmxGYmFKxyQEloRGhCYihFBYoCcEgaiBimgsIwIjUwBOQOx65DBXEphZIYrbhbASqJtRXfCdi5b8CuaFN6LK5dOFU3mMIz6syZ5qBcVsQQvQk9GUTNcVfB855LMfE1oKje3HzMyWjJ856BaHjzsExjl1J5AKhsg8OfJziZ2M9R05LkyxlZ01aou/ge8bWoim8tNRgmOfZE4B9MCfMJ97aMpPJdikHOqOPQbx9YWbq8HHadvZ1XW9VsyASIJ5EbEHHkVe8D4G+rUbVvrl1cN8QpjS2m4iD4g0AFbOcX6bR52l1s1/wXaHu7XubD3lzif9Q1GD7rXUWwFTcNu9WQIbgAD8I6K3ZVTi14ccr9JtNYf4jpRXdgZg/VbakVnviyxOoVQMQGnyPJTzxuBKezMtalLUZrUyo1eea2BLUwtRYSaEgQLSkLEcMT+zTooiFiaWqYaaG6mgREcEJylPaguagCOUsIhauASBAyxD0KUEvZpjItJFlRwnF6Vk0OcU0OSAyu0FKySVScpFLKhU1IpvTsCcxqIGoFJ6KHIsAoCG8pZQ3pNgJrTpUeU9hSTAICrO0reBwG6qpUi2q7jquj+O6mhS6J1LUGSNzn0UKu15nP5Kc1/gGfyQK7SRggBejNGcWZuvSc52t2WtkNjqcF0fkj2fD2uBMyd/OJRy4A6SduW2Ej2AEOaYyJjGNlzSijoi2ht9w3SZA3AEx5z+UptrTcwgNGJ+k81o7Ssxw0v/nmq7jTuzho+Y8/+PJZOGzRS0WFjidPXI81eW9QLF8Pv3UzLiIwTtsr+y4iypgOk+UraDRjJM0ttWB+XkpFemHsLXCQQqy1dGc/uprK/PYea6F0ZMxNenpcWnkSEJxROJVg6o4jYkqPrXmSpNmqOIStCbqS61BSCAJShh6a6oixhU1wQtaXWnYA6oQHNRqjkyEgsFoTX01KDUhYmkFkJOlLVCYHKRjWsTjRQ21VJa5OhaGUqCkm1wlplSNWFSWidEWlaovdVIt3KWYSx0CIDaCM2gnvelpuSUQ0K2gm1LdSWOTK1aE2kIgG3T20EUVE8PCmMUVoiPppGtIOFIDhKOxoK0gndoHR1NpLBsozqL3mNUN8oEotavpwPRSbWmD6r05swiV/EbRsANgn3k+6z91UfTnoNpC3rbEHcSV538aXjqdUUiMEbrGXRrE0nCW6w1wOCAU34nrhtRjZ/CP5KrPh7ibadMajkSfY8kS2s3X9XtnHTRmAPxPH6BTWh+kK0D7h5a0SwEAO6n0Ww4XwA0xOs6uYOQfYqy4VwplMDSAFPq+SFD9ByOt2QBH2S39XTScT0j6odsc7qJ8R1oYGD8W/stG6i2ZNbM0Wob0cBDqhec0aojucnMynCiispqcWMbCESpb2qOaeUOLDQ1qe1spoEI9NUkFkeoyElNSKyHRCMRHOwhGopdZuFHFOVWLFZEqShwrB9MQgQFOIMgO3UmjUCrngynuYRkIsRZmsEouMKJbMndHr0gEWGw1O4hS6VxKpKktzBMkD6q5sqCE2FM4mSjAYTnUwplCiHBNKydkTUUlWkSFMewNMLnEbJ432BWdkQEKo4jZXFWkCFH7IJY0BVU3klS+1IS3BawEgSeigWtZ7zqfgch5JrQw13Wg/dTuF1Pb6BVPFKwEHlsVM4c6CC2PXku9SyimTHTNhZZC81/q5R7OpReNnhw92kfv9l6Pwx2FlP6t8IfVoU6zBLaTna+oa+AD6SPulLopdnmvDHvr1BSBOnnHMdF6lwZ/ZMDIgAABeZcJIouB6rVUeODGo46rFzpmyjo21Hiv2TrnimRjBjZYywvWuf4XdcfqEajx7tX6acEDHT3ARGT9Jkvw2tjch2VWfENzLwOgRuGMgajtEqlvXzLyQBkkkgADzJ2T5ZPGjKtisejuAhV/adNxui0a3VcyY9khqfMRPMwPWJ/RCNYcim1oe0AzgtcIJBDmmRkJ2BJc2QgPwnPuIx12Qaj5TbQbAa8ozXLm0Y3Qhf050NMnmotLsYtSoU6iDuhXdTGF1hW1N80XsPQ9WpmFDZcFoOrrj0RH1ElekCJTsYB19OEgqJjbMkTETlBNIpCJVJkgY6+xRadsT6KLTu/GKbJOskCNhiZPRT7CtpDg87SnS9LG0LaNzA6ogti50TMZRKdxLdQALcf2RLZxc7U3bc/8Ar/MIxQm0SKNsII5/sjUqWZ5KPQugHx6+xTO+kPLR0n7p2kBLrUSdt0K2Y8HyTKHE5qCnoJwXFwIgeR8/3CddXJpuGQQ7Azsf5+iHS2INUYSQZUetVM4TLekWy9zydRgDkB0Q6t20P0nBdOf+UCPzSl0FEoh0Ayg3DyNtyhNuZDgTMTEZ04nKiU+ItNRoJ+aQPMgwkFB+zc3J/wCkEZaXpK97IcZBMuxj5ZyfTdVvf9LH+LIMAISAsLy310jO8Sqrg3Ei0aHbgx9EJnxAwNIeYPL0UK0uGdsM+Hc/p9SQPddnDqOyHpno/CL+Y9lrGMbUYWPAcxwLXA7FpEEFYj4eAcQYW2oY2WqGzwT4lshQuKtt/oeQ0nct3b9oVQwVNuS9C/qb8LVKt4Lik5oFRjNQcSIc3wyOuAFnaHw/pgOqhxLgfDOzQZydh5+i5J0pGiegXeBQoiP/AC1ZG3y0+Z99lO+FaI1jz29eiqnWzq7yY+XwjYANHIEq94V/+cy7GkMLm5n5gJA54Mq3UUJM3dw4tokdcBZy/odpTNIgwY1eTZn64/nOwu+MNrNpGgZDgcASZidusiI6goXD3kODahy6SdoxE58hA9lPI02QiAyqGk6hAxvgSTAH1gKbSoahLdio/HLRteo1m7WxWlp/28tPpKlMvNMtaMA49I/dY6Q0gTLQNgTnP0lEaAM8lBqXZguzM+w5IlKoQHN6TPOZEj+eRU5oKJbHgOGJ5/8AS65YdQIy37ZTODuIdqqDwtAad+eQQTyUS4unA1RB0Fz9MbnT4cepBTyVbBIk3dQkRmNp6nzVdRtm6tZwVNFQGGgnVpGD5QeaW9ptadZ5gEAbQY/nspbTQ62R7p8DGVI4dSmmXg5iY6jyULsyC5xZ/lBurO59uibZ3XY0wwN0+AmDnS2JE/l6qc0h67CVHF06eW30kpjLrQPF7qXZU5AIMOgnxQMnKHxOzIbEAyTDmxEASD9Mpp2h1ohPuOzHhJMycmdz+SHSrYBc7STmCDkdUhtxD2sEuD2sAJEhvNx6yZRaQbAgA9ZGx6DyiFSaYmdSYafiGHQ/keew8z/dWNe1OknUCXjExMQYB++3QrlyqgDW1AtpkiJcASDsWkx7QmWN0GNdyIFZs+ZY6D6Z+q5co5JOPQkiDw2q6rqeZbPlsQTP0iER1QyGMyW6Q5zh4XBwcuXIj4Hg5+lo1NcA50A5IadOMTmJjdOtP8wPE4DWDy0u+ZzT1B/RcuSb2gX4TG13BjWggkTJMQXN2+uFGqWwLw6RPikb7l2fL8JXLlGbpMKOteHlow7Lg1055TMmP1yor+FEvD4DfE3SMgOAyQekx991y5aLSQLaIde2d2j2tn5Wzv8AKWCRPvM9VUvpOknT4Q5up3i5yNuuy5cnBtNgonf4cHscKktfO0E7DxR9vqotOxcHMpMbBLg44OdOYnyElKuWykwaVnp/AKYpUxUeYMDflIVo3jzNRYD4px9ea5ctJ8rVJAlZn+PX/eIaWxpa/MzucD0/ZZg2rzUbJIEuB6Eav2XLlzSbltiaom6CxzhADyNTXbgbgA9ZH5KTSte1aalTBHhA6ANAA+uUi5S1k6Y+xbW1AhrXEaTqAgfNnxeXzuxjZFfXGstcSXTGqIkRlp/nMrlyT0N6AcJtdDoBOA5gcZgscdWg+hLvZykaDTc6pgiSwDcCnMx5jzSrkN2NdWSLO3BaGuIIJmI2cNj9DHum0mNDywDxQZwRBkmPPf7LlySVUJjXWh10zlrWkRBOYOx94+irGcPe5+kEBpiB0GS4RyyVy5KaQeExlnFV1QuIgECdxmcD7I9ASRqaY9oDd5/LbouXJtbCIO7Euhu2BHI4iPoodwQ1rtQzAHUwNly5ZS9Y6roFZ3mshuzATIInUDhwP8/vLv7kCCCQGyW4kExpg+RBSLkoydEKTAVXh5AptEOGgkczET65Kk9hSbDSHSABglIuW0X6V5Z//9k=")
            break;
        case "gato":
            image.setAttribute("src", "https://s.france24.com/media/display/8c13820c-5b0e-11e9-bf90-005056a964fe/w:1280/p:4x3/gato.jpg");
            break;
        default:
            alert("Opción no disponible")
    }

    document.body.appendChild(contenedor);
    contenedor.appendChild(image)
}
//showAnimal();