// console.log('è il momento degli array');


///ARRAY
let numbers = [20, 10, 22, 44, 35, 0, -1, 1.5, 100, 20];

// console.log(numbers.length); //-> 10

// console.log(numbers[3]); // -> 44

let booleans = [true, false, true, false, true]

// console.log(booleans.length); // -> 5

// console.log(booleans[3]); // -> false

let strings = ['pippo', 'pluto', 'topolino', 'luis']


// console.log(strings.length); // -> 4

// console.log(strings[3]); // -> 'luis'

let strangeArray = [34, false, 'luis', 2, 4, 'luis'] //MAI E POI MAI!!!

// console.log(strangeArray.length); // -> 6

// console.log(strangeArray[3]); // -> 2

// console.log('=======================================');



// for (let i = 0; i < numbers.length; i++) {
//     const element = numbers[i];

//     console.log(element);
// }

// let i = 0;

// while (i < numbers.length) {
//     const element = numbers[i];

//     console.log(element);

//     i++;
// }

// for (const element of numbers) { //FOR OF
//     console.log(element);
// }

// for (const stringa of strings) {
//     console.log(stringa);
// }

//AGGIUNGERE ELEMENTI

// strings.push('paperone'); //push aggiunge in fondo
// console.log(strings);

// strings.unshift('paperino'); //unshift aggiunge in cima
// console.log(strings);

//RIMUOVERE ELEMENTI

// const rimosso = strings.pop(); //toglie l'ultimo elemento
// console.log(strings);
// console.log('ho tolto ' + rimosso);

// const rimosso2 = strings.shift(); //togle il primo elemento
// console.log(strings);
// console.log('ho tolto ' + rimosso2);

// const rimosso3 = strings.splice(2, 1); //toglie in mezzo e restituisce un array con quelli 
// console.log(strings);
// console.log('ho tolto ' + rimosso3);


//CAMBIARE DEGLI ELEMENTI

// strings[0] = 'superpippo'; 
// console.log(strings);

// strings[3] = 'super' + strings[3];
// console.log(strings);

// numbers[4] = 2;
// console.log(numbers);

// numbers[8] = numbers[8] * 2;
// console.log(numbers);

///PATTERN DEGLI ARRAY

//MAP -> modifica di tutti o parte degli elementi di un array

//1) trasforma tutte le stringe dell'array strings al maiuscolo

// for (let i = 0; i < strings.length; i++) {
//     strings[i] = strings[i].toUpperCase();
// }
// console.log(strings);

// function arrayToUpperCase(stringArray) {
//     const newArray = [];
//     for (let i = 0; i < stringArray.length; i++) {
//         const element = stringArray[i];
//         const elementUpper = element.toUpperCase();
//         newArray.push(elementUpper);
//     }    
//     return newArray;
// }

// console.log(arrayToUpperCase(strings));

// //2) moltiplica per 2 a tutti i numeri in un array

// function multiplyBy2Array(numberArray) {
//     const newArray = [];
//     for (let i = 0; i < numberArray.length; i++) {
//         const element = numberArray[i];
//         const duble = element * 2;
//         newArray.push(duble);
//     }    
//     return newArray;
// }

// console.log(multiplyBy2Array(numbers));


//3) trasforma tutte le stringe dell'array che iniziano con 'p' al maiuscolo

// function arrayToUpperCaseWordsStratingWithP(stringArray) {
//     const newArray = [];
//     for (let i = 0; i < stringArray.length; i++) {
//         const element = stringArray[i];

//         if (element[0] === 'p') {
//             const elementUpper = element.toUpperCase();
//             newArray.push(elementUpper);
//         } else {
//             newArray.push(element);
//         }
//     }
//     return newArray;
// }

// console.log(arrayToUpperCaseWordsStratingWithP(strings));



// for (let i = 0; i < numbers.length; i++) {
//     numbers[i] = numbers[i] % 2 === 0;
// }
// console.log(numbers);


//FILTER

//2) scrivere una funzione che rimuova da un array di stringhe tutte quelle che iniziano per p

// function removeStartingWithP(strArray) {
//     const newArray = [];
//     for (let i = 0; i < strArray.length; i++) {
//         const element = strArray[i];
//         const firstChar = element[0];
//         const firstCharLower = firstChar.toLowerCase();

//         if (firstCharLower !== 'p') {
//             newArray.push(element);
//         }
//     }
//     return newArray;
// }

// strings = removeStartingWithP(strings);

// console.log(removeStartingWithP(strings));

// 3) scrivere una funzione che rimueve i numeri negativi da un array di numeri

// function keepPositive(nbrArray) {
//     const newArray = [];
    
//     for (let i = 0; i < nbrArray.length; i++) {
//         const element = nbrArray[i];

//         if (element >= 0) {
//             newArray.push(element);
//         }
//     }
//     return newArray;
// }

// console.log(keepPositive(numbers));



// FILTER -> decide quali degli elementi dell'array tenere


//1) scrivere una funzione che rimuove dall'array tutti i numeri dispari

// function keepEven(nbrArray) {

//     const newArray = [];

//     for (let i = 0; i < nbrArray.length; i++) {
//         const element = nbrArray[i];

//         if (element % 2 === 0) {
//             newArray.push(element);
//         }

