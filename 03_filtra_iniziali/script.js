/* Scrivi una funzione che accetti un'array di stringhe e una lettera e restituisca un array contenente solo le parole che iniziano con quella lettera */

const names = ["Anna", "Luca", "Marco", "Adele", "Laura", "Alessandra"];
const flitro = "a"

// Dichiara la funzione qui.

const filtraggioIniziali = (nomi, iniziale) => {
  let filtroIniziali = [];
 
   for (i=0; nomi.length; i++);{
    if (iniziale = nomi[i].charAt(0)){
      filtroIniziali = nomi[i];
    }
   }
  
}


// Invoca la funzione qui e stampa il risultato in console



//Risultato atteso se si passa la lettera A: ["Anna", "Adele", "Alessandra"]