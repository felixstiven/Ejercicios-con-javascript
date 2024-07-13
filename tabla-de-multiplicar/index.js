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