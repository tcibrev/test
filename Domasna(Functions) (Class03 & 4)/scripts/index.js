// Object example
function myFunc(theObject) {
  theObject.brand = "Mercedes";
}

var mycar = {
  brand: "Opel",
  model: "Astra",
  year: 2007
};

console.log(mycar.brand);

myFunc(mycar);

console.log(mycar.brand);


// Boolean example
var YES = true;
var NO = false;

alert(YES);
alert(NO);

// Number exmaple
let insertedCNumber = Number(prompt("Insert C number"));
console.error(insertedCNumber*1.8 + 32);

let insertedFNumber = Number(prompt("Insert F number"));
console.error((5/9)*(insertedFNumber-32));

function CtoF (insertedCNumber) {
    return console.error(insertedCNumber*1.8 + 32);
}

CtoF(insertedCNumber);

const FtoC = insertedFNumber => console.error((5/9)*(insertedFNumber-32));

FtoC(insertedFNumber);

