function sayHello() {
    console.log('Hello');
}

const helloHello = () => console.log('Hello Hello!!');


const superHello = function () {
    console.log('Super Hello!!');
}

console.log(helloHello);
console.log(superHello);
console.log(sayHello);


/// FUNZIONI CON PARAMETRI IN INPUT

/// FILTER
const numbers = [-100, -30, 20, 11, 1, 40, -21, 31, 30, 42 -12, 6, 3, 300, 5001];

const testArray = ['pippo', 'pluto', 'paperino', 'qui', 'quo', 'qua'];


/// FUNCTIONS
function keepPositive(nbrArray) {
    const newArray = [];

    for (const nbr of nbrArray) {
        if (nbr >= 0) {
            newArray.push(nbr);
        }
    }

    return newArray;
}

console.log(keepPositive(numbers));

function keepGreaterThan30(nbrArray) {
    const newArray = [];

    for (const nbr of nbrArray) {
        if (nbr > 30) {
            newArray.push(nbr);
        }
    }

    return newArray;
}

console.log(keepGreaterThan30(numbers));

function keepLongherThan3(strArray) {
    const newArray = [];

    for (let i = 0; i < strArray.length; i++) {
        const str = strArray[i];
        
        if (str.length > 3) {
            newArray.push(str);
        }
    }
    
    return newArray;
}

console.log(keepLongherThan3(testArray));


function highFilter(array, conditionFunction) {
    const newArray = [];

    for (let i = 0; i < array.length; i++) {
        const element = array[i];

        if (conditionFunction(element)) {
            newArray.push(element);
        }
    }

    return newArray;
}

function isEven(nbr) {
    if (nbr % 2 === 0) {
        return true;
    } else {
        return false;
    }
}

console.log(highFilter(numbers, isEven));

function notStartingWithP(str) {
    const firstChar = str[0];
    const firstLower = firstChar.toLowerCase();

    if (firstLower !== 'p') {
        return true;
    } else {
        return false;
    }
}

console.log(highFilter(testArray, notStartingWithP));

console.log(highFilter(numbers, (nbr) => nbr < 0));

console.log(numbers.filter((nbr) => nbr < 0));

/// MAP
function  multiplyBy3(nbrArray) {
    const newArray = [];

    for (let i = 0; i < nbrArray.length; i++) {
        const nbr = nbrArray[i];
        const newBr = nbr * 3;
        newArray.push(newBr);
    }
    return newArray;
}

console.log(multiplyBy3(numbers));

function  multiplyArrayPosition(nbrArray) {
    const newArray = [];

    for (let i = 0; i < nbrArray.length; i++) {
        const nbr = nbrArray[i];
        const newBr = nbr * i;
        newArray.push(newBr);
    }
    return newArray;
}

console.log(multiplyArrayPosition(numbers));

function  toUpperCaseArray(strArray) {
    const newArray = [];

    for (let i = 0; i < strArray.length; i++) {
        const nbr = strArray[i];
        const newString = nbr.toUpperCase();
        newArray.push(newString);
    }
    return newArray;
}

console.log(toUpperCaseArray(testArray));

function highMap(array, transformFunction) {
    const newArray = [];

    for (let i = 0; i < array.length; i++) {
        const element = array[i];
        const newElement = transformFunction(element, i);
        newArray.push(newElement);
    }
    return newArray;
}

function multiplyBy3Number(nbr) {
    return nbr * 3;
}

console.log(highMap(numbers, multiplyBy3Number));
console.log(highMap(numbers, (nbr) => nbr * 3));
console.log(numbers.map((nbr) => nbr * 3));

console.log(highMap(testArray, (str) => str.toUpperCase()));
console.log(testArray.map((str) => str.toUpperCase()));

console.log(highMap(numbers, (nbr, i) => nbr * i));
console.log(numbers.map((nbr, i) => nbr * i));
