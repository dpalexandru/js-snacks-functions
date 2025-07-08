/* Scrivi una funzione che accetti un'array di stringhe e una lettera e restituisca un array contenente solo le parole che iniziano con quella lettera */

const names = ["Anna", "Luca", "Marco", "Adele", "Laura", "Alessandra"];
const filtro = "a"

// Dichiara la funzione qui.

const filtraggioIniziali = (nomi, iniziale) => {
  let filtroIniziali = [];
 
   for (i=0; i<nomi.length; i++) {
    if (iniziale.toLowerCase() === nomi[i].charAt(0).toLowerCase()) {
      filtroIniziali.push(nomi[i]);  
      }
   }
  return filtroIniziali;
}


// Invoca la funzione qui e stampa il risultato in console

const result = filtraggioIniziali(names,filtro)
console.log(result);

//Risultato atteso se si passa la lettera A: ["Anna", "Adele", "Alessandra"]