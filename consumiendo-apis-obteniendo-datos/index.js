

/** en este ejercicio se va a realizar un consumo y obtecion de apis y datos*/

async function obtenerData(){
    const response = await fetch("http://127.0.0.1:5500/consumiendo-apis-obteniendo-datos/data.json");
    const Json = await response.json();
    console.log(Json)
}
obtenerData();