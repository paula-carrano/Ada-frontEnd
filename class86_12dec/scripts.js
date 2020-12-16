const urlBase = 'https://ada-api-clase86-default-rtdb.firebaseio.com';
const crearObjeto = () => {
    const password = document.getElementById('password').value;
    const user = document.getElementById('user').value;

    return { user, password }
}