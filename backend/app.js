//RUTAS 
const express = require ('express')
const app = express()
const axios = require('axios')
const cors = require('cors')

const API = 'https://rickandmortyapi.com/api/character'
//Middleware cors para peticiones del FRONT.
app.use(cors()); 

// app.use(cors({
//     origin: ['http://localhost:3001']
// })) 

// //Middleware para ver en la teminal.
// app.get('/', (req, res) => {
//     res.send('servidor funciona') //En el navegador sin `...characters/Rick`
//     console.log('funcionaaaa');  //en la teminal.
    
// })

// Ruta principal para comprobar si el servidor funciona
app.get('/', (req, res) => {
    res.send('Servidor funcionando');
    console.log('Servidor funcionando');
});

//Middleware para obtener todos los personajes
app.get('/characters', async (req, res) => {
    try {
        const response = await axios.get(API)
        const characters = await response.data.results
        res.json(characters) //devuelve lista de personajes
    }catch (error) {
        console.log('Error al obtener personajes', error)
        res.status(500).json({message: 'Error el sevidor'})
    }
})

//Middleware para obtener personajes por nombre.
app.get('/characters/:name', async (req, res) => {
    const characterName = req.params.name
    console.log(characterName)
    try {
        // Petición a la API con el parámetro `name`
        const response = await axios.get(`${API}/?name=${characterName}`)
        const characters = response.data.results;
        // Verifica si hay resultados
        if (characters.length > 0) {
            res.json(characters)
        } else {
            res.status(404).json({ message: 'Personaje no encontrado' })
        }
    } catch (error) {
        console.log('Error al obtener personaje', error)
        res.status(404).json({ message: 'Personaje no encontrado' })
    }
})

app.use((req,res) => {
    res.send('<h1>⚠️Pagina no encontrada⚠️')
})
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Servidor en el puerto http://localhost:${PORT}/characters`)
})


/*  

const express = require("express")
const app = express()
const axios = require("axios")
const cors = require("cors")

const urlBase = "https://rickandmortyapi.com/api/character"

app.use(cors({
  origin: 'http://127.0.0.1:5500'
}))

app.get("/characters", async ( req, res ) => {
  try {
    const response = await axios.get(urlBase)
    const data = response.data.results
    res.json(data)

  } catch (err) {
    res.status(500).json({mensaje: "Personaje no encontrado"})
  }
})

app.get("/characters/:name", async ( req, res ) => {
  const characterName = req.params.name
  console.log(characterName)
  try {
    const response = await axios.get(`${urlBase}/?name=${characterName}`)
    const data = response.data.results

    const characterData = data.map(character => {
      const {name, status, species, gender, image, origin: {name: origin}} = character
      return {name, status, species, gender, image, origin}
    })

    res.json(characterData)

  } catch (err) {
    res.status(500).json({mensaje: "Personaje no encontrado"})
  }
})

const PORT = 4000
app.listen(PORT, () => console.log(`El servidor está escuchando en el puerto http://localhost:${PORT}`))

*/