const form = document.getElementById("transactionForm")


form.addEventListener("submit", function(event){
    event.preventDefault();
    const dataDescription = form.transactionDescription.value ;
    
    if (dataDescription){
        let transactionFormData = new FormData(form);
        let transactionObj = convertFormDataToTransationObj(transactionFormData);
        saveTransactionObj(transactionObj);
        insertRowInTransactionTable(transactionObj);
        form.reset()
    } else{
        alert("Ingeresar una Descripcion")
    }
})

document.addEventListener("DOMContentLoaded", function(event){
    let transactionObjArr = JSON.parse(localStorage.getItem("transactionData"));
    transactionObjArr.forEach(
        function (arrayElement){
            insertRowInTransactionTable(arrayElement)
        }
    )
})

function getNewTransactionId(){
    let lastTransactionId = localStorage.getItem("lastTransactionId") || "-1";
    let newTransactionId = JSON.parse(lastTransactionId) + 1;
    localStorage.setItem("lastTransactionId", JSON.stringify(newTransactionId))
    return newTransactionId;

}

function convertFormDataToTransationObj(transactionFormData){
    let transactionReferencia = transactionFormData.get("transactionReferencia");
    let transactionType = transactionFormData.get("transactionType");
    let transactionDescription = transactionFormData.get("transactionDescription");
    let transactionAmount = transactionFormData.get("transactionAmount");
    let transactionCategory = transactionFormData.get("transactionCategory");
    let transactionSeguimiento = transactionFormData.get("transactionSeguimiento");
    let transactionTrimestre = transactionFormData.get ("transactionTrimestre");
    let transactionEstado = transactionFormData.get("transactionEstado")
    let transactionId = getNewTransactionId();
    return {
        "transactionReferencia" : transactionReferencia,
        "transactionType": transactionType,
        "transactionDescription": transactionDescription,
        "transactionAmount": transactionAmount,
        "transactionCategory": transactionCategory,
        "transactionSeguimiento" : transactionSeguimiento,
        "transactionTrimestre" : transactionTrimestre,
        "transactionEstado" : transactionEstado,
        "transactionId": transactionId
    }
}

function insertRowInTransactionTable(transactionObj){
    let transactionTableRef = document.getElementById("transactionTable");

    let newTransactionRowRef = transactionTableRef.insertRow(-1);
    newTransactionRowRef.setAttribute("data-transaction-id", transactionObj ["transactionId"]);


    let newTypeCellRef = newTransactionRowRef.insertCell(0);
    newTypeCellRef.textContent = transactionObj["transactionReferencia"];

    newTypeCellRef = newTransactionRowRef.insertCell(1);
    newTypeCellRef.textContent = transactionObj["transactionType"];

    newTypeCellRef = newTransactionRowRef.insertCell (2);
    newTypeCellRef .textContent = transactionObj["transactionDescription"];

    newTypeCellRef = newTransactionRowRef.insertCell (3);
    newTypeCellRef .textContent = transactionObj["transactionAmount"];

    newTypeCellRef = newTransactionRowRef.insertCell (4);
    newTypeCellRef .textContent = transactionObj["transactionCategory"];

    newTypeCellRef = newTransactionRowRef.insertCell (5);
    newTypeCellRef .textContent = transactionObj["transactionSeguimiento"];

    newTypeCellRef = newTransactionRowRef.insertCell (6);
    newTypeCellRef .textContent = transactionObj["transactionTrimestre"];

    newTypeCellRef = newTransactionRowRef.insertCell (7);
    newTypeCellRef .textContent = transactionObj["transactionEstado"];

    let newDeletCell = newTransactionRowRef.insertCell(8);
    let deleteButton = document.createElement("button");
    deleteButton.textContent = "eliminar";
    newDeletCell.appendChild(deleteButton)

    deleteButton.addEventListener("click", (event) =>{
        let transactionRow = event.target.parentNode.parentNode;
        let transactionId = transactionRow.getAttribute("data-transaction-id");
        transactionRow.remove();
        deleteTransactionObj(transactionId)
    })
}   


// le paso como parametro el transactionId de la transaccion que quiero eliminar
function deleteTransactionObj(transactionId){
    // obtengo lo que hay en mi base de datos (Desconvierto de json a objecto)
    let transactionObjArr = JSON.parse(localStorage.getItem("transactionData"));
       // Busco el indicie/ la posisicion de mi base de datos que quiero eliminar
    let transactionIndexInArray = transactionObjArr.findIndex(element => element.transactionId === transactionId);
    // Elimino el elemento de esa posicion 
    transactionObjArr.splice(transactionIndexInArray, 1)
        // convierto de objecto a Json
    let transactionArrayJSON = JSON.stringify(transactionObjArr );
    // guardo mi array de transaccion en formato JSON en el local storage
    localStorage.setItem("transactionData", transactionArrayJSON)

}

function saveTransactionObj(transactionObj){
    let myTransactionArray = JSON.parse(localStorage.getItem("transactionData")) || [];
    myTransactionArray.push(transactionObj);
    // convierto mi array de transaccion a json
    let transactionArrayJSON = JSON.stringify(myTransactionArray);
    // guardo mi array de transaccion en formato JSON en el local storage
    localStorage.setItem("transactionData", transactionArrayJSON)
}




//   <!-- si son entre las 7 de la mañana y las 11:59 deci "Buenos dias" -->
//   <!-- si estamos entre las 12 y las 18 deci "Buenas tardes" -->
//   <!-- si estamos entre las 19 y las 23:59 deci "Buenas noches" -->



// function saludar(nombre, apellido){
//         console.log("Hola " + nombre + "" + apellido);
//         var fechaYHoraActual = new Date();
//         var horaActual = fechaYHoraActual.getHours();
//         var firstPartMessage ="";

//         if (horaActual > 1 && horaActual <=12 ){
//             firstPartMessage = "Buenas dias, "
//         }

        
//         if (horaActual > 12 && horaActual <=18 ){
//             firstPartMessage = "Buenas tardes, "
//         }

//         if (horaActual > 18 && horaActual <=24 ){
//             firstPartMessage = "Buenas noches, "
//         }   
        
//         console.log(firstPartMessage + "" + nombre + apellido);
//     var divSaludar = document.getElementById("esteDivSeLlamaSaludar");
//     divSaludar.innerText = firstPartMessage + "" + nombre +"" + apellido;
//     // saludar("damian ", "perez")
//     // saludar("stiven ", "felix")
//     // saludar("damian ", "alvis")
//     }