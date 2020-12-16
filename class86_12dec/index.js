const tableUsers = document.getElementById('users-list');

const crearTabla = () => {
    fetch(urlBase + '/users.json')
        .then(response => response.json())
        .then(data => {
            const tbody = tableUsers.querySelector('tbody');
            for (prop in data) {
                const user = data[prop];
                const tr = document.createElement('tr');
                for (userProp in user) {
                    const td = document.createElement('td');
                    if (userProp === 'user') {
                        const a = document.createElement('a');
                        a.setAttribute('href', 'detail.html?name=' + prop);
                        a.innerHTML = user[userProp];
                        td.appendChild(a)
                        tr.appendChild(a);
                    } else {
                        td.innerHTML = user[userProp];
                    }
                    tr.appendChild(td);
                }
                tbody.appendChild(tr);

            }
        })
        .catch(error => console.log(error))
}
crearTabla()