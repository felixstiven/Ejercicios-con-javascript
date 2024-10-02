// // EJEJRCICO 1 


// /* Realizar una funcion que nos permita ralizar las 4 operaciones arimeticas, es decir, nos permita sumar, restar, dividie y multiplicar. la funcion debe recibir 3 parametros, dos de ellos deben ser los valores (a,b) y uno de la ooperacion (en minuscula).
// si el parametro de la operacion no es valido que mande un errror personalizado a la consola*/ 


// function ejercicioUno (a = 0, b = 0, operation = "suma" ){
//     switch(operation){
//         case "suma":
//             return console.log(a + b);
        
//         case "resta":
//             return console.log(a - b);
        
//         case "multiplicacion":
//             return console.log(a * b);
            
//         case "division":
//             return console.log(a / b);
            
//         default:
//             console.error( `la operacion ${operation} no es valido`);    
//     }
// }

// /* 2) Realizar una funcion mque almacene en un arreglo todos los numeros pares desde a hasta b.*/

// function ejercicioDOs(a = 0, b = 0){
//     let num = []
//     for(let i = a; i <=b; i++){
//         if(i % 2 === 0){
//             num.push(i)
//         }
//     }
//     console.log(num)
// }

// /* 3) Realizar una tabla de multiplicacion de un numero (a) desde 0 hasta x, pero que no se demuestre la multiplicacion de a*5.*/

// function ejercicioTres( a = 0, x = 12){
//     for( let i = 0; i<=x; i++){
//         if( i !== 5){
//             console.log(`${a} x ${i} = ${a*i}`);
//         }
//     }
// }


// /* 4) Hacer una funcion que filtre todos los numeros que sean multiplos del 3 de un arreglo que contenga los numeros del 1 al 100. */

// function ejercicioCuatro(){
//     let numero = [];
//     let multiplos = []
//     for( let i = 1; i<=100; i++){
//         numero.push(i)  
//     } console.log(`este es el arreglo principal contiene del 1 al 100 ${numero}`);

//     numero.filter((Element)=> {
//         if(Element % 3 === 0){
//             multiplos.push(Element);
//         }
//     });
//     console.log(`este arreglo contiene numeros multiplos del 3 ${multiplos}`)

// }

// /* 5) Hcer una funcion que haga de forma aleatoria un numero entre 1 y 1000, y que a ese numero le saque su mitad, el doble y su raiz cuadrada */

// function ejercicioCinco(){
//     let num = Math.floor(Math.random()*(1000-1)+1);
//     console.log(`el numero es ${num}`);

//     let mitad = num / 2;
//     let doble = num * 2;
//     let raiz = Math.sqrt(num);
//     console.log( `la mitad es ${mitad}, el doble es ${doble}.
//         la rais es ${raiz}`);
// }

// /** 6) Hcer uns funcion que, dado como dato de entrada nuestra fecha de cumpleaños, nos diga cuantos dias faltan para el mismo */

// function ejercicioSeis(a = "16 oct 2024"){
//     let cumpleaños= new Date(a);
//     let hoy = new Date();
//     let diasRestantes = Math.floor((cumpleaños.getTime() - hoy.getTime()) / (1000*60*60*24))
//     console.log(` hoy es  ${hoy}, tus cumpleaños es ${cumpleaños} y faltan ${diasRestantes} dias para tus cumpleaños`)
// }

// /** 7/ Realizar una funcion que, dao como dato de entrada una oracion, nos devuelva un arreglo que contenga todas las palabras usadas en la oracion. */

// function ejercicioSiete ( text = "hola todos como estan"){
//     let words = text.split(" ");
//     console.log(words);
// }


// const Entrada_arr = ["2,1,5,3,8,9"];

// const insertionSort = (arr) => {
//     for (let i = 1; i < arr.length; i++) {
// 	    let key = arr[i];
//             let j = i - 1;
//             while (j >= 0 && arr[j].num > key.num) {
//                 arr[j + 1] = arr[j];
//                 j--;
//             }
//             arr[j + 1] = key;
//     }
//     return arr;
// };

// insertionSort(Entrada_arr);


// Escribe un programa que calcule el coste total de un viaje.
// incluyendo los gastos de alojamiento, alimentación y entretenimiento.

