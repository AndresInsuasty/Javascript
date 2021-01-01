function heredaDe(prototipoHijo,prototipoPadre){
    var fn = function(){}
    fn.prototype = prototipoPadre.prototype
    prototipoHijo.prototype = new fn
    prototipoHijo.prototype.constructor = prototipoHijo
}


function persona(nombre,apellido,altura=1.7){
    this.nombre = nombre
    this.apellido = apellido
    this.altura = altura
   
   }
persona.prototype.saludar = function(){
    console.log(`Hola me llamo ${this.nombre} ${this.apellido}`)
}

persona.prototype.soyAlto = function(){
    return this.altura>1.8
}

function Desarrollador(nombre,apellido){
    this.nombre = nombre
    this.apellido = apellido
}

heredaDe(Desarrollador,persona)

Desarrollador.prototype.saludar = function(){
    console.log(`Hola me llamo ${this.nombre} ${this.apellido} y soy desarrolador`)
}




// var andres = new persona('Andres','Insuasty',1.72)
// var diana = new persona('Diana','Narvaez',1.68)
// var pepito = new persona('Pepito','Perez',1.89)