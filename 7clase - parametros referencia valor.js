var andres = {
    nombre: 'Andres',
    apellido: 'Insuasty',
    edad: 25
}

var diana = {
    nombre: 'Diana',
    apellido: 'Narvaez',
    edad: 28
}

function imprimirMayusculas(persona){
    var {nombre}=persona
    var nombre = nombre.toUpperCase()
    console.log(nombre)
}

imprimirMayusculas(andres)
imprimirMayusculas(diana)
imprimirMayusculas({nombre: 'Pepito',edad:10})

function imprimirNombreyEdad(persona){
    var {nombre} = persona
    var {edad} = persona
    console.log(`Hola, me llamo ${nombre} y tengo ${edad} años`)
}

imprimirNombreyEdad(andres)
imprimirNombreyEdad(diana)
imprimirNombreyEdad({nombre: 'Pepito',edad:10})




function cumpleanos(persona){
    return {
        ...persona,
        edad: persona.edad+1
    }
}