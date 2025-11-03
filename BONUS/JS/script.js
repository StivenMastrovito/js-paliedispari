// Bonus:
// Come creare una funzione che dato una frase si capitalizzano tutte le parole di questa frase
// "pippo studia sviluppo web" --->  "Pippo Studia Sviluppo Web"


// Nome: allCapitalize.
// Parametri: la frase da capitalizzare.
// Return: la frase capitalizzata.
function allCapitalize(frase) {
    // Comincio con capitalizzare la prima lettera
    let fraseCapitalize = frase[0].toUpperCase();
    // ciclo per scorrere tutta la frase
    for (let i = 1; i < frase.length; i++) {
        // confronto per capire quando si interrompe una parola e ne inizia un altra
        // ed entro nel blocco tranne se ci sono due spazi consegutivi
        if (frase[i] === " " && frase[i + 1] !== " ") {
            // rendo la lettera successiva allo spazio maiuscola
            currentLetter = frase[i + 1].toUpperCase();
            // concateno la frase gia controllata con la nuova lettera capitalizzata aggiunta
            fraseCapitalize = fraseCapitalize + " " + currentLetter;
            // mando avanti il ciclo per evitare che venga ricontrollata la lettera gia capitalizzata
            i++;
        }else{ // se la lettera corrente non è uno spazio quindi non c'è un intervallo di parole entro in questo blocco 
            // trasformo le altre lettere della parole in minuscolo (else opzionale se si vuole tenere solo le prime lettere in maiuscolo)
            currentLetter = frase[i].toLowerCase();
            //concateno per continuare a scrivere la nuova frase capitalizzata
            fraseCapitalize = fraseCapitalize + currentLetter;
        }
    }
    // ritorno la frase capitalizzata
    return fraseCapitalize;
}

// Input
const frase = prompt("Inserisci una frase da capitalizzare: ");
// Elaborazione
    // Invocazione
const result = allCapitalize(frase);
// Output
console.log(result);
