// console.log('Finalmente le funzioni!!!');

// const multiplyBy2= function (n) {
//     const result = n *2;
//     return result;
// };

// const pippo = multiplyBy2(100);
// console.log(pippo);

// const pluto = multiplyBy2(300);
// console.log(pluto);

// //===================================================
// function multiplyBy3(n) {
//     const result2 = n * 3
//     return result2;
// };

// const pippo1 = multiplyBy3(100);
// console.log(pippo1);

// const pluto2 = multiplyBy3(300);
// console.log(pluto2);

// //===================================================
// const multiplyBy4 = (n) => {
//     const result3 = n * 4;
//     return result3;
// };

// const pippo3 = multiplyBy4(100);
// console.log(pippo3);

// const pluto3 = multiplyBy4(300);
// console.log(pluto3);
// //===================================================
// const multiplyBy5 = (n) => n * 5;

// function chexkMultiple(n1, n2) {
//     const isMultiple = n1 % n2 ===0;
//     return isMultiple;
// };

// const chexkMultipleLamba = (n1, n2) => n1 % n2 ===0;
// const isMultiple = n1 % n2 === 0;



///////////////////////////////////////////////////
// function stringBuilder(s1 ,s2 ,s3) {
//     return s1 + s2 + s3;
// }

// console.log(stringBuilder("pippo", "luis", "aaaaa"));
// console.log(stringBuilder("pippo", "luis")); // i parametri mancanti sono undefined
// console.log(stringBuilder("pippo", "luis", "amor", "etti")); // i parametri in eccesso vengono ignorati


// function pow(base = 0, exponent = 2) {
//     // if (exponent === undefined) {
//     //     console.log('aiuto');
//     //     exponent = 2;
//     // }
//     return base ** exponent;
// }

// console.log(pow(3, 3));
// console.log(pow(3));
// console.log(pow(0));

/////////////////////////////////////////////////////////////

// const number = 5;

// if (number > 3) {
//     const number2 =  number + 5; //lo scope interno accede vede le variabili dello scope esterno
//     console.log(number2);
//     if (number2 > 7) {
//         const number3 = number + number2;
//         console.log(number3);
//     }
//     console.log(number3);
// }

// const number4 = number2 + 5; // lo scope esterno non accede alle variabili dello scope interno

// console.log(number3);


///////////// CLOJURE le funzione mantengono in vita le variabili che usano anche al di fuori del loro scope

// const isOpen = true;

// let myFunction;

// if (isOpen) {
//     let  counter = 0;
//     myFunction = () => {
//         counter++;
//         console.log(counter);
//     }
// //     for (let i = 0; i < 1000; i++) {
// //         myFunction();
// //     }
// }
// myFunction();
// myFunction();
// myFunction();
// myFunction();


/// RECURSION
/// FATTORIALE:
// fact(0) = 1;
// fact(n) = n * fact(n-1);

// function fact(n) {
//     if (n === 0) {
//         return 1;
//     } else {
//         return n * fact(n -1);
//     }
// }

// console.log(fact(0));
// console.log(fact(1));
// console.log(fact(2));
// console.log(fact(3));
// console.log(fact(4));
// console.log(fact(5));
// console.log(fact(6));
// console.log(fact(70000));



// function isEven (n) {
//     if (n === 0) {
//         return true;
//     } else if (n === 1) {
//         return false;
//     } else {
//         return isEven(n - 2);
//     }
// }

// console.log(isEven(3));


// function isEven(n) {
//     if (n === 0) {
//         return true;
//     } else {
//         return isOdd(n - 1);
//     }
// }

// function isOdd(n) {
//     if (n === 0) {
//         return false;
//     } else {
//         return isEven(n - 1);
//     }
// }

// console.log(isEven(3));
// console.log(isOdd(3));

