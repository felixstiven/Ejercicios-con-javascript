const form = document.getElementById("transactionForm")


form.addEventListener("submit", function(event){
    event.preventDefault();
    let transactionFormData = new FormData(form);
    let transactionObj = convertFormDataToTransationObj(transactionFormData);
    saveTransactionObj(transactionObj)
    insertRowInTransactionTable(transactionObj)

})

document.addEventListener("DOMContentLoaded", function(event){
    let transactionObjArr = JSON.parse(localStorage.getItem("transactionData"));
    transactionObjArr.forEach(
        function (arrayElement){
            insertRowInTransactionTable(arrayElement)
        }
    )
})

function convertFormDataToTransationObj(transactionFormData){
    let transactionType = transactionFormData.get("transactionType");
    let transactionDescription = transactionFormData.get("transactionDescription");
    let transactionAmount = transactionFormData.get("transactionAmount");
    let transactionCategory = transactionFormData.get("transactionCategory");
    return {
        "transactionType": transactionType,
        "transactionDescription": transactionDescription,
        "transactionAmount": transactionAmount,
        "transactionCategory": transactionCategory
    }
}

function insertRowInTransactionTable(transactionObj){
    let transactionTableRef = document.getElementById("transactionTable");

    let newTransactionRowRef = transactionTableRef.insertRow(-1);

    let newTypeCellRef = newTransactionRowRef.insertCell(0);
    newTypeCellRef.textContent = transactionObj["transactionType"];

    newTypeCellRef = newTransactionRowRef.insertCell (1);
    newTypeCellRef .textContent = transactionObj["transactionDescription"];

    newTypeCellRef = newTransactionRowRef.insertCell (2);
    newTypeCellRef .textContent = transactionObj["transactionAmount"];

    newTypeCellRef = newTransactionRowRef.insertCell (3);
    newTypeCellRef .textContent = transactionObj["transactionCategory"];
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