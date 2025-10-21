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
"ciao"+""+"mamma"; //"ciao mamma"

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
!(true || ("pippo" == "pluto")); //false
!((12%5)==3);//true
("ciao mondo" != ("ciao" +""+"mondo"))===false;//false

console.log();



