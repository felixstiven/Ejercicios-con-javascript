const entradaNumero = document.getElementById("num")
const btn = document.getElementById("btn")
const texto = document.getElementById("texto")


function pares(n){
    return n%2==0
}

entradaNumero.addEventListener("input",(evento)=>{
    numero= evento.target.value
    console.log(numero)
})

btn.addEventListener("click",()=>{
    let esPar = pares(numero);
    if( esPar){
        let hijo = document.createElement("h3");
        hijo.innerHTML = ("este numero es par ")
        texto.appendChild(hijo)
    }else{
        let hijo = document.createElement("h3");
        hijo.innerHTML = ("  este numero no es par ") 
        texto.appendChild(hijo)
    }
})