/////////////
// 1) se ci sono rimuovere gli spazi prima e dopo. X
// 2) aggiungere la stringa pippo X
// 3) mettere tutto maiuscolo X
// 4) riperterla per il numero di volte del moltiplicatore
// 5) aggiungergli in fondo la sua lunghezza
// 6) rimuovere tutte le p
/////////////

// function strangeStringFuction(str, multiplier) {
//     const strWithoutSpaces = str.trim();
//     console.log('senza spazi -> ', strWithoutSpaces);

//     const strWithPippo = strWithoutSpaces + 'pippo';
//     console.log('aggiunto pippo -> ', strWithPippo);

//     const strUpper = strWithPippo.toUpperCase();
//     console.log('maiuscolo ->', strUpper);

//     const strMultiplied = strUpper.repeat(multiplier);
//     console.log('moltiplicata ->', strMultiplied);

//     const strWithLength = strMultiplied + strMultiplied.length;
//     console.log('con lunghezza ->', strWithLength);

//     let strWithoutP = '';
//     for (let i = 0; i < strWithLength.length; i++) {
//         const char = strWithLength.charAt(i);
//         if (char !== 'P') {
//             strWithoutP += char;
//         }
//     }
//     console.log('senza p -> ',strWithoutP);

// }

// strangeStringFuction('      luis papapa', 4);


//ESERCIZIO
// 23) You can get the Nth character, or letter, from a string by writing [N] after the string
// (for example, string[2]). The resulting value will be a string containing only one
// character (for example, "b"). The first character has position 0, which causes the
// last one to be found at position string.length - 1. In other words, a two-character
// string has length 2, and its characters have positions 0 and 1.
// Write a function called countBs that takes a string as its only argument and returns a
// number that indicates how many uppercase B characters there are in the string.
// Next, write a function called countChar that behaves like countBs, except it takes a
// second argument that indicates the character that is to be counted (rather than counting
// only uppercase B characters). Rewrite countBs to make use of this new function.

// function countBs(str) {
//     let count = 0;
//     for (let i = 0; i < str.length; i++) {

//         const selectedChar = str[i];
//         const lowerChar = selectedChar.toLowerCase();

//         if (lowerChar === 'b') {
//             count ++
//         }
//     }
//     return count;
// }

// console.log(countBs('babbeo')); // -> 3
// console.log(countBs('BAMBINO')); // -> 3


// function countChar(str, char) {
//     let count = 0;
//     for (let i = 0; i < str.length; i++) {

//         const selectedChar = str[i];
//         const lowerChar = selectedChar.toLowerCase();
//         const charLower = char.toLowerCase();


//         if (lowerChar === charLower) {
//             count ++
//         }
//     }
//     return count;
// }

// console.log(countChar('mammamia', 'm')); // -> 4

// function countCharSensitive(str, char, isSensitive) {
//     let count = 0;
//     for (let i = 0; i < str.length; i++) {

//         const selectedChar = str[i];

//         if (!isSensitive) {
//             selectedChar = selectedChar.toLowerCase();
//             char = char.toLowerCase();
//         }

//         if (selectedChar === char) {
//             count ++
//         }
//     }
//     return count;
// }

// console.log(countCharSensitive('luis', 'l', false));



// function countChar(str, char) {
//     let count = 0;
//     for (let i = 0; i < str.length; i++) {
//         if (str[i] === char) {
//             count++;
//         }
//     }
//     return count;
// }

// function countBs(str) {
//     return countChar(str, "B");
// }

// console.log(countBs('BBC'));
// console.log(countChar("kakkerlak", "k"));

//--------------------------------------------------------------------------------------------
//24) Inversione di un numero
//Scrivi una funzione invertiNumero che prenda un numero come parametro e restituisca il
//numero con le cifre invertite (es. 123 → 321).

// function invertiNumero(n) {
//     const numberToString = String(n);
//     let reversed = '';

//     for (let i = numberToString.length -1; i >= 0 ; i--) {
//         const char = numberToString[i];

//         reversed += char;
//     }
//     return Number(reversed);
// }

