/*******************************************************************************
​
    Per questo esercizio, rispondi a queste domande:
    1- Che cosa fa questo codice?
    2- Sono presenti errori di sintassi?
    3- Sono presenti errori logici?
​
    Inserisci i tuoi commenti con le risposte alla fine dell'esercizio
​
*******************************************************************************/


// ESERCIZIO 1
function checkAge() {
    const myAge = 32;
    const message = '';

    if (myAge < 18) {
        message = `Sei troppo giovane! Hai ${myAge} anni!`;
    } else {
        message = 'Hai più di 18 anni!';
    }
}
checkAge();

/* Il primo errore che notiamo è di tipo logico. Lo scopo della funzione è quello
di dichiarare se l'utente è maggiorenne o minorenne. Quindi myAge non ha senso di essere
una costante dichiarata all'interno della funzione ma bensì un argomento.
La const message in quanto verrà riscritta, deve essere dichiarata con let.
Manca inoltre il return di message. Sarebbe anche corretto in base alla propria interpretazione
inserire un altra condizione nella quale l'utente ha 18 anni, e viene assegnato "Sei maggiorenne!".
E una condizione di controllo, altrimenti message di default sarà sempre "Hai più di 18 anni!".
Di seguito il codice corretto:

function checkAge(myAge) {
    let message = '';

    if (myAge < 18) {
        message = `Sei troppo giovane! Hai ${myAge} anni!`;
    } else if (myAge === 18) {
        message = "Sei maggiorenne!"
    } else if (myAge > 18) {
        message = 'Hai più di 18 anni!';
    } else {
        message = "Inserisici un valore valido!"
    }
    return message;
}
checkAge();
*/

// ESERCIZIO 2
function printColorsNumber() {
    const colors = ['blue', 'red', 'yellow', 'green', 'black'];
    console.log(`Nella mia palette ci sono ${colors.lenght} colori!`);
}
printColorsNumber();

/* L'errore che salta all'occhio è ortografico ed è la "h" prima della "t" nella
proprietà "length".
Di seguito il codice corretto:

function printColorsNumber() {
    const colors = ['blue', 'red', 'yellow', 'green', 'black'];
    console.log(`Nella mia palette ci sono ${colors.lenght} colori!`);
}
printColorsNumber();
*/


// ESERCIZIO 3
function addNumbers() {
    const userNumber = prompt('Inserisci un numero');
    const total = userNumber + 12;

    console.log(`Il risultato finale è ${total}`);
}
addNumbers();

/* L'errore è il valore passato per prompt sarà sempre una stringa.
Quindi prima di eseguire l'addizione bisogna trasformarlo in numero.
Per farlo possiamo:
- passare il prompt come argomento alla funzione Number();
- passarlo alla funzione parseInt();
- passarlo alla funzione parseFloat() se vogliamo anche i decimali;
- aggiungere "+" prima del prompt.

Di seguito il codice corretto con l'ultima alternativa:

function addNumbers() {
    const userNumber = +prompt('Inserisci un numero');
    const total = userNumber + 12;

    console.log(`Il risultato finale è ${total}`);
}
addNumbers();
*/


// ESERCIZIO 4
function checkAccess() {
    const addresses = ['mymail@mail.com', 'yourmail@mail.com', 'hermail@mail.com', 'hismail@mail.com'];
    const userEmail = prompt('Inserisci il tuo indirizzo email');

    let grantAccess = 'false';

    if (addresses.includes(userEmail)) {
        grantAccess = 'true';
    }

    if (grantAccess === true) {
        console.log('Accesso consentito!');
    } else {
        console.log('Accesso negato!');
    }
}
checkAccess();

/* 
Gli errori presenti sono due, a riga 105 e a riga 108 dove gli operatori booleani sono scritti
sotto forma di stringa, mentre dovrebbero essere scritti senza virgolette o apici.
Una risoluzione più veloce sarebbe stata quelle di trasformare a sua volta in stringa
a riga 111 il "true", ma sarebbe stato sbagliato a livello logico perché magari quell'operatore
booleano ci potrebbe servire anche per altro.
Di seguito il codice corretto:

function checkAccess() {
    const addresses = ['mymail@mail.com', 'yourmail@mail.com', 'hermail@mail.com', 'hismail@mail.com'];
    const userEmail = prompt('Inserisci il tuo indirizzo email');

    let grantAccess = false;

    if (addresses.includes(userEmail)) {
        grantAccess = true;
    }

    if (grantAccess === true) {
        console.log('Accesso consentito!');
    } else {
        console.log('Accesso negato!');
    }
}
checkAccess();
*/


// ESERCIZIO 5 (suggerimento: c'è un solo errore)
function checkAccessImproved() {
    const addresses = ['mymail@mail.com', 'yourmail@mail.com', 'hermail@mail.com', 'hismail@mail.com'];

    const userEmail = prompt('Inserisci il tuo indirizzo email');

    let grantAccess = 'false';

    for (let i = 0; i < addresses.length; i++) {
        const email = addresses[i];

        if (userEmail.length > 5) {

            if (email === userEmail) {
                grantAccess = 'true';

            }

        }

        if (grantAccess) {
            console.log('Accesso consentito!');
        } else {
            console.log('Accesso negato!');
        }
    }
    checkAccessImproved();

/* C'è più di 1 errore.
A riga 172 manca "}" per chiudere la funzione.
A riga 153 e 161 togliamo gli apici dagli operatori booleani.
Portiamo fuori l'if di riga 167 fuori dal ciclo, altrimenti il messaggio
di accesso verrà stampato tante volte quante la lunghezza dell'array.
Di seguito il codice corretto:

function checkAccessImproved() {
const addresses = ['mymail@mail.com', 'yourmail@mail.com', 'hermail@mail.com', 'hismail@mail.com'];

const userEmail = prompt('Inserisci il tuo indirizzo email');

let grantAccess = false;

for (let i = 0; i < addresses.length; i++) {
    const email = addresses[i];

    if (userEmail.length > 5) {

        if (email === userEmail) {
            grantAccess = true;

        }

    }

    
}
if (grantAccess) {
        console.log('Accesso consentito!');
    } else {
        console.log('Accesso negato!');
    }
}
checkAccessImproved();
*/





























