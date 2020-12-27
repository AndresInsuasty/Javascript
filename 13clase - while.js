var andres = {
    nombre: 'Andres',
    apellido: 'Insuasty',
    edad: 25,
    peso: 75
}

console.log(`Al inicio del año ${andres.nombre} pesa ${andres.peso} kg`)

const INCREMENTO_PESO = 0.3
const DIAS = 365

const aumentarPeso = (persona) => persona.peso += INCREMENTO_PESO
const bajarPeso = (persona) => persona.peso -= INCREMENTO_PESO
const comeMucho = () => Math.random() < 0.3
const realizaDeporte = () => Math.random() < 0.4

const META = andres.peso - 3
var dias = 0
while (andres.peso > META) {
    
    if (comeMucho()) {
        // aumentar de peso
        aumentarPeso(andres)
    }
    if (realizaDeporte()) {
        // adelgazar
        bajarPeso(andres)
    }
    dias += 1
}

console.log(`Pasaron ${dias} dias hasta que ${andres.nombre} adelgazó 3 kg`)