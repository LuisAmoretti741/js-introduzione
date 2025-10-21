// console.log('hello world!');

//boolean
true;
false;

//numbers
3;
3.14;
-34.5;
Infinity;
-Infinity;

NaN; //->not number

//string
'ciao';
"hello";
'a';
"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sed pariatur odio nostrum quos nam aspernatur commodi veniam similique sequi qui, expedita reiciendis, nemo, officia facilis ea laudantium eius quo non.";
'';

//tipi nulli
undefined, //->non definito
null; //->nullo

//OPERATORI LOGICI
//not
true;//vero
!true;//falso
false;
!false;
//console.log(!false);

//and
true && true;//true
true && false;//false
false && true;//false
false && false;//false
//console.log(false && false);

//or 
true || true;//true
true || false;//true
false || true;//true
false || false;//false

//OPERATORI MATEMATICI

//addizione(+)
5+10; //15
//sottrazione(-)
-3.1;
90-80; //10
//moltiplicazione(*)
6*8//48
//disione(/)
25/5; //5

//potenza(**)
2**3; //8
4**2; //16

//modulo(%) ->resto della divizione intera
10%3; //1
5%3; //2
12%7; //5
24%11; //2

// somma di stringhe(+)
"ciao"+"mamma"; //"ciaomamma"
"ciao "+"mamma"; //"ciao mamma"
"ciao"+" "+"mamma"; //"ciao mamma"

//OPERATORI DI CONFRONTO
//ugualianza (== o ==)

5 == 5; //true
0 == 1; //false

7 == '7'; //false
'7' == '7'; //true ->il doppio uguale converte prima di confrontare
true == true; //true
true == false; //false

"pippo" == "pippo"; //true
"pippo" == "pluto"; //false

//diversità(!==)
3 !== 5; //true
5 !== 5; //false

!(7 == 7)//false

7 !== '7'; //true
'7' !== '7'; //true

true !== true; //false
true !== false; //true

"pippo" !== "pippo"; //false
"pippo" !== "pluto"; //true

//maggiore e maggiore o uguale (> o >=)
//minor e minore o uguale (< o <=)

7>6;//true
7<8;//false
7>7;//false
7>=7;//true

//parentesi (())
((5+2)*2-(4-3));//13

//esercizio
!(true || true); //false
!(true || ("pippo" === "pluto")); //false
!((12%5)==3);//true
("ciao mondo" != ("ciao" +" "+"mondo"))==false;//false

//VARIABILE

//VAR -> NON USARE MAI
// var firstNumber = 1;

// // console.log(firstNumber);

// var secondNumber = 10;

// // console.log(secondNumber);

// var sumOfNumbers = firstNumber + secondNumber;

// console.log(sumOfNumber);

// var empty;

// console.log(empty);

//LET
// let firstNumber = 1;
// console.log(firstNumber);

// let secondNumber = 10;
// console.log(secondNumber);

// let sumOfNumbers = firstNumber + secondNumber;
// console.log(sumOfNumbers);

// let empty;
// console.log(empty);

// secondNumber = 20;

// let newSumOfNumbers = firstNumber+secondNumber;
// console.log(newSumOfNumbers);

// let firstName = "Stefania";
// let hello = "Ciao" + " " + firstName;
// console.log(hello);


//DIFERENZA TRA LET E VAR
// let pippo = 5; ->javacriprt segnala un errore perchè uso
// let pluto = pippo + 30;
// console.log(pluto);

// var paperoga = paperino + 30; -> javascript usare la variabile ma essa è
// var paperino = 5;
// console.log(paperoga);

//CONST
// const qui = true;
// const quo = false;
// const qua = qui && quo;

// console.log(qua);

// qui = false;//javascript mi segnala un errore perhè non posso cambiare valore ed 

//type off
// const variabile1 = 3;
// console.log(typeof variabile1);

// const variabile2 = true;
// console.log(typeof variabile2);

// const variabile3 = "axia";
// console.log(typeof variabile3);

// const variabile4 = typeof variabile1;
// console.log("il contenuto di variabile 4 è: " + variabile4 + " e il suo tipo è: " + typeof variabile4);

// const variabile5 = 5 > 6;
// console.log(typeof variabile5);

// let variabile6;
// console.log(typeof variabile6);

// let variabile7 = null;
// console.log(typeof variabile7);

// let variabile8 = NaN;
// console.log(typeof variabile8);

// let dynamic;
// console.log(typeof dynamic);

// dynamic = 5;
// console.log(typeof dynamic);

// dynamic = 'pippo'
// console.log(typeof dynamic);



//ALERT
// alert("ciao mondo!")

// const birthdayGirl = "Luis";

// alert("Auguri " + birthdayGirl);

//PROMPT
// const age = prompt("Quanti anni hai?");

// console.log(age);
// console.log(typeof age);

//CALCOLATRICE BASE
// const first = prompt("Dammi il primo numero:");
// const second = prompt("Dammi il secondo numero:");

// const firstToNumber = Number(first);
// const secondToNumber = Number(second);

// const somma = firstToNumber + secondToNumber;

// alert(somma);
// console.log("La somma è: " + somma);








