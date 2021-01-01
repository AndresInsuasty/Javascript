
class persona {
    constructor(nombre,apellido,altura=1.7){
        this.nombre = nombre
        this.apellido = apellido
        this.altura = altura
    }
    saludar(fn){
        console.log(`Hola me llamo ${this.nombre} ${this.apellido}`)
        if (fn){
            fn(this.nombre,this.apellido,false)
            //fn(nombre,apellido)
        }
    }
    soyAlto(){
        return this.altura>1.8
    }
}

class Desarrollador extends persona{
    constructor(nombre,apellido,altura){
        super(nombre,apellido,altura)
    }
    saludar(fn){
        console.log(`Hola me llamo ${this.nombre} ${this.apellido} y soy desarrolador`)
        if (fn){
            fn(this.nombre,this.apellido,true)
            //fn(nombre,apellido)
        }
    }
}

function responderSaludo(nombre,apellido,esDev){
    console.log(`Buen dia ${nombre} ${apellido}`)
    if (esDev){
        console.log(`no sabia que eras desarrollador`)
    }
}


var andres = new persona('Andres','Insuasty',1.72)
var diana = new persona('Diana','Narvaez',1.68)
var pepito = new Desarrollador('Pepito','Perez',1.89)

andres.saludar(responderSaludo)
diana.saludar()
pepito.saludar(responderSaludo)