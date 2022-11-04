 //That's how eval work
 /*
 var number = "123+7"
 console.log(number)
 var risultato = eval(number)
 console.log(risultato)
                       */
 
 function n(dato){ 
   document.querySelector("#operazioni").value += dato 
}

function operazione() { 
console.log("Operazione: " + document.querySelector("#operazioni").value)
document.querySelector("#operazioni").value = eval(document.querySelector("#operazioni").value) 
console.log("Risultato: " + document.querySelector("#operazioni").value)
}

function cancella() { 
console.log("**Display cleared**")
document.querySelector("#operazioni").value = ""
}
