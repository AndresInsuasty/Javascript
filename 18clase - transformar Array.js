var andres = {
    nombre: 'Andres',
    apellido: 'Insuasty',
    altura: 1.73
}
var diana = {
    nombre: 'Diana',
    apellido: 'Narvaes',
    altura: 1.68
}
var santiago = {
    nombre: 'Santiago',
    apellido: 'Insuasty',
    altura: 1.2
}

var papa = {
    nombre: 'German',
    apellido: 'Insuasty',
    altura: 1.68
}

var mama = {
    nombre: 'Amada',
    apellido: 'Delgado',
    altura: 1.65
}


const esAlta = (persona) => {
    return persona.altura > 1.65
}

var personas = [andres, diana, santiago, papa, mama]

var personasAltas = personas.filter(esAlta)

const pasarAlturaCms = (persona) => {
    return {
        ...persona,
        altura: persona.altura*100
    }
}

var personaCms = personas.map(pasarAlturaCms)

console.log(personaCms)