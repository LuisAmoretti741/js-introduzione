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