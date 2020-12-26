var x = 4, y = '4'
// x==y  retorna True
// x===y retorna False
var andres ={
    nombre: 'Andres'
}

var otraPersona={
    nombre:'Andres'
}

// andres==otraPersona retorna False

var otraPersona2 = andres
// andres==otraPersona2 retorna True

var otraPersona3 = {
    ...andres
}