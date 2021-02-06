const urlBase = 'https://ada-api-clase86-default-rtdb.firebaseio.com';

const creatObject = () => {
    const name = document.getElementById('name').value;
    const breed = document.getElementById('breed').value;
    const weight = document.getElementById('weight').value;
    const age = document.getElementById('age').value;
    return { name, breed, weight, age }
}