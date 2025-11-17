// function sayHello() {
//     console.log('Hello');
// }

// const helloHello = () => console.log('Hello Hello!!');


// const superHello = function () {
//     console.log('Super Hello!!');
// }

// console.log(helloHello);
// console.log(superHello);
// console.log(sayHello);


// /// FUNZIONI CON PARAMETRI IN INPUT

// /// FILTER
// const numbers = [-100, -30, 20, 11, 1, 40, -21, 31, 30, 42 -12, 6, 3, 300, 5001];

// const testArray = ['pippo', 'pluto', 'paperino', 'qui', 'quo', 'qua'];


// /// FUNCTIONS
// function keepPositive(nbrArray) {
//     const newArray = [];

//     for (const nbr of nbrArray) {
//         if (nbr >= 0) {
//             newArray.push(nbr);
//         }
//     }

//     return newArray;
// }

// console.log(keepPositive(numbers));

// function keepGreaterThan30(nbrArray) {
//     const newArray = [];

//     for (const nbr of nbrArray) {
//         if (nbr > 30) {
//             newArray.push(nbr);
//         }
//     }

//     return newArray;
// }

// console.log(keepGreaterThan30(numbers));

// function keepLongherThan3(strArray) {
//     const newArray = [];

//     for (let i = 0; i < strArray.length; i++) {
//         const str = strArray[i];
        
//         if (str.length > 3) {
//             newArray.push(str);
//         }
//     }
    
//     return newArray;
// }

// console.log(keepLongherThan3(testArray));


// function highFilter(array, conditionFunction) {
//     const newArray = [];

//     for (let i = 0; i < array.length; i++) {
//         const element = array[i];

//         if (conditionFunction(element)) {
//             newArray.push(element);
//         }
//     }

//     return newArray;
// }

// function isEven(nbr) {
//     if (nbr % 2 === 0) {
//         return true;
//     } else {
//         return false;
//     }
// }

// console.log(highFilter(numbers, isEven));

// function notStartingWithP(str) {
//     const firstChar = str[0];
//     const firstLower = firstChar.toLowerCase();

//     if (firstLower !== 'p') {
//         return true;
//     } else {
//         return false;
//     }
// }

// console.log(highFilter(testArray, notStartingWithP));

// console.log(highFilter(numbers, (nbr) => nbr < 0));

// console.log(numbers.filter((nbr) => nbr < 0));

// /// MAP
// function  multiplyBy3(nbrArray) {
//     const newArray = [];

//     for (let i = 0; i < nbrArray.length; i++) {
//         const nbr = nbrArray[i];
//         const newBr = nbr * 3;
//         newArray.push(newBr);
//     }
//     return newArray;
// }

// console.log(multiplyBy3(numbers));

// function  multiplyArrayPosition(nbrArray) {
//     const newArray = [];

//     for (let i = 0; i < nbrArray.length; i++) {
//         const nbr = nbrArray[i];
//         const newBr = nbr * i;
//         newArray.push(newBr);
//     }
//     return newArray;
// }

// console.log(multiplyArrayPosition(numbers));

// function  toUpperCaseArray(strArray) {
//     const newArray = [];

//     for (let i = 0; i < strArray.length; i++) {
//         const nbr = strArray[i];
//         const newString = nbr.toUpperCase();
//         newArray.push(newString);
//     }
//     return newArray;
// }

// console.log(toUpperCaseArray(testArray));

// function highMap(array, transformFunction) {
//     const newArray = [];

//     for (let i = 0; i < array.length; i++) {
//         const element = array[i];
//         const newElement = transformFunction(element, i);
//         newArray.push(newElement);
//     }
//     return newArray;
// }

// function multiplyBy3Number(nbr) {
//     return nbr * 3;
// }

// console.log(highMap(numbers, multiplyBy3Number));
// console.log(highMap(numbers, (nbr) => nbr * 3));
// console.log(numbers.map((nbr) => nbr * 3));

// console.log(highMap(testArray, (str) => str.toUpperCase()));
// console.log(testArray.map((str) => str.toUpperCase()));

// console.log(highMap(numbers, (nbr, i) => nbr * i));
// console.log(numbers.map((nbr, i) => nbr * i));


// /// REDUCE
// function sumAll(nbrArray) {
//     let sum = 0;
//     for (let i = 0; i < nbrArray.length; i++) {
//         const nbr = nbrArray[i];
//         sum = sum + nbr;
//     }
//     return sum;
// }

// console.log(sumAll(numbers));

// function stringWithFirstChars(strArray) {
//     let newString = '';
//     for (let i = 0; i < strArray.length; i++) {
//         const char = strArray[i];

