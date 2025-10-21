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


const age = prompt("Quanti anni hai?")

const ageNumber = Number(age);

if (ageNumber <= 15) {
    alert("Sei piccolo!!");
} else if(ageNumber <= 25){
    alert("Quasi boomer");
} else if(ageNumber <= 35){
    alert("Sei propio un boomer");
} else if(ageNumber <= 45) {
    alert("BOOMEEEER!!!");
} else if(ageNumber <= 55) {
    alert("BOOMER!!! BOOMER!!!");
} else{
    alert("Sei un fossile :)")
}
