// Palidroma
// Chiedere all’utente di inserire una parola
// Creare una funzione per capire se la parola inserita è palindroma
//  (NON usare split, reverse e join)

// Nome: isPalindroma
// Parametri: la parola da controllare
// Return: se si o no (boolean)
function isPalindroma(word){
    let wordPalindroma = "";
    for(let i = word.length - 1; i >= 0; i--){
        wordPalindroma = wordPalindroma + word[i];
    }
    const result = word.toLowerCase() === wordPalindroma.toLowerCase();
    return result;
}

const word = prompt("Inserisci una parola e verifica se è palindroma.");

const result = isPalindroma(word);
console.log(result);

