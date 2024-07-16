//EJEMPLO DE FUNCIONES DE RECURSIVIDAD
// vamos a crear una funcion que cuente desde un numero hasta cero

function cuentaAtras(numero){
  // Condicion base: si el numero que recibe es 
 //  menor de 0 entoces salimos de la funcion
 if (numero < 0) {return}
 
// si el numero era mayor o igual a 0, lo mostramos
console.log(numero)

// y llamamos a la funcion con el numero anterior
cuentaAtras(numero - 1)
}

//  si llamamos a la funcion con el nuemro 3, el resultado sera 
cuentaAtras(3)
// -> 3
// -> 2 
// -> 1
// -> 0