const tablePets = document.getElementById('pet-list');
const buttonDelete = document.getElementById('delete');

const creatTable = () => {
    //Traemos los datos 
    fetch(`${urlBase}/pet.json`)
        .then(response => response.json())
        .then(data => {

            const tbody = tablePets.querySelector('tbody');
            for (prop in data) {

                // Creo todos los elementos
                const pet = data[prop];
                const tr = document.createElement('tr');
                const tdName = document.createElement('td');
                const tdBreed = document.createElement('td');
                const tdWeight = document.createElement('td');
                const tdAge = document.createElement('td');
                const a = document.createElement('a');

                // Le asigno un link al nombre de usuario
                a.setAttribute('href', `detail.html?name=${prop}`);

                a.innerHTML = pet.name;
                tdBreed.innerHTML = pet.breed;
                tdWeight.innerHTML = pet.weight;
                tdAge.innerHTML = pet.age;

                // Anidamos 
                tdName.appendChild(a);
                tr.appendChild(tdName);
                tr.appendChild(tdBreed);
                tr.appendChild(tdWeight);
                tr.appendChild(tdAge);
                tbody.appendChild(tr);


                // boton Delete
                const buttonDelete = document.createElement('button');
                buttonDelete.classList.add('btn');
                buttonDelete.setAttribute('id', 'delete');
                buttonDelete.style.backgroundColor = 'red';
                buttonDelete.innerHTML = '<i class="fa fa-trash " aria-hidden="true"> </i> Delete';
                buttonDelete.addEventListener('click', ()=> deletePet());
                const td = document.createElement('td');
                td.appendChild(buttonDelete);
                tr.appendChild(td);

                // boton Update
                const buttonUpdate = document.createElement('button');
                buttonUpdate.classList.add('btn');
                buttonUpdate.setAttribute('id', 'update');
                buttonUpdate.style.backgroundColor = 'blue';
                buttonUpdate.innerHTML = '<i class="fa fa-upload" aria-hidden="true"></i> Update';
                const tdUpdate = document.createElement('td');
                tdUpdate.appendChild(buttonUpdate);
                tr.appendChild(tdUpdate);
                buttonUpdate.addEventListener('click', () => {
                    window.location = `detail.html?name=${prop}`;
                })
            }
        })
        .catch(error => console.log(error))
}
creatTable()


const deletePet = (id) => {
    fetch(`${urlBase}/pet/${id}.json`, {
        method: 'DELETE',
    })
        .then(response =>response.json())
        creatTable()
}

creatTable();