function persona(nombre,apellido,altura=1.7){
    this.nombre = nombre
    this.apellido = apellido
    this.altura = altura
   
   }
   
   persona.prototype.saludar = ()=>{
       console.log(`Hola me llamo ${this.nombre} ${this.apellido}`)
       if (this.altura>1.75){
           console.log('Soy una persona alta')
       }else{
           console.log('No soy una persona alta')
           console.log('********')
       }
   }
   
   var andres = new persona('Andres','Insuasty',1.73)
   var diana = new persona(nombre='Diana',apellido='Narvaez',1.68)
   var pepito = new persona('Pepito','Perez',1.80)
   
   andres.saludar()
   diana.saludar()
   pepito.saludar()