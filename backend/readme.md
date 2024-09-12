## RICK AND MORTY API NODE

Este proyecto utiliza Node.js, Express, y Axios para acceder a la API de Rick and Morty y proporcionar rutas para obtener información sobre los personajes.

## Pasos para ejecutar el proyecto

1. **Instalación de dependencias:**
   npm install

## Rutas del servidor
1. Obtener todos los personajes:
Endpoint: http://localhost:3000/characters
Método: GET

Esta ruta devuelve todos los personajes disponibles en la API de Rick and Morty.

2. Obtener un personaje por nombre:

Endpoint: http://localhost:3000/characters/:name
Método: GET

Reemplaza :name con el nombre del personaje que deseas buscar. Por ejemplo, http://localhost:3000/characters/Rick.

Nota: Si el personaje no se encuentra, se enviará un mensaje de error con estado 404.

**Todos los datos serán res.json() para crear la segunda parte del ejercicio**

## Vamos a consumir la API
tendremos que crear otro archicvo para crear nuestro front y apunte hacia nuestra API de Rick and Morty
- Haremos un front sencillo en otro documento con HTML, CSS y JS
- El HTML tendrá un input de búsqueda por nombre hacia nuestra api levantada 
- Recibiremos los datos del personaje.
  - Name
  - Status
  - Species
  - gender
  - origin
  - image

## RECORDATORIO

CORS anda detrá de nosotros... si no funicona la aplicación recordad que puede ser por un problema de CORS, abramos el inspector para ver los fallos y adelantemonos a ellos.