// console.log(invertiNumero(12345));

// function reverseNumbers(nr) {
//     const segno = Math.sign(nr);
//     const str =  Math.abs(nr).toString();
//     const reverseStr = str.split('').reverse().join('');
//     const reversedNr = parseFloat(reverseStr);
//     return segno * reversedNr;
// }

// console.log(reverseNumbers(12345));

// console.log(reverseNumbers(-500));

//--------------------------------------------------------------------------------------------
//25) Tabellina
//Scrivi una funzione tabellina che prenda un numero come parametro e stampi in console
// la tabellina di quel numero fino a 10.

// function tabellina(base) {
//     for (let i = 0; i <= 10; i++) {
//         let op = base * i;
//         console.log(base + " * " + i + " = " + op);
//     }
// }
// console.log(tabellina(2));

// const tabellinaLambda = base => { for (let i = 0; i <= 10; i++) { let op = base * i; console.log(base + " * " + i + " = " + op);}}
// console.log(tabellinaLambda(50));

//--------------------------------------------------------------------------------------------
//26) Fibonacci
//Scrivi una funzione fibonacci che prenda un numero N come parametro e restituisca
// l’N-esimo numero della sequenza di Fibonacci.

// function fibonacci(n) {
//     if (n === 0) {
//         return 0;
//     } else if (n === 1){
//         return 1;
//     }
//     let a = 0;
//     let b = 1;

//     for (let i = 3; i <= n ; i++) {
//         const temp = a + b;
//         a = b;
//         b = temp;
//     }
//     return b;
// }

// console.log(fibonacci(0));
// console.log(fibonacci(1));
// console.log(fibonacci(5));
// console.log(fibonacci(7));

// function fiboRecursive(n) {
//     if (n < 1) {
//         return n;
//     } else {
//         return fiboRecursive(n - 1) + fiboRecursive(n - 2);
//     }
// }


//--------------------------------------------------------------------------------------------
//27)  Conteggio vocali
//Scrivi una funzione contaVocali che prenda una stringa come parametro e restituisca il
// numero di vocali presenti.

// function countVowels(str) {
//     let count = 0;

//     for (let i = 0; i < str.length; i++) { 
        
//         const selectedChar = str [i];
//         const lowerChar = selectedChar.toLowerCase();

//         if (lowerChar === 'a'
//             || lowerChar === 'e'
//             || lowerChar === 'i'
//             || lowerChar === 'o'
//             || lowerChar === 'u') {
//             count++
//         }
//     }
//     return count;
// }

// console.log(countVowels('ciao'));

// function countVowels(str) {
//     const vowels = 'aeiouAEIOU';
//     let count = 0;

//     for (let i = 0; i < str.length; i++) {
//         if (vowels.includes(str[i])) {
//             count++
//         }
//     }
//     return count;
// }

// const countVowelsLambda = str => {
//     const vowels = 'aeiouAEIOU';
//     let count = 0;

//     for (let i = 0; i < str.length; i++) {
//         if (vowels.includes(str[i])) {
//             count++
//         }
//     }
//     return count;
// }

// console.log(countVowels("ciao"));
// console.log(countVowelsLambda("buongiorno"));

//--------------------------------------------------------------------------------------------

//28) Sconto
//Scrivi una funzione applicaSconto che prenda due numeri come parametri (prezzo e
// percentuale di sconto) e restituisca il prezzo scontato.

// function applicaSconto(p, sc) {
//     const prezzoScontato = p - (p * sc / 100);
//     return prezzoScontato
// }

// const applicaScontoLambda = (p, sc) => p - (p * sc / 100);

// console.log(applicaSconto(100, 20));
// console.log(applicaScontoLambda(500, 10));

//--------------------------------------------------------------------------------------------

//29) Conversione gradi
//Scrivi una funzione convertiGradi che prenda un numero come parametro (gradi Celsius) e
//restituisca la conversione in Fahrenheit

