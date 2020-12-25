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

function imprimirMayusculas({nombre}){
    var nombre = nombre.toUpperCase()
    console.log(nombre)
}

imprimirMayusculas(andres)
imprimirMayusculas(diana)
imprimirMayusculas({nombre: 'Pepito',edad:10})