// let gastosAlojamiento = parseFloat(prompt("ingrese el valor de alojamineto "));
// let gastosAlimentacion = parseFloat(prompt("ingrese el valor de alimentacion"));
// let gastosEntretenimiento = parseFloat(prompt("ingrese el valor de entretenimiento"));
// let costoTotal =  gastosAlojamiento + gastosAlimentacion + gastosEntretenimiento;
// alert('el costo total de su viaje es ' +  costoTotal.toFixed(2) + "$");


// Crea un programa que convierta la edad de un perro a años humanos.

// Solicita al usuario que indique la edad de su perro en años.
// Calcula la edad del perro en años humanos multiplicando la edad del perro por 7.
// Muestra la edad del perro en años humanos al usuario.
// Ejemplo de entrada: Edad del perro: 5 años.
// Salida esperada: La edad del perro en años humanos es 35 años.
// La forma común de estimar la edad canina es multiplicar la edad del perro por 7. 
// Esto se basa en la idea de que un año de vida de un perro equivale aproximadamente a siete años 
// de vida humana en términos de desarrollo y envejecimiento.


// let edadPerro = parseInt(prompt("ingresa edad en años de tu perro"));
// let edadHumana = edadPerro * 7;
// alert("la edad de tu perro en años de humano es: " + edadHumana)


// Crea un programa que calcule el IMC de una persona a partir de su peso y altura.

// Solicita al usuario que inserte su peso en kilogramos y su altura en metros.
// Calcula el IMC dividiendo el peso entre la altura al cuadrado.
// Muestra el IMC calculado al usuario y su clasificación según la tabla de IMC.
// Ejemplo de entrada: Peso: 70kg, Altura: 1.75m.
// Salida esperada: IMC: 22.86, Clasificación: Normal.

// let pesoKg = parseFloat(prompt("ingresa tu peso en kg"));
// let altura = parseFloat(prompt("ingresa tu estatura en metros"));

// let imc = pesoKg / (altura * altura);

// if (imc <= 18.5){
//     alert("tu imc es: " + imc.toFixed(2) + " clasificacion: peso bajo");
// };
// if ( imc > 18.6 && imc <= 24.9 ){
//     alert( "tu imc es:" + imc.toFixed(2) + " clasificacion: peso normal");
// };
// if ( imc > 25 && imc <= 29.9) {
//     alert("tu imc es: " + imc.toFixed(2) + " clasificacion: sobrepeso");
// };
// if (imc > 30 ){
//     alert("tu imc es: " + imc.toFixed(2) + " clasificacion: Obesidad")
// }


// Crea un programa que calcule el precio final de un producto después de aplicarle un descuento.

// Solicita al usuario que inserte el precio original del producto.
// Solicita al usuario que inserte el porcentaje de descuento a aplicar (por ejemplo, 10 para un descuento del 10%).
// Utiliza una función para calcular el precio final después de aplicar el descuento.
// Muestra el precio final al usuario.
// Ejemplo de entrada:

// Inserta el precio original del producto: 50
// Inserta el porcentaje de descuento a aplicar: 20

// Salida esperada: El precio final del producto después de aplicar un descuento del 20% es: 40 euros.

// let precioOriginal = parseFloat(prompt("ingrese el precio Total en Dolares"));
// let descuento = parseInt(prompt("ingrese el valor de descuento"));

// let precioConDescuento = (precioOriginal * descuento) / 100;
// let precioFinal = precioOriginal  - precioConDescuento; 

// alert("el precio total a pagar con el descuento es:" + precioFinal)

 

// Escribe un programa que solicite al usuario dos números y luego muestre todos los números primos que hay 
// entre esos dos números, incluyendo los extremos.

// Solicita al usuario que ingrese dos números enteros.
// Encuentra todos los números primos en el rango entre los dos números insertados, incluyendo esos dos números.
// Ejemplo de entrada: Inserta el primer número: 10, Inserta el segundo número: 20.
// Salida esperada: Los números primos entre 10 y 20 son: 11, 13, 17, 19.
// Un número primo es un número natural mayor que 1 que solo es divisible por sí mismo y por 1. En otras palabras, 
// un número primo tiene exactamente dos divisores: 1 y él mismo. Por ejemplo, 2, 3, 5, 7, 11 
// son algunos ejemplos de números primos, ya que no tienen otros divisores aparte de 1 y ellos mismos.

// let numero1 = parseInt(prompt("ingresa el primer numero "));
// let numero2 = parseInt(prompt("ingresa el segundo numero"));

