//RUTAS 
const express = require ('express')
const app = express()
const axios = require('axios')
const cors = require('cors')

const API = 'https://rickandmortyapi.com/api/character/?name='
//Middleware cors para peticiones del FRONT.
app.use(cors()); 

// //Middleware para ver en la teminal.
// app.get('/', (req, res) => {
//     res.send('servidor funciona') //En el navegador sin `...characters/Rick`
//     console.log('funcionaaaa');  //en la teminal.
    
// })

//Middleware para obtener todos los personajes
app.get('/characters', async (req, res) => {
    try {
        const response = await axios.get(API)
        const charactersName = await response.data.results
        res.json(charactersName) //devuelve lista de personajes
    }catch (error) {
        console.log('Error al obtener personajes', error)
        res.status(404).json({message: 'Error al obtener personajes'})
    }
})

//Middleware para obtener personajes por nombre.
app.get('characters/:name', async (res, req) => {
    const name = req.params.name
    
    try{
        const response = await axios.get(`${API}${name}`)
        const characterName = await response.data.results[0]
            res.json(characterName)
    }catch (error) {
        console.log('Error al obtener personaje', error)
        res.status(404).json({message: 'Personaje no encontrado'})
    }
    
})

app.use((req,res) => {
    res.send('<h1>⚠️Pagina no encontrada⚠️')
})
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Servidor en el puerto http://localhost:${PORT}/characters`)
})
