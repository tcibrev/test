
// HOMEWORK Part 2

// Print all numbers from an array and the sum

//     Create an array with numbers
//     Print all numbers from the array in a list element, in a new HTML page
//     Print out the sum of all of the numbers below the list
//     Bonus: Try printing the whole mathematical equasion as well ( 2 + 4 + 5 = 11)


// Array of the numbers
let arrayOfNumbers = [33, 13, 2, 10, 4, 3, 5, 7];
// Getting the numberList
let ulist = document.getElementById("numbersList");

// Calling function of Array
function printSomething (array) {
    sum = array[0];
    for (i = 0; i < array.length; i++){
        let li = document.createElement("li");
        li.appendChild(document.createTextNode(array[i]))
        ulist.appendChild(li);
        sum += array[i]
    }

    let sumParagraph = document.createElement("p")
    sumParagraph.appendChild(document.createTextNode(sum))
    ulist.appendChild(sumParagraph)
    let equation = document.createElement("p");
    ulist.appendChild(equation) 
    equation.innerText  = ["(" + arrayOfNumbers.join("+") + "=" + sum +")"]
}

console.log(printSomething(arrayOfNumbers));
