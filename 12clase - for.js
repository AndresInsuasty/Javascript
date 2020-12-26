var andres = {
    nombre: 'Andres',
    apellido: 'Insuasty',
    edad: 25,
    peso: 75
}

console.log(`Al inicio del año ${andres.nombre} pesa ${andres.peso} kg`)

const INCREMENTO_PESO = 0.2
const DIAS = 365

const aumentarPeso = (persona) => persona.peso += INCREMENTO_PESO
const bajarPeso = (persona) => persona.peso -= INCREMENTO_PESO

for (var i = 1; i <= DIAS; i++) {
    var random = Math.random()
    if (random < 0.25) {
        // aumenta de peso
        aumentarPeso(andres)

    } else if (random < 0.5) {
        // adelgazar
        bajarPeso(andres)

    }
}

console.log(`Al final del año ${andres.nombre} pesa ${andres.peso.toFixed(1)} kg`)