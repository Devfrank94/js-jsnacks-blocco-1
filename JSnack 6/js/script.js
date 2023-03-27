/*JSnack 6
Stampa il cubo dei primi N numeri, dove N è un numero indicato dall’utente.*/

const numIns = parseInt(prompt("inserisci un numero"));

let cubo = numIns * numIns * numIns;

const message = `Il cubo del numero inserito è ${cubo}`;

document.getElementById('output').innerHTML = message;