//fetch para traer datos del back
function getCharacterInfo() {
    const characterName = document.getElementById('characterName')
    const characterInfo = document.getElementById('characterInfo');


    fetch(`http://localhost:3000/characters/${characterName}`)
        .then(response => response.json())
         //Pasan los datos de la misma manera que el   destructuring del back.
        .then(data => {
            const { name, status, species, gender, origin, image } = data;
            //template para mostrar en la web.
            characterInfo.innerHTML = `
                <h2>${name}</h2>
                <img src="${image}" alt="${name}">
                <p>Status: ${status}</p>
                <p>Species: ${species}</p>
                <p>Gender: ${gender}</p>
                <p>Origin: ${origin.name}</p>
            `;
        })
        .catch(error => {
            characterInfo.innerHTML = `<p>Error: ${error.message}</p>`;
        });
}    