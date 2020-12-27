var andres = {
    nombre: 'Andres',
    apellido: 'Insuasty',
    altura: '1.73'
}
var diana = {
    nombre: 'Diana',
    apellido: 'Narvaes',
    altura: '1.68'
}
var santiago = {
    nombre: 'Santiago',
    apellido: 'Insuasty',
    altura: '1.2'
}

var personas = [andres, diana, santiago]

for (var i=0;i<personas.length;i++){
    persona = personas[i]
    console.log(`${persona.nombre} mide ${persona.altura}`)
}