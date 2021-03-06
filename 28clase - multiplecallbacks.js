const API_URL = 'https://swapi.dev/api/'
const PEOPLE_URL = 'people/:id'

const URL = `${API_URL}${PEOPLE_URL.replace(':id', 1)}`
const opts = { crossDomain: true }

const onResponse = function (data) { console.log(`Hola yo soy ${data.name}`) }

function obtenerPersonaje(id){
    const url = `${API_URL}${PEOPLE_URL.replace(':id', id)}`
    $.get(url, opts, onResponse)
}

obtenerPersonaje(1)
obtenerPersonaje(2)
obtenerPersonaje(3)
obtenerPersonaje(4)
obtenerPersonaje(5)
obtenerPersonaje(6)
obtenerPersonaje(7)

