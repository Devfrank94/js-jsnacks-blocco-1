/*JSnack 5
Crea un array vuoto.
Chiedi per 6 volte all’utente di inserire un numero,
se è dispari inseriscilo nell’array */

const array = [];
let numIns;
const output = document.getElementById('output');

let i = 0;

for (let i = 0; i < 6; i++) {
  let numIns = parseInt(prompt("Scrivi un numero"));
  
  if (numIns % 2) array.push(numIns)
}
console.log(array)

const message = `I numeri dispari da te inseriti sono ${array}`;
document.getElementById('output').innerHTML = message;