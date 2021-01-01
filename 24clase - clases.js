
class persona {
    constructor(nombre,apellido,altura=1.7){
        this.nombre = nombre
        this.apellido = apellido
        this.altura = altura
    }
    saludar(){
        console.log(`Hola me llamo ${this.nombre} ${this.apellido}`)
    }
    soyAlto(){
        return this.altura>1.8
    }
}

class Desarrollador extends persona{
    constructor(nombre,apellido,altura){
        super(nombre,apellido,altura)
    }
    saludar(){
        console.log(`Hola me llamo ${this.nombre} ${this.apellido} y soy desarrolador`)
    }
}
// var andres = new persona('Andres','Insuasty',1.72)
// var diana = new persona('Diana','Narvaez',1.68)
// var pepito = new persona('Pepito','Perez',1.89)