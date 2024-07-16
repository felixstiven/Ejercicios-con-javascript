const entradaNumero = document.getElementById("num")
const btn = document.getElementById("btn")
const texto = document.getElementById("texto")

function fibonacci (n) {
    let x = 0;
    let salida = []      
    for ( x; x<=n; x++)

        if(x==0){
            salida.push(0)
        }
        else if (x==1){
            salida.push(1)
        }
        else{
            salida.push( salida[x-1]+salida[x-2])
        }
        return salida
}

function numberToTex(n,textoUsar){
    text= ""
    for( let x=1;x<=n;x++){
        text= text + `${textoUsar}`
    }
    return text
}

    entradaNumero.addEventListener("input", (e) =>{
    numero= e.target.value
    console.log(numero)
})

btn.addEventListener("click",()=>{
    let secuencia = fibonacci(numero);
    secuencia.forEach((dato)=>{
        let hijo = document.createElement("li");
        hijo.innerHTML = numberToTex(dato, "|");
        texto.appendChild(hijo)
    })
})
