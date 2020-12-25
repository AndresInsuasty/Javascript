var nombre = 'Andres'
var apellido = 'Insuasty'

var nombreEnMayusculas = nombre.toUpperCase()
var apellidoEnMinusculas = apellido.toLowerCase()

var primeraLetraNombre = nombre.charAt(0)
var cantidadLetrasNombre = nombre.length

var nombreCompleto = nombre + ' ' + apellido
var nombreCompleto2 = `${nombre} ${apellido}`
var nombreCompleto3 = `${nombre} ${apellido.toUpperCase()}`

var str = nombre.charAt(1)+nombre.charAt(2)
var str2 = nombre.substr(1,2)

var ultimaLetra = nombreCompleto.charAt(nombreCompleto.length-1)
var ultimaLetra2 = nombreCompleto.slice(-1)