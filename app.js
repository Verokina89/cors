//Servidor creado. 
const express = require ('express')
const app = express()
const axios = require('axios')
const cors = require('cors')

//Middleware cors para peticiones del FRONT.
app.use(cors()); 

// //Middleware para ver en la teminal.
// app.get('/', (req, res) => {
//     res.send('servidor funciona') //En el navegador sin `...characters/Rick`
//     console.log('funcionaaaa');  //en la teminal.
    
// })



const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Servidor en el puerto http://localhost:3000/characters/Rick`)
})
