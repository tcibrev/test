let numberArray = [11, 111, 44, 20, 80];

function validateAndSumNumber() {
    let sum = 0;
    for (let i = 0; i < numberArray.length; i++)
    sum += parseInt(numberArray[i]);
    if (isNaN(sum) === true) {
        console.error("Enter a valid number");
    }
    else {
        console.log(sum);
    }
}

validateAndSumNumber();