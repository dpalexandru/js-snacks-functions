/* Scrivi una funzione che accetti un array di nomi e restituisca nuovo un array con le iniziali di ogni parola dell'array fornito */

const names = ["Anna", "Luca", "Marco", "Adele", "Giovanni", "Alessandra"];

// Dichiara la funzione qui.
const soloIniziali = (nomi) => {
  const iniziali= [];

  for (i=0; i<nomi.length; i++) {
    let primaLettera = nomi[i].charAt(0);
    iniziali.push(primaLettera);
  }
  return iniziali;
}

// Invoca la funzione qui e stampa il risultato in console

const result = soloIniziali(names);

//Risultato atteso: ["A", "L", "M", "A", "G", "A"]

console.log(`Array originale: ${names}`)
console.log(`Solo iniziali: ${result}`)