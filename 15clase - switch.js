var signo = prompt('¿Cual es tu signo?')

console.log(signo)

// if (signo==='acuario'){
//     console.log('Horoscopo para Acuario')
// }

switch (signo) {
    case 'acuario':
        console.log('Horoscopo Acuario')
        break
    case 'piscis':
        console.log('Horoscopo Piscis')
        break
    case 'Libra':
    case 'libra':
        console.log('Horoscopo Libra')
        break
    default:
        console.log('no hay Horoscopo')
        break
}