//     }

//     return newArray;

// }

// console.log(keepEven(numbers));


//2) scrivere una funzione che rimuova da un array di stringhe tutte quelle che iniziano per p


// function keepNotStartingWithP(strArray) {

//     const newArray = [];

//     for (let i = 0; i < strArray.length; i++) {

//         const element = strArray[i];

//         const firstChar = element[0];

//         const firstCharLower = firstChar.toLowerCase();

//         if (firstCharLower !== 'p') {

//             newArray.push(element);

//         }

//     }

//     return newArray;

// }

// // strings = keepNotStartingWithP(strings);


// console.log(keepNotStartingWithP(strings));


// 3) scrivere una funzione che rimuove i numeri negativi da un array di numeri

// function keepPositive(nbrArray) {

//     const newArray = [];

//     for (let i = 0; i < nbrArray.length; i++) {
//         const element = nbrArray[i];

//         if (element >= 0) {
//             newArray.push(element);
//         }

//     }

//     return newArray;
// }

// console.log(keepPositive(numbers));



// REDUCE -> trasforma l'array producendo un risultato che dipende dai componenti dell'array

// 1) scrivere una funzione che somma tutti i numeri di un array di numeri

// function summAll(nbrArray) {

//     let result = 0;

//     for (let i = 0; i < nbrArray.length; i++) {

//         const element = nbrArray[i];

//         result = result + element;
        
//     }

//     return result
    
// }


// console.log(summAll(numbers))


// 2) scrivi una funzione che calcola la media di una array di numeri


// function calculateMean(nbrArray) {
    
//     let sum = 0;

//     for (let i = 0; i < nbrArray.length; i++) {

//         const element = nbrArray[i];

//         sum = sum + element;
        
//     }

//     const mean = sum / nbrArray.length;

//     return mean;
    
// }

// function calculateMean2(nbrArray){

//     const sum = summAll(nbrArray);

//     const mean = sum / nbrArray.length;

//     return mean;

// }

// console.log(calculateMean(numbers))
// console.log(calculateMean2(numbers))

// 3) scrivere una funzione che genera una stringa composta dalle iniziali delle stringhe contenute in un array


// function concatFirstChar(strArray) {
    
//     let newString = '';

//     for (let i = 0; i < strArray.length; i++) {

//         const element = strArray[i];

//         const firstChar = element[0];

//         newString = newString + firstChar;

//     }

//     return newString;
// }

// console.log(concatFirstChar(strings))


// 4) scrivere una funzione che restituisce la somma delle lunghezze delle stringhe di un array

// function sumLength(strArray) {
    
//     let sumOfLengths = 0;

//     for (let i = 0; i < strArray.length; i++) {

//         const element = strArray[i];

//         const length = element.length;

//         sumOfLengths = sumOfLengths + length;
        
//     }

//     return sumOfLengths;

// }

// console.log(sumLength(strings));

// 5) scrivere una funzione che trova il numero più grande in un array

// function findMax(nbrArray) {
    
//     let max = 0;

//     for (let i = 0; i < nbrArray.length; i++) {
//         const element = nbrArray[i];

//         if (element > max) {
//             max = element;
//         }
        
//     }

//     return max;

// }

// console.log(findMax(numbers));


////COSTRUTTORE

// const pluto = new Array(); /// const pluto = [];
// console.log(pluto);

// const pippo = new Array(3, 5, 8); /// const pippo = [3, 5, 8]
// console.log(pippo);

// const paperino = new Array(10) /// creo un array con dieci spazi vuoti
// console.log(paperino)

// for (const element of paperino) {
//     console.log(element); /// tutti undefined
// }

/// indexOf -> mi da la posizione di un elemento

// console.log(numbers.indexOf(100));
// console.log(numbers.indexOf(9999)); // se l'elemento non è nell'array restituisce -1


// includes -> ci dice se un elemento è contenuto o meno

// console.log(numbers.includes(100));
// console.log(numbers.includes(9999));

// concat -> ci permette di unire due array, creando un nuovo array

// const topolino = ['leonardo', 'mattia', 'daniel'];

// const paperina = ['evelyn', 'salma', 'stefania'];

// const gastone = topolino.concat(paperina);

// console.log(gastone)

// FUNZIONI MULTI PARAMETRICHE

// function sumAllParams(...giovanni){

//     let result = 0;

//     for (let i = 0; i < giovanni.length; i++) {
//         const element = giovanni[i];
        
//         result = result + element;
//     }

//     return result;
// }

// console.log(sumAllParams(2, 5, 6, 7))

//ARRAY DI ARRAY

const superArray = [[1, 2, 3], 
                    [1, 1, 1], 
                    [3, 2, 1]]

// console.log(superArray.length);
// console.log(superArray[0]);

const arrayInterno = superArray[0];
const elemento0dellArrayInteno = arrayInterno[0];

// console.log(elemento0dellArrayInteno)
// console.log(superArray[0][0]);

for (let rowNumber = 0; rowNumber < superArray.length; rowNumber++) {

    const row = superArray[rowNumber];

    for (let columnNumber = 0; columnNumber < row.length; columnNumber++) {

        const cell = row[columnNumber]


        console.log(cell);
    }
    
}


