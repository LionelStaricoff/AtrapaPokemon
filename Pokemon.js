const Pokemon = {
  setDatos:  function(nombre,edad){
this.nombre = nombre;
this.edad = edad;
    },
    nombre:"",
    edad: null,
saludar: function(){
   alert("hola");
},
getNombre: function(){
    alert(this.nombre);
},
getEdad: function(){
    alert(this.edad);
}
};

