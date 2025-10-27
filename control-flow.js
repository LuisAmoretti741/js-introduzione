//IF -> se la condizione è tru esegue il codice tra le graffe altrimente
// const pippo = 5;
// const pluto = 3;

// if (pippo > pluto) {
//     console.log("evviva!!");
// }



// IF-ELSE
// const pippo = 5;
// const pluto = 3;
// if (pippo < pluto) {
//     console.log("evviva!!!");
// } else {
//     console.log("Brutta storia!!");
// }


//IF-ELSE IF-ELSE
// const candy = prompt("Quante caramelle hai mangiato ieri?")

// const candyNumber = Number(candy);

// if (candyNumber == 0) {
//     alert("Sei a dieta?");
// } else if(candyNumber < 5){
//     alert("Molto bravo!!");
// } else if(candyNumber < 20){
//     alert("Hai lavato i denti?");
// } else if(candyNumber < 100) {
//     alert("Ti verrà il diabete!!");
// } else {
//     alert("Hai fatto schifo!!");
// }


// const age = prompt("Quanti anni hai?")

// const ageNumber = Number(age);

// if (ageNumber <= 15) {
//     alert("Sei piccolo!!");
// } else if(ageNumber <= 25){
//     alert("Quasi boomer");
// } else if(ageNumber <= 35){
//     alert("Sei propio un boomer");
// } else if(ageNumber <= 45) {
//     alert("BOOMEEEER!!!");
// } else if(ageNumber <= 55) {
//     alert("BOOMER!!! BOOMER!!!");
// } else{
//     alert("Sei un fossile :)")
// }




let topolino = 0;
topolino = topolino + 10;

topolino += 10; // equivalente a: topolino = topolino + 10;

topolino = topolino + 1;
topolino += 1;
topolino++;

//WHILE
// let counter = 0;

// while (counter < 20) {
//     console.log('Ciao!' + counter);
//     counter++;
// }

// console.log('Sono uscito dal while');

// let outString = '';

// while (outString.length < 100) {
//     outString = outString + 'pippo';
// }

// console.log(outString);


// while (true) {
//     const number = prompt('Indovina il numero che ho pensato');
//     const numberConverted = Number(number);
//     if (numberConverted === 20) {
//         alert('Hai vinto');
//         break;
//     } else {
//         alert('Hai perso, prova di nuovo!');
//     }
// }
// alert('gioco finito!')


//DO WHILE -> esegue almeno una volta
// let counter = 0;
// do {
//     console.log('Ciao!' + counter);
//     counter++;
// } while (counter < 20);
// console.log('Sono uscito dal do while');


//FOR
// for (let i = 0; i <= 20; i++) {
//     console.log('Ciao!' + i);
    
// }
// console.log('sono uscito dal ciclo for')
// for (let i = 19; i >= 0; i--) {
//     console.log('Ciao!' + i);
    
// }
// console.log('sono uscito dal ciclo for')

// for (let i = 0; i <= 100; i+=2) {
//     console.log('Ciao! ' + i);
// }

// for (;;) {
//     const number = prompt('Indovina il numero che ho pensato');
//     const numberConverted = Number(number);
//     if (numberConverted === 20) {
//         alert('Hai vinto');
//         break;
//     } else {
//         alert('Hai perso, prova di nuovo!');
//     }
// }
// alert('gioco finito!')

// for (let i = 0; i < 5 ; i++) {
//     for (let j = 0; j < 5; j++) {
//         console.log('riga: ' + j + ' colonna: ' + i);
//     }
// }

//SWITCH
// const response = prompt('come ti senti oggi?')
// switch (response) {
//     case "felice":
//         alert('Benne, sono felice di sentirlo')
//         break;
//     case "triste":
//         alert('Su con il morale, oggi è una bella giornata!')
//         break;
//     case "euforico":
//         alert('Benne, ma datti una calmata!')
//         break;
//     case "arrabbiato":
//         alert('accidenti, raccontami cosa è successo!')
//         break;
//     default:
//         alert('è molto interessante!')
//         break;
// }

// if (response === "felice") {
//     alert('Benne, sono felice di sentirlo')
// } else if(response === "triste"){
//     alert('Su con il morale, oggi è una bella giornata!')
// } else if(response === "euforico"){
//     alert('Benne, ma datti una calmata!')
// } else if(response === "arrabbiato") {
//     alert('accidenti, raccontami cosa è successo!')
// } else {
//     alert('è molto interessante!')
// }

// ESERCIZI
// 6) fai un ciclo for che stampi il quadrato dei numeri da 1 a 100
// for (let i = 1; i <= 100 ; i++) {
//     console.log(i + ' alla 2 = '  + Math.pow(i,2));   
// }

// 7) fai un ciclo che per i numeri da 1 a 100 stampi pari se il numero è pari se il numero è dispari
// for (let i = 1; i <= 100; i++) {
//     if (i % 2 === 0) {
//         console.log(i + ' è pari');
//     } else {
//         console.log(i + ' è dispari');
//     }
// }



















// 8) usando un ciclo logga i numeri da 1 a 100 mettendo un asterisco vicino ai multipli di 7
// for (let i = 1; i <= 100; i++) {
//     if (i % 7 === 0) {
//         console.log( i + ' * ');
//     } else {
//         console.log(i);
//     }
// }
// 9) usando un ciclo logga i numeri da 1 a 100 mettendo un asterisco vicino ai quadrati perfetti
// for (let i = 1; i <= 100; i++) {
//   const squareRoot = Math.sqrt(i);
  
//   if (Number.isInteger(squareRoot)) {
//     console.log(i + " *");
//   } else {
//     console.log(i);
//   }
// }
// 10) chiedi all'utente un numero (positivo) di partenza e poi logga tutti i numeri dal numero dato fino a 0
// const numero = prompt('Inserisci un numero:');
// const numeroConverted = Number(numero);
// for (let i = numeroConverted; i >= 0; i--) {
//      console.log(i);
// }   

// 11) chiedi all'utente due numeri e logga tutti i numeri pari compresi tra i numeri forniti dall'utente
// const numero1 = prompt('Inserisci il primo numero:');
// const numeroConverted1 = Number(numero1);

// const numero2 = prompt('Inserisci il secondo numero:');
// const numeroConverted2 = Number(numero2);

// if (numeroConverted1 < numeroConverted2) {
//     for (let i = numeroConverted1; i <= numeroConverted2; i++) {
//         if (i % 2 === 0) {
//         console.log(i);
//         }
//     }
// } else {
//     for (let i = numeroConverted1; i >= numeroConverted2; i--) {    
//         if (i % 2 === 0) {
//             console.log(i);
//         }
//     }
// }

// 12) chiedi all'utente quanti anni ha e digli quante ore ha gia' vissuto
// const age = prompt('Quanti anni hai?');
// const ageConverted = Number(age);

// const vissuto = ageConverted * 365 * 24;

// alert('Hai vissuto ' + vissuto + ' ore');