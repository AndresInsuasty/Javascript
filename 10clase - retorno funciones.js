var andres = {
    nombre: 'Andres',
    apellido: 'Insuasty',
    edad: 25,
    ingeniero: true,
    cocinero: false,
    cantante: false,
    dj: false,
    guitarrista: false,
    dron: true
}

var juan = {
    nombre: 'Juan',
    apellido: 'Gomez',
    edad: 12
}

function imprimirProfesiones(persona) {
    console.log(`${persona.nombre} es:`)
    if (persona.ingeniero) {
        console.log('Ingeniero')
    } else {
        console.log('No es Ingeniero')
    }
    if (persona.cocinero) {
        console.log('Cocinero')
    }
    if (persona.cantante) {
        console.log('Cantante')
    }
    if (persona.dj) {
        console.log('Dj')
    }
    if (persona.guitarrista) {
        console.log('Guitarrista')
    }
    if (persona.dron) {
        console.log('Volador de Dron')
    }
}

imprimirProfesiones(andres)

const MAYORIA_DE_EDAD = 18

function esMayorDeEdad(persona){
    return persona.edad >= MAYORIA_DE_EDAD
}


function imprimirSiEsMayorDeEdad(persona) {
    if (esMayorDeEdad(persona)) {
        console.log(`${persona.nombre} es mayor de edad`)
    } else {
        console.log(`${persona.nombre} es menor de edad`)
    }
}

imprimirSiEsMayorDeEdad(andres)
imprimirSiEsMayorDeEdad(juan)