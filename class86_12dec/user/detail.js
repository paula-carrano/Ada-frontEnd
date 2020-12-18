const url = new URL(window.location);
const idAModificar = url.searchParams.get('name');
const btn = document.getElementById('btn');
const formulario = document.getElementById('form-add-user');
const spinner = document.getElementById('spinner');

const registrarUsuario = (e) => {
    e.preventDefault();
    spinner.classList.add('d-inline-block');
    spinner.classList.remove('d-none');
    fetch(urlBase + '/users.json', {
        method: 'POST',
        headers: {
            'Content-Type': 'Application/json'
        },
        body: JSON.stringify(crearObjeto())
    })
        .then(response => {
            console.log(response);
            if (response.ok) {
                spinner.classList.add('d-none');
                spinner.classList.remove('d-inline-block');
            }
            return response.json()
        })
        .then(data => console.log(data))
        .catch(error => console.log(error))
}




//https://ada-api-clase86-default-rtdb.firebaseio.com/users/-MOcL9pwz_sevaaAE3gS.json
const getUser = () => {
    fetch(urlBase + '/users/' + idAModificar + '.json')
        .then(response => {
            return response.json()

        })
        .then(data => {
            document.getElementById('user').value = data.user;
            document.getElementById('email').value = data.email;            
            document.getElementById('password').value = data.password;

            
        })
        .catch(error => console.log(error))
}
getUser()


const updateUser = (e) => {
    e.preventDefault()
    fetch(urlBase + '/users/' + idAModificar + '.json', {
        method: 'PATCH', //delete
        headers: {
            'Content-Type': 'Application/json'
        },
        body: JSON.stringify(crearObjeto())
    })
}

if (idAModificar) {
    formulario.addEventListener('submit', updateUser);
} else {
    formulario.addEventListener('submit', registrarUsuario);
}