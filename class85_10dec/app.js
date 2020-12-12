const getDish = (dish) => {

    let url = `https://foodish-api.herokuapp.com/api/images/${dish}`;

    fetch(url)
        .then(response => {
            return response.json();
            
        })
        .then(data => {
            let img = document.getElementById('img')
            img.src = data.image
            console.log(data.image)
        })
}

const getDish2 = () => {

    let url = `https://foodish-api.herokuapp.com/api`;

    fetch(url)
        .then(response => {
            return response.json();
            
        })
        .then(data => {
            let img = document.getElementById('img')
            img.src = data.image
            console.log(data.image)
        })
}
