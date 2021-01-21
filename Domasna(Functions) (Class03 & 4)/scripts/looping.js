// Title: Looping structures

// Description:Write a javascript function that:
// When given 2 arrays of students firstNames and lastNames will return a new array with students full names
// Every name should have a numeric value before it
// Ex: first = ["Bob", "Jill"], last = ["Gregory", "Wurtz"]
// Result: full = ["1. Bob Gregory", "2. Jill Wurtz"]

let firstNames = ["Antony", "Jill", "Makis", "Anabel", "Bob",];
let lastNames = ["Gregory", "Wurtz", "Clerck", "Zuri", "Hopkins",];

function fullnames(x,y){
    let firstName = 0;
    let lastName = 0;
    full =[];
    for (i = 0, j = 0; i < x.length, j < y.length; i++, j++){
        firstName = x[i];
        lastName = y[j];
        full.push([i+1]+"."+" " + firstName + " " + lastName);
    }
    console.log(full);
}

fullnames(firstNames, lastNames);
