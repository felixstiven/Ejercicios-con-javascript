// function palindromo(palabra){
    
//     let palabraPartida = palabra.split("")
//     let alReves = palabraPartida.reverse()
//     let junrtoDeNuevo = alReves.join("")

//     console.log(palabraPartida)
//     return juntosDeNuevo
// }

// function reFactPalindromo(palabra){
//     let alReves = palabra
//                 .split("")
//                 .reverse()
//                 .joint("")               
// }

// chistes malo es este codigo 
// const btnchiste = document.getElementById("btnChiste");
// const chiste = document.getElementById("chiste");

// btnchiste.addEventListener("click", generateJoke);


// async function generateJoke (){
//     const res =  await fetch('https://icanhazdadjoke.com/', {
//         headers:{
//             'Accept':'application/json'
            
            
//         }
//     })
//     const data = await  res.json();
//     chiste.innerHTML = data.joke;
//     console.log(data);
// }










// const entrada = document.getElementById("entrada");
// const btn = document.getElementById("btn")
// const texto = document.getElementById("texto")

// let n = 0
// entrada.addEventListener("input",(event)=>{ 
//     n = event.target.value
//     console.log(n)   
// })

// btn.addEventListener("click",()=>{
//     for(let i =2 ; i<=n; i++){
//         if(n%i==0){
//             if(i==n){
//                 console.log(n, "es primo")
//                 texto.innerHTML = `${n} es un numero primo`
            
//             }else{
//                 console.log(n, "no es primo")
//                     texto.innerHTML =`${n} no es numero primo`
//                 return
//             }
//         }
//         console.log(i)
//     }
// })


// const valor = document.getElementById("num");
// const btn = document.getElementById("bnt")

// let n = 0

// valor.addEventListener("input",(event)=>{
//     n=event.target.value
//     console.log(n);
// })









