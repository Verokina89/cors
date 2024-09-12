//fetch para traer datos del back
function getCharacterInfo() {
    const characterName = document.getElementById('characterName').value.trim().toLocaleLowerCase()
    const characterInfo = document.getElementById('characterInfo')

      // Validación para no buscar si se ingresa menos de 2 caracteres
      if (characterName.length < 2) {
        characterInfo.innerHTML = "<p>Por favor, ingresa al menos 3 caracteres para realizar la búsqueda.</p>";
        return; // No continúa si no hay suficientes caracteres
    }

    fetch(`http://localhost:3000/characters/${characterName}`)
        .then(response => {
            if (!response.ok) {
                throw new Error("No se encontraron personajes");
            }
            return response.json();
        })
        .then(data => {
            if (data.length > 0) {
                // Si hay personajes, iteramos sobre ellos y los mostramos
                characterInfo.innerHTML = data.map(character => {
                    const { name, status, species, gender, origin, image } = character;
                    return `
                        <div>
                            <h2>${name}</h2>
                            <img src="${image}" alt="${name}">
                            <p>Status: ${status}</p>
                            <p>Species: ${species}</p>
                            <p>Gender: ${gender}</p>
                            <p>Origin: ${origin.name}</p>
                        </div>
                    `;
                }).join('');
            } else {
                characterInfo.innerHTML = '<p>No se encontraron personajes.</p>';
            }
        })
        .catch(error => {
            console.log('Error al obtener personaje', error)
            res.status(404).json({ message: 'Personaje no encontrado' })
        });    
}    


/*----->

const getCharacters = async () => {
  const characterName = document.getElementById('characterName').value.toLocaleLowerCase()
  const results = document.getElementById('results')
  const urlAPI = `http://localhost:4000/characters/${characterName}`
  try {
    const response = await fetch(urlAPI)
    const data = await response.json()
    const template = `
    ${data.map(character => {
      const {name, status, species, gender, image, origin} = character
      return `
      <li>
        <img src=${image} alt=${name}
        <h2>${name}</h2>
        <p>status: ${status}</p>
        <p>species: ${species}</p>
        <p>gender: ${gender}</p>
        <p>origin: ${origin}</p>
      </li>
      `
    }).join("")}
    `
    results.innerHTML = template
  } catch(err) {
    console.log("Personaje no encontrado")
    results.innerHTML = "Personaje no encontrado"

  }
}

 <---*/