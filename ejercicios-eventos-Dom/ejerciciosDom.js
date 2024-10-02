// Ejercicio #1 ocultar y mostrat caja 

const box = document.getElementById("box");
const toggleBtn = document.getElementById("toggleBtn");

// Función para alternar la visibilidad de la caja
function toggleBox(){
    if (box.style.display == 'none'){
        box.style.display = 'block';
        toggleBtn.textContent = 'Ocultar caja';
    }else {
        box.style.display = 'none';
        toggleBtn.textContent = 'Mostrar Caja';
    }
}
// Agregar evento al botón para alternar la visibilidad de la caja
toggleBtn.addEventListener('click', toggleBox);

// Ejercicio #2 Mostrar frases aleatorias mediante JavaScript

let frasesFrikisInformatica = [ "Los programadores no tienen errores, solo experiencias inesperadas.",
    "La programación es como montar en bicicleta: una vez que lo aprendes, nunca lo olvidas.",
    "En la informática, el único límite es la imaginación (y la memoria RAM).",
    "Los programadores no duermen, solo hacen pausas de ejecución.",
    "La mejor forma de resolver un problema es dividirlo en problemas más pequeños.",
    "Programar es como cocinar: a veces, una pizca de creatividad hace la diferencia.",
    "En la programación, cada punto y coma cuenta.",
    "El código es como el vino: mejora con el tiempo (y las revisiones).",
    "La resolución de problemas es la habilidad más importante en la programación.",
    "La informática es como una montaña rusa: emocionante y llena de giros inesperados.",
    "Los programadores no necesitan superpoderes, tienen lenguajes de programación.",
    "La programación es como un laberinto: a veces, tienes que retroceder para avanzar.",
    "Los buenos programadores piensan en código incluso cuando no están programando.",
    "La mejor parte de programar es el momento en que tu código finalmente funciona.",
    "La programación es como una conversación con el ordenador: tienes que hablar su idioma.",
    "Los programadores no comen errores, los depuran.",
    "La programación es como la música: cada línea de código es una nota en la sinfonía.",
    "La creatividad es la clave para resolver problemas de forma elegante en programación.",
    "En la informática, siempre hay una solución, solo necesitas encontrarla.",
    "Programar es como explorar un nuevo mundo, lleno de posibilidades infinitas.",
    "Los programadores no tienen miedo al cambio, solo a los cambios de última hora.",
    "La programación es como un juego de ajedrez: cada movimiento tiene consecuencias.",
    "Los bugs son como las malas hierbas: siempre aparecen cuando menos los esperas.",
    "La programación es como construir castillos de arena: a veces, el mar se lleva tu trabajo.",
    "Los programadores no inventan problemas, solo encuentran soluciones creativas.",
    "La informática es como la alquimia moderna: conviertes código en aplicaciones.",
    "La programación es como resolver un misterio: cada línea de código es una pista.",
    "Los programadores no tienen límites, solo desafíos que superar.",
    "La programación es como escribir poesía: cada palabra cuenta.",
    "Los mejores programas son los que hacen la vida más fácil.",
    "La programación es como un deporte: practica regularmente para mejorar.",
    "La curiosidad es la mejor amiga del programador.",
    "La programación es como una obra de arte: cada línea de código es una pincelada.",
    "Los buenos programadores escriben código legible para humanos, no solo para máquinas.",
    "La programación es como jugar con LEGO: construyes cosas increíbles con pequeñas piezas.",
    "La creatividad es la esencia de la programación: cada problema tiene múltiples soluciones.",
    "La programación es como viajar por el espacio: exploras nuevos mundos de posibilidades.",
    "Los programadores no hacen magia, ¡hacen código!",
    "La programación es como una montaña rusa: llena de altibajos emocionantes.",
    "En la programación, cada error es una oportunidad para mejorar.",
    "La programación es como una partida de ajedrez: cada jugada requiere anticipación y estrategia.",
    "Los programadores no necesitan superpoderes, ¡tienen la capacidad de escribir código!",
    "La programación es como un arte marcial: dominas las técnicas con práctica y disciplina.",
    "En la informática, los problemas son desafíos esperando ser resueltos.",
    "La programación es como construir un castillo de naipes: estable y delicado a la vez.",
    "Los bugs son como las sorpresas: aparecen cuando menos te lo esperas.",
    "La programación es como resolver un enigma: encuentras la solución conectando los puntos.",
    "La programación es como un deporte extremo: emocionante y desafiante.",
    "Los programadores no necesitan saberlo todo, ¡solo saber dónde encontrar la información!",
    "La programación es como un viaje al espacio: exploras nuevos horizontes de conocimiento.",
    "La imaginación es la herramienta más poderosa en la caja de herramientas de un programador.",
    "La programación es como una carrera de obstáculos: superas desafíos para llegar a la meta.",
    "Los buenos programadores no solo resuelven problemas, ¡crean soluciones elegantes!",
    "La programación es como un rompecabezas: ensamblas piezas de código para formar una imagen completa.",
    "La programación es como una sinfonía: cada línea de código es una nota en la partitura del software.",
    "La imaginación es el superpoder secreto de todo programador creativo.",
    "La programación es como una carrera de resistencia: te enfrentas a desafíos constantes para alcanzar tus objetivos.",
    "Los buenos programadores no solo encuentran soluciones, ¡encuentran formas innovadoras de resolver problemas!",
    "La programación es como un juego de construcción: ensamblas bloques de código para crear algo nuevo.",
    "La creatividad es el ingrediente esencial en la receta del éxito en la programación.",
    "La programación es como una partida de ajedrez: cada movimiento requiere planificación estratégica y anticipación de las posibles consecuencias.",
    "La curiosidad es la chispa que enciende el fuego del aprendizaje en la mente de un programador: los programadores curiosos están siempre buscando aprender algo nuevo y emocionante.",
    "La determinación es la fuerza que impulsa a los programadores a perseverar a través de los desafíos y obstáculos en su camino hacia el éxito.", ];
