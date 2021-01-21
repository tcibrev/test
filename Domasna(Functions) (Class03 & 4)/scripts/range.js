// Homework #2

// Title: Looping structures

// Description: Write a loop in JavaScript that in range from 1 till 20 will write in the console every number, and will add the "\n" new line after every even number otherwise it will add " " empty space.

for (var n=0; n<=20; n++) {
    if (n === 0) {
            console.log(n +  " is Even");
    }
    else if (n % 2 === 0) {
            console.log(n + " is Even");   
    }
    else {
            console.log(n + " is Odd");
    }
}