console.log('======================================================');
console.log('======================oggetti!!!======================');
console.log('======================================================');

// ACCEDERE ALLE PROPRIETÀ

// const luis = {
//     name : 'luis',
//     lastname : 'amoretti',
//     age : 21,
//     gender : 'maschio',
//     nationality : 'perù',
//     isMarried : false,
//     address : {
//         street : 'via aaaa 55',
//         civic : 34,
//         city : 'genova',
//         country : 'italia'
//     },
//     interests : [
//         'musica',
//         'pagliaccio',
//         'bullo'
//     ]
// }


// // ACCEDERE ALLE PROPRIETÀ
// console.log(luis);
// console.log(luis.address.street);
// console.log(luis.age);
// console.log(luis.interests);

// ///CAMBIARE O AGGIUNGERE PROPRIETÀ

// luis.age = 25;
// console.log(luis);

// luis.interests[2] = 'super bullo';
// console.log(luis);

// luis.siblings = 1; //nuova proprietà
// console.log(luis);

// delete luis.gender; //elimanare una proprietà
// console.log(luis);

// //FUNZIONI COME PROPRIETÀ

// function saluta() {
//     console.log('ciao sono luis');
// }

// luis.speak = saluta;
// luis.speak();

//

// function calculateMean() {
    
// }


// const leonardo = {
//     name : 'leonardo',
//     surname : 'silva',
//     yob : 1998,
//     marks : [5, 6, 9, 10]
// }

// const evelyn = {
//     name : 'leonardo',
//     surname : 'silva',
//     yob : 1998,
//     marks : [9, 8, 7, 8]
// }

// const luis = {
//     name : 'luis',
//     surname : 'amoretti',
//     yob : 2004,
//     marks : [10, 10, 8, 5]
// }

// const students = [leonardo, evelyn, luis];

// console.log();


// for (let i = 0; i < students.length; i++) {
//     const student = students[i];
//     console.log(student.name , student.surname, calculateMean(student.marks));
// }


// FOR IN

// const ariel = {
//     name : 'Ariello',
//     age : 4,
//     race: 'border collie',
//     type : 'dog',
//     'peggior nemico' : 'husky'
// }

// let emptyString = '';

// for (const key in ariel) {
//     // if (!Object.hasOwn(object, key)) continue;
//     console.log(key);

//     const value = ariel[key]
    
//     emptyString += key + ': ' + value + '\n';
// }

// console.log(emptyString);

// console.log(ariel.name);
// console.log(ariel['name']);
// console.log(ariel['peggior nemico']);


//JSON (JavaScript Obeject Notation)

// const luis = {
//     name : 'luis',
//     lastname : 'amoretti',
//     age : 21,
//     gender : 'maschio',
//     nationality : 'perù',
//     isMarried : false,
//     address : {
//         street : 'via aaaa 55',
//         civic : 34,
//         city : 'genova',
//         country : 'italia'
//     },
//     interests : [
//         'musica',
//         'pagliaccio',
//         'bullo'
//     ]
// }

// console.log(luis);


// const luiString = JSON.stringify(luis)
// console.log(luiString);

// '{"name":"luis","lastname":"amoretti","age":21,"gender":"maschio","nationality":"perù","isMarried":false,"address":{"street":"via aaaa 55","civic":34,"city":"genova","country":"italia"},"interests":["musica","pagliaccio","bullo"]}'

// const dataString = '{"name" : "Andrea", "surname" : "Asioli", "yob" : "1978", "isMarried" : "false"}';
// console.log(dataString);

// const data = JSON.parse(dataString);
// console.log(data);
























