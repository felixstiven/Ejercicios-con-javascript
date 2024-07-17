
const entrada = document.getElementById("entrada");
const btn = document.getElementById("btn")
const texto = document.getElementById("texto")


function bltfitz(n){
        salida = []
    for(let i = 1; i<=n; i++){
        if(i%3 == 0 & i%5 == 0){
            salida.push("FitzbBtz")
        } else if( i%3 == 0){
            salida.push("Fitz")
        }else if (i%5 == 0){
            salida.push("Bitz")
        }
    }
    return salida
}


entrada.addEventListener("input",(event)=>{ 
    numero = event.target.value
    console.log(numero)
    
})

btn.addEventListener("click",()=>{
    let secuencia = bltfitz(numero);
    secuencia.forEach((dato)=>{
        let hijo = document.createElement("p");
        hijo.innerHTML = dato 
        texto.appendChild(hijo)
    })
})
