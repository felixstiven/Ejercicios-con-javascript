// crear una funcion que al pasrle como parametro la materia noa rroje-
// -profesor asignado y el nombre de todos los alumnos.

// 2: crear una funcion que nos diga en cuntas clases esta daniel
// 3: nombrar las calses en las que esta y los profesores de cada una.

const obtenerInformacion = (materia)=>{
    materias = {
        fisica:["mario","pedro","luiz","jorge","daniel"],
        matematicas:["stiven","alvis","rubiela","yeimy","jessica"],
        ingles:["felix","alexandra","luiz","jorge","daniel"],
        quimica:["leidy","carlos","jose","miguel","daniel"]
    }
    if(materias[materia] !== undefined){
        return [materias[materia],materia,materias];
    }else{
        return materias;
    }
} 

const mostrarInformacion = (materia)=>{
    let informacion = obtenerInformacion(materia);

if (informacion !==false){
    let profesor = informacion[0][0];
    alumnos = informacion[0];
    alumnos.shift();
    document.write (`el profesor de <b>${informacion[1]}</b> es : <b style="color:red">${profesor}</b><br>
        los alumnos son: <b style="color:blue">${alumnos}</b><br> <br>
        `);
}    
}

const cantidadDeClases = (alumno)=>{
    let informacion = obtenerInformacion()
    let clasesPresentes = [];
    let cantidaTotal = 0;
    for (info in informacion){
        if(informacion[info].includes(alumno)){
            cantidaTotal++;
            clasesPresentes.push("" + info);
        }
    }
    return ` <b style="color:blue"> ${alumno}</b> esta en <b>${cantidaTotal} clases: <b style="color:green"> ${clasesPresentes}</b> </b><br>`
}


mostrarInformacion ("fisica");
mostrarInformacion ("matematicas");
mostrarInformacion ("ingles");
mostrarInformacion ("quimica");

document.write(cantidadDeClases("daniel"))
document.write(cantidadDeClases("stiven"))