// function convertiGradi(c) {
//     const f = (c * 9 / 5) + 32;
//     return f;
// }

// const convertiGradiLambda = c => (c * 9 / 5) + 32;

// console.log(convertiGradi(30));
// console.log(convertiGradiLambda(100));


//--------------------------------------------------------------------------------------------

//30) Verifica password
//Scrivi una funzione verificaPassword che prenda una stringa e restituisca true se:
// - Ha almeno 8 caratteri
// - Contiene almeno una lettera maiuscola
// - Contiene almeno un carattere speciale tra questi '!#@$%'
// - Non contiene la parola 'cacca'

// function checkPassword(password) {
//     if (password.length < 8) {
//         return false;
//     } else {
//         if (password.toLowerCase() === password) {
//             return false;
//         } else {
//             if (password.incluides("!")
//             || password.incluides("#")
//             || password.incluides("@")
//             || password.incluides("$")
//             || password.incluides("%")) {
//                 if (password.incluides("cacca")) {
//                     return false;
//                 } else {
//                     return true;
//                 }
//             } else {
//                 return false;
//             }
//         }
//     }
// }

// function checkPassword(password) {
//     const lengthMin = password.length >= 8;
//     const upperCase = /[A-Z]/.test(password);
//     const specialChar = /[!#@$%]/.test(password);
//     const notContWord = !password.toLowerCase().includes("cacca");

//     return lengthMin && upperCase && specialChar && notContWord;
// }

// const checkPasswordLambda = password => {
//     const lengthMin = password.length >= 8;
//     const upperCase = /[A-Z]/.test(password);
//     const specialChar = /[!#@$%]/.test(password);
//     const notContWord = !password.toLowerCase().includes("cacca");

//     return lengthMin && upperCase && specialChar && notContWord;
// }

// console.log(checkPassword("Ciao@ad"));
// console.log(checkPassword("ciao!123"));
// console.log(checkPassword("cacca@123"));
// console.log(checkPasswordLambda("Buongiorno$123"));

//==========================================================================================
//==========================================================================================
//==========================================================================================
//==========================================================================================

// 31) Somma dei numeri fino a n
// Scrivi una funzione sommaFinoAN(n) che restituisce la somma dei numeri da 1 a n.

// function sommaFinoN(n) {
//     let somma = 0;
//     for (let i = 1; i <= n ; i++) {
//         somma += i;
//     }
//     return somma;
// }

// console.log(sommaFinoN(3));

// 32) Conteggio cifre
// Scrivi una funzione contaCifre(num) che restituisce il numero di cifre di un numero
// contaCifre(5) -> 1
// contaCifre(1245) -> 4

// function contaCifre(num) {
//     const numberToString = num.toString(); //String(num);
//     const numberLength = numberToString.length;
//     return numberLength;
// }

// console.log(contaCifre(15));
// console.log(contaCifre(14552));

// 33) Somma delle cifre
// Scrivi una funzione sommaCifre(num) che restituisce la somma delle cifre di un numero
// sommaCifre(5) -> 5
// sommaCifre(1245) -> 12

// function sommaCifre(num) { 
//     let numString = num.toString(); //String(num);
//     let somma = 0;
    
//     for (let i = 0; i < numString.length; i++) {
//         somma += Number(numString[i]);
//     }
//     return somma;
// }

// console.log(sommaCifre(52));


// 34) Conversione valuta
// Scrivi una funzione euroToDollaro(euro) che converte un importo in euro in dollari (1 euro = 1.1 dollari).

// function euroToDollaro(importo) {
//     const importoDollaro = importo * 1.15;
//     return importoDollaro;
// }

// console.log(euroToDollaro(1));
// console.log(euroToDollaro(10));


// 35) Calcolo area rettangolo
// Scrivi una funzione areaRettangolo(base, altezza) che restituisce l’area di un rettangolo.

// function areaRettangolo(base, altezza) {
//     const area = base * altezza;
//     return area;
// }

