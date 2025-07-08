/* Scrivi una funzione che accetti una stringa contenente un nome e restituisca un saluto seguito dal nome fornito. 
Il saluto deve essere :
buongiorno se è mattina (fino alle 13), 
buon pomeriggio se è pomeriggio (fino alle 17) 
e buonasera se è sera (oltre le 17)
*/

const name = 'Alex';

console.log ('------Orario Modificabile------')

// Dichiara la funzione qui.

const saluto = (nome , orario) => {
  if (orario >= 13 && orario <= 17) {
    console.log (`Buon pomeriggio ${nome}`)
  } else if (orario < 13) {
    console.log (`Buongiorno ${nome}`)
  } else {
    console.log (`Buonasera ${nome}`)
  }
}

// Invoca la funzione qui e stampa il risultato in console
const ora = 14; 
saluto(name, ora); 

//Risultato atteso se si passa 'Mario' alle 18: // Buonasera Mario.

// Prova con orario vero 

console.log ('------Orario Vero------')
const oraVera = new Date().getHours();
console.log (`Ora sono le: ${oraVera} `)
saluto(name, oraVera); 


