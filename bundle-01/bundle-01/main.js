/*******************************************************************************

    Per ognuno dei seguenti esercizi, rispondi a queste domande:
    1- Che cosa fa questo codice?
    2- Sono presenti errori di sintassi?
    3- Sono presenti errori logici?

    Inserisci i tuoi commenti con le risposte, sotto ciascun esercizio

*******************************************************************************/


// ESERCIZIO 1
for (let i = 0; i > 5; i++) {
    console.log(i);
}

/* Il ciclo dovrebbe permetterci di stampare i numeri da 0 a 4, 
ma questo non è possibile perché l'operatore usato è ">", invece dovrebbe essere "<". 
Di seguito il codice corretto: 

for (let i = 0; i > 5; i++) {
    console.log(i);
}

*/


// ESERCIZIO 2
function addIfEven(num) {
    if (num % 2 = 0) {
        return num + 5;
    }
    return num;
}

/* La logica di questo funzione, in base al nome, dovrebbe essere quella di
aggiungere un numero, in questo casos 5, a quello passato dentro l'argomento,
solo se quest'ultimo è pari. L'errore in questo caso è che l'operatore di uguaglianza
svolge una riassegnazione, mentre dovrebbe avere una funzione comparativa.
Anche il return nel caso la condizione non si verifichi non ha tanto senso.
Ci restituisce il numero in input, mentre dovremmo fare capire all'utente che il numero
inserito è dispari e quindi non sarà possibile effettuare l'operazione di addizione.
Di seguito il codice corretto:

function addIfEven(num) {
    if (num % 2 === 0) {
        return num + 5;
    }
    return console.log("Can't proceed due to odd input number.");
} */


// ESERCIZIO 3
function loopToFive() {
    for (let i = 0, i < 5, i++) {
        console.log(i);
    }
}

/* Il primo errore salta subito all'occhio in quanto io sono il primo a farlo, ed è quello
di inserire "," invece di ";" come separatore nella dichiarazione del ciclo for.
Mentre il secondo errore riguarda l'operatore utilizzato, in quanto la nostra funzione
fa intendere di ciclare fino a 5. Questo non è possibile perché l'operatore è "<",
quando dovrebbe essere "<=".
Di seguito il codice corretto:

function loopToFive() {
    for (let i = 0; i <= 5; i++) {
        console.log(i);
    }
}

*/


// ESERCIZIO 4 (suggerimento: ci sono 7 errori)
function displayEvenNumbers() {
    let numbers = [1, 2, 3, 4, 5, 6, 7, 8];
    let evenNumbers = [];
    for (let i = 0; i < numbers.length - 1; i++;) {
        if (numbers % 2 = 0); {
            evenNumbers.push(i);
        }
        return evenNumbers;
    }
}
displayEvenNumbers(); // dovrebbe restituire [2,4,6,8]

/* Gli array dichiarati nella funzione possono essere anche di tipo
const (ma non è un errore).

Errore 1: riga 81 - il "-1" è sbagliato in quanto vogliamo ciclare tutto l'array.
Errore 2: riga 81 - dopo i++ è sbagliato mettere il ";".
Errore 3: riga 82 - è necessario "===".
Errore 4: riga 82 - la condizione deve riferisi all'indice dell'array e non all'array intero.
Errore 5 - riga 82 - dopo la condizione è sbagliato mettere il ";".
Errore 6 - riga 83 - stessa cosa per il push.
Errore 7 - riga 85 - il return deve essere invocato fuori dal ciclo.

Di seguito il codice corretto:

function displayEvenNumbers() {
    let numbers = [1, 2, 3, 4, 5, 6, 7, 8];
    let evenNumbers = [];
    for (let i = 0; i < numbers.length; i++) {
        if (numbers[i] % 2 === 0) {
            evenNumbers.push(numbers[i]);
        }
        
    }
    return evenNumbers;
}
*/