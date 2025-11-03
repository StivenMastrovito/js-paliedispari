// Pari e Dispari
// L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
// Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
// Sommiamo i due numeri
// Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
// Dichiariamo chi ha vinto.

// Nome: randomNum5
// Parametri: non ci sono
// Return: numero generato (number)
function randomNum5(){
    return Math.floor(Math.random() * 5) + 1;
}

// Nome: isEven
// Parametri: la somma
// Return: se pari o no (boolean)
function isEven(somma){
    let result = "dispari";
    if(somma % 2 === 0){
        result = "pari";
    }
    return result;
}

// L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
const evenOrOddUser = prompt("Scegli se giocare con pari o dispari.");
const numUser = parseInt(prompt("Scegli un numero da 1 a 5."));

// Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
const numRandom = randomNum5();
console.log("Il numero casuale è " + numRandom);

// Sommiamo i due numeri
const somma = numUser + numRandom;
console.log("Quindi la tua somma è " + somma);

// Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
const result = isEven(somma);

// Dichiariamo chi ha vinto.
if(evenOrOddUser.toLowerCase() === result){
    console.log("Hai vinto!!");
}else{
    console.log("Hai perso!!");
}
