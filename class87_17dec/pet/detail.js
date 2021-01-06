const url = new URL(window.location);
const idAModificar = url.searchParams.get('name');

// Traemos los ids
const btn = document.getElementById('submit');
const formulario = document.getElementById('form-add-pet');
const spinner = document.getElementById('spinner');
const buttonUpdate = document.getElementById('update');


const registerPet = (e) => {
    e.preventDefault();
    spinner.classList.add('d-inline-block');
    spinner.classList.remove('d-none');
    fetch(urlBase + '/pet.json', {
        method: 'POST',
        headers: {
            'Content-Type': 'Application/json'
        },
        body: JSON.stringify(creatObject())
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
//formulario.addEventListener('submit', registerPet);


//https://ada-api-clase86-default-rtdb.firebaseio.com/users/-MOcL9pwz_sevaaAE3gS.json
const getPet = () => {
    fetch(urlBase + '/pet/' + idAModificar + '.json')
        .then(response => {
            return response.json()

        })
        .then(data => {
            document.getElementById('name').value = data.name;
            document.getElementById('breed').value = data.breed;
            document.getElementById('weight').value = data.weight;
            document.getElementById('age').value = data.age;
        })
        .catch(error => console.log(error))
}
getPet()


const updatePet = (e) => {
    e.preventDefault()
    console.log('aca')
    fetch(`${urlBase}/pet/${idAModificar}.json`, {
        method: 'PATCH',
        headers: {
            'Content-Type': 'Application/json'
        },
        body: JSON.stringify(creatObject())
    })
        .then(response => {
            return response.json()
        })
        .then(data => console.log(data))
        .catch(error => console.log(error))
}
//buttonUpdate.addEventListener('click', updatePet);



if (idAModificar) {
    btn.innerHTML = 'Update';
    formulario.addEventListener('submit', updatePet);
} else {
    formulario.addEventListener('submit', registerPet)
}