// console.log(areaRettangolo(4, 3));

// 36) Calcolo media
// Scrivi una funzione media(a, b, c) che restituisce la media di tre numeri.

// function media(a, b, c) {
//     let calcolo = (a + b + c)/3;
//     let calcoloF = Number(calcolo.toFixed(2));
//     return calcoloF;
// }

// console.log(media(6, 7, 4));

// 37) Generatore di password casuale
// Scrivi una funzione generaPasswordCasuale() che restituisce una password di 8 caratteri usando solo lettere maiuscole e numeri (usa Math.random())

// function generaPassword() {
//     const char = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
//     let password = '';

//     for (let i = 0; i < 8; i++) {
//         password += char[passCasuale = Math.floor(Math.random() * char.length)]; 
//     }
//     return password;
// }

// console.log(generaPassword());


// 38) Potenza con ciclo
// Scrivi una funzione potenzaCiclo(base, esponente) che calcola la potenza usando un ciclo.

// function potenzaCiclo(base, esponente) {
//     let pow = 1;

//     for (let i = 0; i < esponente; i++) {
//         pow *= base;
//     }
//     return pow;
// }

// console.log(potenzaCiclo(2, 3));

// 39) Scrivi un validatore di email con queste regole:
// -deve contenere una @
// -deve contenere un punto posizionato dopo la @
// -le parti di testo prima della @ e tra la @ e il punto devono almeno avere tre lettere
// -il punto non può essere l'ultimo carattere

// function constainsAt(email) {
//     if (email.includes('@')) {
//         return true;
//     } else {
//         return false;
//     }
// }

// function constainsDotAfterAt(email) {
//     const dotPosition =  email.indexOf('.');

//     if (dotPosition === -1) {
//         return false
//     } 

//     const atPosition =  email.indexOf('@');

//     if (dotPosition > atPosition) {
//         return true;
//     } else {
//         return false;
//     }
// }

// function firstAndSecondPartlengthIsThreeOrMore(email) {
//     const atPosition =  email.indexOf('@');
//     const firstPart = email.substring(0, atPosition);

//     const dotPosition =  email.indexOf('.');
//     const secondPart = email.substring(atPosition + 1,dotPosition);

//     if (firstPart.length >= 3 && secondPart.length >= 3) {
//         return true;
//     } else {
//         return false;
//     }
// }

// function lastCharMustBeDifferentFromDot(email){
//     const lastPosition = email.length -1;
//     const lastChar = email[lastPosition];

//     if (lastChar === '.') {
//         return false;
//     } else {
//         return true;
//     }
// }

// function emailValidator(email) {
//     if (!constainsAt(email)) {
//         return false;
//     } else if (!constainsDotAfterAt(email)){
//         return false;
//     } else if (!firstAndSecondPartlengthIsThreeOrMore(email)){
//         return false;
//     } else if (!lastCharMustBeDifferentFromDot(email)){
//         return false;
//     } else {
//         return true;
//     }
// }



// console.log(emailValidator('ciaociao'));
// console.log(emailValidator('ciao@ciao.1'));




// function validaEmail(email) {
//     // deve contenere una "@"
//     let posizioneChiocciola = email.indexOf("@");
//     if (posizioneChiocciola === -1) {
//         return false;
//     }

//     // deve contenere un "." dopo la "@"
//     let posizionePunto = email.indexOf(".", posizioneChiocciola);
//     if (posizionePunto === -1) {
//         return false;
//     }

//     // almeno 3 lettere prima della "@"
//     if (posizioneChiocciola < 3) {
//         return false;
//     }

//     // almeno 3 lettere tra "@" e "."
//     if (posizionePunto - posizioneChiocciola - 1 < 3) {
//         return false;
//     }

//     // il "." non può essere l’ultimo carattere
//     if (posizionePunto === email.length - 1) {
//         return false;
//     }

//     // email valida
//     return true;
// }

