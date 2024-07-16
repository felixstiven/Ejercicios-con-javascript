// vamos a crear una tabla de multiplicar del 1 al 10
// vamos a necesitar un bucle que itere del 1 al 10 y,
// dentro de ese bucle, otro bucle que itere del 1 al 10.
// utilizaremos bucles for anidados (uno dentro del otro)

for ( let i = 1; i<=10; i++){
    for ( let j =  1; j<=10; j++){
        const resultado = i * j 
        console.log(i + " x " + j + " = " + resultado)
    }
}




// creando funcion que nos devuelve un numero aleatorio

// function getRandomNumber() {
//     // recuperamos un número aleatorio entre 0 y 1
//     const random = Math.random() // por ejemplo: 0.6803487380457318
//     // lo multiplicamos por 10 para que esté entre 0 y 10
//     const multiplied = random * 10 // -> 6.803487380457318
//     // redondeamos hacia abajo para que esté entre 0 y 9
//     const rounded = Math.floor(multiplied) // -> 6
//     // le sumamos uno para que esté entre 1 y 10
//     const result = rounded + 1 // -> 7
//     // devolvemos el resultado
//     return result
// }