// Función para cambiar el texto de forma aleatoria
function cambiarTexto (){
    //onteniendo un indice aleatorio del array de lista
    let indice = Math.floor(Math.random()*frasesFrikisInformatica.length);
    // mostrando el texto del elemento 
    let texto = document.getElementById("texto-informatica");
    // cambiando el contenido del elemento con una frase aleatoria
    texto.textContent = frasesFrikisInformatica[indice];
};

// Asignar evento al boton 
const btn2 = document.getElementById("ver-mas-boton");
btn2.addEventListener('click', cambiarTexto);


// Ejercicio # 3Agregar tareas a un listado mediante JavaScript

// selecionar elementos del DOM
const newTaskInput = document.getElementById("newTaskInput");
const addTaskBtn = document.getElementById("addTaskBtn");
const  taskList = document.getElementById("taskList");
// funcion para agregar tareas
function addTask(){
    // obtener el valor del input
    const newTaskInputValue = newTaskInput.value;
    // verificar que el campo de texto no este vacio
    if(newTaskInputValue == ""){
        alert("Por favor ingrese una tarea");
    }else{
        // crear un elemento li
        const newTask = document.createElement("li");
        // agregar el texto al elemento li
        newTask.textContent = newTaskInputValue;
        // agregar boton para eliminar tareas con el texto x
        const deleteButoon = document.createElement("button");
        deleteButoon.textContent = "X";
        deleteButoon.addEventListener('click', ()=>{
            newTask.remove();
    });
    // agrgar clase al boton eliminar
    deleteButoon.classList.add ("deleteBtn");   
        newTask.appendChild(deleteButoon); 
        // agregar el elemento li al listado
        taskList.appendChild(newTask);
        // limpiar el campo de texto
        newTaskInput.value = "";

}};


addTaskBtn.addEventListener('click', addTask);






