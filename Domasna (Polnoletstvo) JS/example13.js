let userInput = prompt("Внесете го вашиот роденден   месец/ден/година");

var stringFormatedDate = userInput.match(/(\d\d)(\d\d)(\d\d\d\d)/);

let date = new Date(stringFormatedDate[3], stringFormatedDate[1] - 1, stringFormatedDate[2]);

// input date 
let inputDay = date.getDate();

let inputMonth = date.getMonth() +1;

let inputYear = date.getFullYear();

let todayDate = new Date();


// todayDate
let todayDay = todayDate.getDate();

let todayMonth = todayDate.getMonth () +1;

let todayYear = todayDate.getFullYear();

if (todayYear - inputYear <=17) {
    console.log ("Малолетен");
}
else if (todayYear-inputYear > 18 ) {
    console.log ( "Полнолетен")
}
else if (todayYear - inputYear == 18 && inputMonth < todayMonth ) {
    console.log ("Полнолетен")
}
else if ( todayYear - inputYear == 18 && inputMonth > todayMonth ) {
    console.log ("Малолетен")
}
else if (todayYear - inputYear == 18 && inputMonth == todayMonth && inputDay <= todayDay ) {
    console.log ("Полнолетен")
}
else if (todayYear - inputYear == 18 && inputMonth == todayMonth && inputDay > todayDay) {
    console.log ("Малолетен")
}