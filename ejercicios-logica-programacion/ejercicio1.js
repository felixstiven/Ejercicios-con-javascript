// EJEJRCICO 1 


/* Realizar una funcion que nos permita ralizar las 4 operaciones arimeticas, es decir, nos permita sumar, restar, dividie y multiplicar. la funcion debe recibir 3 parametros, dos de ellos deben ser los valores (a,b) y uno de la ooperacion (en minuscula).
si el parametro de la operacion no es valido que mande un errror personalizado a la consola*/ 


function ejercicio1 (a = 0, b = 0, operation = "suma" ){
    switch(operation){
        case "suma":
            return console.log(a + b);
        
        case "resta":
            return console.log(a - b);
        
        case "multiplicacion":
            return console.log(a * b);
            
        case "division":
            return console.log(a / b);
            
        default:
            console.error( `la operacion ${operation} no es valido`);    
    }
}




ejercicio1( 5, 5, "division")