// function esPrimo(num){
//     if(num <= 1) return false;
    
//     for(let i = 2; i <= Math.sqrt(num); i++){
//         if (num % i == 0) return false;
//     }
//     return true;
// };

// console.log("lo numero primos entre", numero1, "y", numero2, ":");

// for (let i = numero1; i <= numero2; i++){
//     if(esPrimo(i)){
//         console.log(i)
//     }
// }


// Crea un programa que convierta una temperatura de grados Celsius a grados Fahrenheit o viceversa,
//  según la elección del usuario.

// Solicita al usuario que elija el tipo de conversión: de Celsius a Fahrenheit o de Fahrenheit a Celsius.
// Solicita al usuario que ingrese la temperatura que desea convertir.
// Utiliza funciones para realizar las conversiones necesarias.
// Muestra el resultado de la conversión al usuario.
// Ejemplo de entrada: ¿Qué tipo de conversión deseas realizar? (1 para Celsius a Fahrenheit, 
// 2 para Fahrenheit a Celsius): 1, Inserta la temperatura en grados Celsius: 25
// Salida esperada: 25 grados Celsius equivalen a 77 grados Fahrenheit.
// Para convertir de Celsius a Fahrenheit: Multiplica la temperatura en grados Celsius por 9/5 y luego suma 32.

// La fórmula es: °F = (°C × 9/5) + 32. Para convertir de Fahrenheit a Celsius: Resta 32 de la temperatura en grados 
// Fahrenheit y luego multiplica por 5/9. La fórmula es: °C = (°F – 32) × 5/9.

// function celsiusToFahrenheit(celcius){
//     return (celcius  * 9/5 ) + 32;
// }

// function  fahrenheitToCelsius(fahrenheit){
//     return (fahrenheit-32) * 5/9;
// }

// function coversorOfTemperature(){

//     let opcion = prompt("¿ Que tipo de conversion deseas realizar? 1) celcius a fahrenhe - 2)fahrenhe a celcius");
//     opcion = parseInt(opcion);

//     if( opcion != 1 && opcion != 2){
//         alert ("Opcion no valida ingresa 1 o 2 ");
//         return;

//     } 

//     let temperatura = prompt("ingresa la temperatura a convertir ");
//     temperatura = parseFloat(temperatura);

//     let resultado;

//     if (opcion === 1){
//         resultado = celsiusToFahrenheit(temperatura);
//         alert( temperatura + " grados Celsius equivalen a " + resultado + "grados Fahrenhe ");
//     } else {
//         resultado =  fahrenheitToCelsius(temperatura);
//         alert(temperatura + "grados Fahrenhe equivalen a " + resultado + " grados Celsius");
//     }
// }    
// coversorOfTemperature();




// Escribe un programa que calcule el factorial de un número entero no negativo ingresado por el usuario.

// Define una función llamada calculateFactorial que tome un parámetro number que represente
// el número del cual se calculará el factorial.
// Dentro de la función, utiliza un bucle for para calcular el factorial del número.
// Inicializa una variable result en 1, ya que el factorial de 0 y 1 es 1.
// Itera desde 1 hasta number, multiplicando cada número por result en cada iteración
// y almacenando el resultado en result.
// Devuelve result al final de la función.
// Pide al usuario que ingrese un número entero no negativo.
// Convierte la entrada del usuario a un número entero utilizando la función parseInt.
// Llama a la función calculateFactorial con el número ingresado por el usuario y muestra el resultado.
// El factorial de un número entero positivo ( n ), denotado como ( n! ), es el producto de todos los 
// enteros positivos desde 1 hasta ( n ). La fórmula para calcular el factorial es 
// ( n! = n x (n-1) x (n-2) x … x 2 x 1 ). Por ejemplo, el factorial de 5 (( 5! )) se calcula como 
// ( 5 x 4 x 3 x 2 x 1 = 120 ).

// let numero = prompt("para calcular el factorial de un numero, ingresa un numero no negativo ");
// numero = parseInt(numero);


// function calaculateFactorial(number){
//     let resultado = 1;

//     for ( let i = 1; i <= number; i++){
//         resultado *= i;
//     }
//     return resultado;
// }
// let number = parseInt(numero);

// if (!isNaN(number) && number >=0){
//     let factorial = calaculateFactorial(number);
//     alert("el factorial de " + number + " es " + factorial);
// } else {
//     alert("entrada invalida ingresa un numero no negativo")
// }


















