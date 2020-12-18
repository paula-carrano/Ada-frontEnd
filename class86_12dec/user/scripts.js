const urlBase = 'https://ada-api-clase86-default-rtdb.firebaseio.com';
const crearObjeto = () => {
    const user = document.getElementById('user').value;
    const password = document.getElementById('password').value;

    return { user, password }
}