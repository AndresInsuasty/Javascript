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
function imprimirProfesiones(persona){
    console.log(`${persona.nombre} es:`)
    if (persona.ingeniero){
        console.log('Ingeniero')
    }else{
        console.log('No es Ingeniero')
    }
    if (persona.cocinero){
        console.log('Cocinero')
    }
    if (persona.cantante){
        console.log('Cantante')
    }
    if (persona.dj){
        console.log('Dj')
    }
    if (persona.guitarrista){
        console.log('Guitarrista')
    }
    if (persona.dron){
        console.log('Volador de Dron')
    }
}

imprimirProfesiones(andres)


function imprimirSiEsMayorDeEdad(persona){
    if (persona.edad>=18){
        console.log(`${persona.nombre} es mayor de edad`)
    }else{
        console.log(`${persona.nombre} no es mayor de edad`)
    }
}

imprimirSiEsMayorDeEdad(andres)