//         const firstChar = char[0];
//         newString = newString + firstChar;
//     }
//     return newString;
// }

// console.log(stringWithFirstChars(testArray));

// function highReduce(array, reduceFunction, startingValue) {
//     let accumulator = startingValue;
//     for (let i = 0; i < array.length; i++) {
//         const current = array[i];
//         accumulator = reduceFunction(accumulator, current, i);
//     }
//     return accumulator;
// }

// console.log(highReduce(numbers, (acc, cur) => acc + cur, 0));
// console.log(numbers.reduce((acc, cur) => acc + cur, 0));

// function sumFirstChar(acc, cur) {
//     const firstChar = cur[0];
//     return acc + firstChar;
// }

// console.log(highReduce(testArray, sumFirstChar, ''));
// console.log(testArray.reduce(sumFirstChar, ''));
// console.log(testArray.reduce((acc, cur) => acc + cur[0], ''));


//FOREACH

const students = [
    'luis', 
    'alexander', 
    'salma', 
    'stefhania', 
    'isac', 
    'jordy', 
    'eros', 
    'evelyn', 
    'daniel',
    'leonardo'
];

const numbers1 = [20, 15, 124, 36, 9, 39, 74, 175, 200, 1, 0, 55];

// for (let i = 0; i < students.length; i++) {
//     const student = students[i];
//     console.log(student);
// }

// for (const student of students) {console.log(student)}

// students.forEach((student, i) => console.log(i,student));

//FIND
// function isGreatThan100(nbrArray) {
//     return nbrArray > 100;
// }

// function isGreatThan5000(nbrArray) {
//     return nbrArray > 5000;
// }

// console.log(numbers.filter(isGreatThan100));
// console.log(numbers.find(isGreatThan100));
// console.log(numbers.filter(isGreatThan100));


//SOME
// console.log(numbers.some(isGreatThan100));
// console.log(numbers.some(isGreatThan5000));


//SORT
// numbers.sort((a,b) => a - b); // crescente
// numbers.sort((a,b) => b - a); // decrescente
// numbers.sort();
// console.log(numbers);

// students.sort();
// console.log(students);

// function compareNumbersAscinding(n1, n2) {
//     // if (n1 > n2) {
//     //     return 1;
//     // } else if (n2 > n1) {
//     //     return -1;
//     // } else {
//     //     return 0;
//     // }
//     return n1 - n2
// }

// function compareNumbersDescending(n1, n2) {
//     return n2 - n1
// }

// function compareNumbersAscending(n1, n2) {
//     return n2 - n1
// }

// function compareNumbersDescending(s1, s2) {
//     return s1.localeCompare(s2);
// }

// function compareNumbersDescending(s1, s2) {
//     return s2.localeCompare(s1);
// }


// numbers.sort(compareNumbersAscinding);
// console.log(numbers);


const cars = [
    {
        model: 'g-wagon',
        producer: 'mercedes',
        maxSpeed: 220
    },
    {
        model: 'panda',
        producer: 'fiat',
        maxSpeed: 160
    },
    {
        model: 'civic',
        producer: 'honda',
        maxSpeed: 250
    },
    {
        model: 'mustang',
        producer: 'ford',
        maxSpeed: 240
    },
    {
        model: 'aventador',
        producer: 'lamborghini',
        maxSpeed: 350
    }
]


// function compareCarsBySpeedDescending(car1, car2) {
//     return car2.maxSpeed - car1.maxSpeed;
// }

// function compareCarsByModelAscending(car1, car2) {
//     return car1.model.localeCompare(car2.model);
// }

// function compareCarsBySpeedDescendingAndModel(car1, car2) {
//     if (car1.maxSpeed > car2.maxSpeed) {
//         return 1;
//     } else if (car2.maxSpeed > car1.maxSpeed) {
//         return -1;
//     } else {
//         return car1.model.localeCompare(car2.model);
//     }
// }

// cars.sort(compareCarsBySpeedDescending);
// cars.sort(compareCarsByModelAscending);
// cars.sort(compareCarsBySpeedDescendingAndModel);
// console.log(cars);

//SORTIN NOT IN PLACE

const numbers2 = [200, 2, -20, 12, 5, 1000];
const doubleNumbers = numbers2.map((n) => n * 2);

console.log(doubleNumbers);
console.log(numbers2);

numbers2.sort((n1, n2) => n1 - n2);

function correctSort(array, compareFn) {
    const clone = [...array];
    clone.sort(compareFn);
    return clone;
}

const sortedNumbers = correctSort(numbers2, (n1, n2) => n1 - n2);
console.log(sortedNumbers);







