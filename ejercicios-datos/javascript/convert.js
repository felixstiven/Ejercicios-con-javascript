

const changeInput = (event) => {
    const reader = new FileReader();
    // ingresamos a nuestro archivo posicion y lo leemos como arraybufer
    reader.readAsArrayBuffer(event.target.files[0]); 

    reader.onload = (event) => {
        // leyendo datos  convertir datos de array en 8 bits  lo vuelve manipulable
        const data = new Uint8Array(event.target.result); 
        // Utilizamos libreria para leer cada hoja de excel completa. 
        //le mandamos un objeto especifica el tipo de dato en este caso es array
        const libro = XLSX.read(data, {
            type: "array"
        });
        
        // nombre de las hojas de excel llamamos la primera hoja de excel
        const nombreHoja = libro.SheetNames[0];
        // leer la hoja que llamamos
        const hoja = libro.Sheets[nombreHoja];
        // con la libreria covertimos la hoja de excel a json 
        const dataJson = XLSX.utils.sheet_to_json(hoja);

        console.log(nombreHoja, dataJson);
        
    }

}



document.addEventListener("DOMContentLoaded", () => {
    const input = document.getElementById("inputfile");
    input.addEventListener("change", changeInput )
})