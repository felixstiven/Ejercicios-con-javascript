// EJEJRCICO 1 


/* Realizar una funcion que nos permita ralizar las 4 operaciones arimeticas, es decir, nos permita sumar, restar, dividie y multiplicar. la funcion debe recibir 3 parametros, dos de ellos deben ser los valores (a,b) y uno de la ooperacion (en minuscula).
si el parametro de la operacion no es valido que mande un errror personalizado a la consola*/ 


function ejercicioUno (a = 0, b = 0, operation = "suma" ){
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

/* 2) Realizar una funcion mque almacene en un arreglo todos los numeros pares desde a hasta b.*/

function ejercicioDOs(a = 0, b = 0){
    let num = []
    for(let i = a; i <=b; i++){
        if(i % 2 === 0){
            num.push(i)
        }
    }
    console.log(num)
}

/* 3) Realizar una tabla de multiplicacion de un numero (a) desde 0 hasta x, pero que no se demuestre la multiplicacion de a*5.*/

function ejercicioTres( a = 0, x = 12){
    for( let i = 0; i<=x; i++){
        if( i !== 5){
            console.log(`${a} x ${i} = ${a*i}`);
        }
    }
}


/* 4) Hacer una funcion que filtre todos los numeros que sean multiplos del 3 de un arreglo que contenga los numeros del 1 al 100. */

function ejercicioCuatro(){
    let numero = [];
    let multiplos = []
    for( let i = 1; i<=100; i++){
        numero.push(i)  
    } console.log(`este es el arreglo principal contiene del 1 al 100 ${numero}`);

    numero.filter((Element)=> {
        if(Element % 3 === 0){
            multiplos.push(Element);
        }
    });
    console.log(`este arreglo contiene numeros multiplos del 3 ${multiplos}`)

}

/* 5) Hcer una funcion que haga de forma aleatoria un numero entre 1 y 1000, y que a ese numero le saque su mitad, el doble y su raiz cuadrada */

function ejercicioCinco(){
    let num = Math.floor(Math.random()*(1000-1)+1);
    console.log(`el numero es ${num}`);

    let mitad = num / 2;
    let doble = num * 2;
    let raiz = Math.sqrt(num);
    console.log( `la mitad es ${mitad}, el doble es ${doble}.
        la rais es ${raiz}`);
}

/** 6) Hcer uns funcion que, dado como dato de entrada nuestra fecha de cumpleaños, nos diga cuantos dias faltan para el mismo */