// console.log(validaEmail("abc@xyz.com"));  
// console.log(validaEmail("ab@xyz.com")); 
// console.log(validaEmail("abc@xy.com")); 
// console.log(validaEmail("abc@xyz."));    
// console.log(validaEmail("abcxyz.com"));  



// 40) crea un converitore tra italiano e farfallino(https://it.wikipedia.org/wiki/Alfabeto_farfallino)

// function farfallinoTranslator(str) {
//     const vowels = "aeiou";

//     let farfallinoStr = '';

//     for (let i = 0; i < str.length; i++) {
//         const char = str[i];

//         if (vowels.includes(char.toLowerCase())) {
//             farfallinoStr = farfallinoStr + char + 'f' + char;
//         } else {
//             farfallinoStr = farfallinoStr + char;
//         }
//     }
//     return farfallinoStr;
// }

// console.log(farfallinoTranslator('ciao'));
// console.log(farfallinoTranslator('CIAO'));



// function italianoInFarfallino(testo) {
//     // elenco delle vocali
//     const vocali = "aeiouAEIOU";
//     let risultato = "";

//     // scorre ogni lettera del testo
//     for (let i = 0; i < testo.length; i++) {
//         let lettera = testo[i];

//         // se ce una vocale, aggiunge "f" + la stessa vocale
//         if (vocali.includes(lettera)) {
//             risultato += lettera + "f" + lettera;
//         } else {
//             risultato += lettera;
//         }
//     }

//     return risultato;
// }

// console.log(italianoInFarfallino("buongiorno"));   
// console.log(italianoInFarfallino("amore"));   
// console.log(italianoInFarfallino("Buona sera")); 



const numbers = [1, 2, 4, 56, 78, 11, -123, 3, -23, 2, 22, 4];
const numeri = [1, 2, 3, 4, 5, 6, 7, 8];
const matrice = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];

const parole = ["ciao", "mondo", "javascript", "array"];

const frutti = ["mela", "banana", "mela", "pera", "mela", "banana", "pera", "mela"];

//41) creare una funzione che dato un array di numeri li eleva tutti al quadrato

// function squareArray(nbrArray) {
//     const newArray = [];
//     for (let i = 0; i < nbrArray.length; i++) {
//         const element = nbrArray[i];
//         const square = element ** 2;
//         newArray.push(square);
//     }
//     return newArray;
// }

// console.log(squareArray(numbers)) //-> [1, 4, 16, 3136, ....]


//42) creare una funzione che dato un array di numeri li eleva al quadrato solo i numeri dispari

// function squareOddArray(nbrArray) {
//     const newArray = [];
//     for (const n of nbrArray) {
//         if (n % 2 !== 0) {
//             newArray.push(n ** 2);
//         } else {
//             newArray.push(n);
//         }
//     }
//     return newArray;
// }

// console.log(squareOddArray(numbers)) //-> [1, 2, 4, 56, 78, 121, 15129, 9, 529, 2, 22, 4]

//42) creare una funzione che dato un array di numeri moltiplichi per due quelli positivi e divida per due i negativi

// function multiplyPoisitiveAndDivideNegative(nbrArray) {
//     const newArray = []; // array vuota
//     for (const n of nbrArray) {
//         if (n >= 0) {
//             newArray.push(n * 2);
//         } else if (n < 0) {
//             newArray.push(n / 2);
//         } else {
//             newArray.push(n)
//         }
//     }
//     return newArray;
// }
// console.log(multiplyPoisitiveAndDivideNegative(numbers)) //-> [2, 4, 8, 112, 156, 22, -61.5, 6, -11.5, 4, 44, 8];



// 43) Trova il Minimo
// Scrivi una funzione trovaMinimo(array) che restituisce il numero più piccolo in un array di numeri.
// function trovaMinimo(nbrArray) {
//     let minimo = nbrArray[0];
    
