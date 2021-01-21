// Homework #3

// Title: Looping structures

// Description: Write a JavaScript function that will return:
// The sum of the MAX and MIN numbers from an array with numbers
// Ex: arr = [3, 5, 6, 8, 11]
// Output: Max: 11, Min: 3, Sum: 14

// Bonus: Try making the function work if there are other types of items in it


maxMinArray = [11, 90, 2, 7, 33, 50, 44, 5, 6, "string","number",true, null];

function minMax(argument){
    let max = 0;
    let min = 99999;

for (i = 0; i < argument.length; i++){
    if (argument[i] > max){
        max = argument[i];
        if(argument[i] < min){
            min = argument[i];
        }
    }
}
console.log("Max:", max,"Min:",min,"Sum:",(max + min));
}

minMax(maxMinArray);