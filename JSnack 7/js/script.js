/*JSnack 7
Stampa le potenze di 2 fino a 1000.*/

for(let i = 0; i <= 1000; i++){

  const num = Math.pow(2, i);

  let message =`Sono state calcolate tutte le potenze di 2^${i} = ${num}
  `
  // non so se il risultato sia corretto
  document.getElementById('output').innerHTML = message;
}
