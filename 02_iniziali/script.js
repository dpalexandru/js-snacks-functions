/* Scrivi una funzione che accetti un array di nomi e restituisca nuovo un array con le iniziali di ogni parola dell'array fornito */

const names = ["Anna", "Luca", "Marco", "Adele", "Giovanni", "Alessandra"];
const iniziali= [];

// Dichiara la funzione qui.
const soloIniziali = (nomi) => {
  for (i=0; i<nomi.lenght; i++)[
    let primaLettera = nomi[i].charAt(0);
    iniziali.push(primaLettera);
  ]
}


// Invoca la funzione qui e stampa il risultato in console



//Risultato atteso: ["A", "L", "M", "A", "G", "A"]