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


// ESERCIZIO 1 (suggerimento: ci sono 6 errori)
const cars = [
    {
        manufacturer: 'Ford',
        model: 'Fiesta',
        type: 'diesel'
    },
    {
        manufacturer: 'Audi',
        model: 'A1',
        type: 'benzina'
    },
    {
        manufacturer: 'Volkswagen',
        model: 'Golf',
        type: 'Benzina'
    },
    {
        manufacturer: 'Fiat',
        model: 'Panda',
        type: 'metano'
    },
    {
        manufacturer: 'Fiat',
        model: 'Multipla',
        type: 'GPL'
    },
    {
        manufacturer: 'Tesla',
        model: 'Model 3',
        type: 'elettrico'
    },
    {
        manufacturer: 'Volkswagen',
        model: 'Polo',
        type: 'benzina'
    },
    {
        manufacturer: 'Ford',
        model: 'Kuga',
        type: 'Diesel'
    },
    {
        manufacturer: 'Seat',
        model: 'Ibiza',
        type: 'metano'
    }
    {
        manufacturer: 'Audi',
        model: 'R8',
        type: 'Benzina'
    },
];

const gasolineCars = cars.filter((auto) >= auto.type === 'benzina');

const dieselCars = cars.filter((auto) => {
    auto.type === 'diesel';
});

const otherCars = cars.filter((auto) => {
    return auto.type !== 'benzina' || auto.type !== 'diesel';
});

console.log('Auto a benzina');
console.log('*******************************');
console.log(gasolineCars);

console.log('Auto a diesel');
console.log('*******************************');
console.log(dieselCars);

console.log('Tutte le altre auto');
console.log(otherCars);

/* 
Errore 1: A riga 47 manca una virgola dopo il penultimo oggetto.
--- Possiamo eventualmente toglierla anche dopo l'ultimo oggetto.

Errore 2: la arrow function a riga 67 è scirtta male, dovrebbe essere "=>" e non ">=";

Errore 3: considerando che nel nostro array di oggetti il valore "benzina", 
così come "diesel"è scritto sia tutto minuscolo, che con la prima lettere maiuscola, 
onde evitare errori possiamo usare il metodo toLowerCase() appena dopo aver dichiarato 
il nostro array di oggetti, per modificare la chiave type. Possiamo farlo con un ciclo forEach."

Errore 4: A riga 69, dieselCars sarà vuoto perché è sbagliata la struttura della funzione. 
Possiamo scriverla analogamente alla funzione gasolineCars dove abbiamo un return implicito
senza {}, oppure aggiungere a riga 70 "return" prima della condizione.

Errore 5: A riga 73 dobbiamo sostituire || con && perchè la nostra condizione deve escludere
sia benzina che diesel.

Errore 6: Probabilmente è stato menzionato nell'errore 3 in cui benzina e diesel veniva considerati 
come due errori separati. Però potremmo considerare come "errore" il fatto che il separatore
con gli asterischi non sia stato inserito anche nelle altre auto.



Di seguito il codice corretto:

const cars = [
    {
        manufacturer: 'Ford',
        model: 'Fiesta',
        type: 'diesel'
    },
    {
        manufacturer: 'Audi',
        model: 'A1',
        type: 'benzina'
    },
    {
        manufacturer: 'Volkswagen',
        model: 'Golf',
        type: 'Benzina'
    },
    {
        manufacturer: 'Fiat',
        model: 'Panda',
        type: 'metano'
    },
    {
        manufacturer: 'Fiat',
        model: 'Multipla',
        type: 'GPL'
    },
    {
        manufacturer: 'Tesla',
        model: 'Model 3',
        type: 'elettrico'
    },
    {
        manufacturer: 'Volkswagen',
        model: 'Polo',
        type: 'benzina'
    },
    {
        manufacturer: 'Ford',
        model: 'Kuga',
        type: 'Diesel'
    },
    {
        manufacturer: 'Seat',
        model: 'Ibiza',
        type: 'metano'
    },
    {
        manufacturer: 'Audi',
        model: 'R8',
        type: 'Benzina'
    },
];

cars.forEach((element) => {
element.type = element.type.toLowerCase();
})

const gasolineCars = cars.filter( (auto) => auto.type === 'benzina');

const dieselCars = cars.filter( (auto) => {
    return auto.type === 'diesel';
});

const otherCars = cars.filter( (auto) => {
    return auto.type !== 'benzina' && auto.type !== 'diesel';
});

console.log('Auto a benzina');
console.log(gasolineCars);
console.log('*******************************');
console.log('Auto a diesel');
console.log(dieselCars);
console.log('*******************************');
console.log('Tutte le altre auto');
console.log(otherCars);
 */