//     for (let i = 1; i < nbrArray.length; i++) {
//         if (nbrArray[i] < minimo) {
//             minimo = nbrArray[i];
//         }
//     }
//     return minimo;
// }

// console.log(trovaMinimo(numbers));

// 44) Inverti Array con un ciclo
// Scrivi una funzione invertiArray(array) che restituisce un nuovo array con gli elementi in ordine inverso.
// function invertiArray(nbrArray) {
//     const reverseArray = [];

//     for (let i = 0; i < nbrArray.length; i++) {
//         const element = nbrArray[i];
//         reverseArray.unshift(element);
//     }
//     // for (let i = nbrArray.length - 1; i >= 0; i--) {
//     //     reverseArray.push(nbrArray[i]);
//     // }
//     return reverseArray;
// }

// console.log(invertiArray(numeri));

// 45) Maiuscolo Tutte le Parole
// Scrivi una funzione maiuscoloTutto(array) che restituisce un nuovo array con tutte le stringhe in maiuscolo.

// function maiuscoloTutto(nbrArray) {
//     let upperWord = [];

//     for (let i = 0; i < nbrArray.length; i++) {
//         const element = nbrArray[i]; //nbrArray[i].toUpperCase();
//         const elementUpper = element.toUpperCase();

//         upperWord.push(elementUpper);
//     }
//     return upperWord;
// }

// console.log(maiuscoloTutto(parole));

// 46) Somma Righe Matrice
// Scrivi una funzione sommaRighe(matrice) che restituisce un array con la somma degli elementi di ogni riga.
// const matrice = [
//     [1, 2, 3],
//     [4, 5, 6],
//     [7, 8, 9]
// ];
// function sommaRighe(nbrArray) {
//     const risultato = [];

//     for (let i = 0; i < nbrArray.length; i++) {
//         let somma = 0;
        
//         for (let j = 0; j < nbrArray[i].length; j++) {
//             somma += nbrArray[i][j];
//         }
//         risultato.push(somma);
//     }
//     return risultato;
// }
// console.log(sommaRighe(matrice));


// 47) Conta Occorrenze
// Scrivi una funzione contaOccorrenze(array, elemento) che conta quante volte un elemento appare in un array
// function contaOccorrenze(array, elemento) {
//     let cont = 0;

//     for (let i = 0; i < array.length; i++) {
//         if (array[i] === elemento) {
//             cont++;
//         }
//     }
//     return cont;
// }

// console.log(contaOccorrenze(frutti, "mela"));

// 48) Filtra indice pari
// Scrivi una funzione filtraIndicePari(array) che tiene tutti gli elementi in posizione dispari
// function filtraIndicePari(array) {
//     let nuovoArray = [];

//     for (let i = 0; i < array.length; i++) {
//         if (i % 2 !== 0) {
//             nuovoArray.push(array[i]);
//         }        
//     }
//     return nuovoArray;
// }
// console.log(filtraIndicePari(numbers));


// 49) Somma pari 
// Scrivi una funzione sommaPari(array) che somma tutti i numeri pari

// function sommaPari(nbrArray) {
//     let risultatoPari = 0;

//     for (let i = 0; i < nbrArray.length; i++) {
//         const element = nbrArray[i];
        
//         if (element % 2 === 0) {
//             risultatoPari += element;
//         }
//     }

//     return risultatoPari;
// }

// console.log(sommaPari(numeri));


// 50) trova lunghezze
// Scrivi una funzione trovaLunghezzeParola(array) che restituisce un array delle lunghezze(numeri) delle stringhe che compongono l'array in input
// const parole = ["ciao", "mondo", "javascript", "array"];

// function trovaLunghezzeParola(strignArray) {
//     let numLengthWord = [];

//     for (let i = 0; i < strignArray.length; i++) {
//         const element = strignArray[i].length;
//         numLengthWord.push(element);
//     }
//     return numLengthWord;
// }

// console.log(trovaLunghezzeParola(parole));










