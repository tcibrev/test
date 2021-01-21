let userInput = prompt("Enter the ammount of money you wish to withdraw:");
let withdrawnMoney = Number(userInput);
let b = withdrawnMoney;

let accountMoney = 700;
let a = accountMoney;

function leftMoney(a, b){
    let result = (a - b);
    return result;
}

if (withdrawnMoney > accountMoney){
    console.log("Not enough money.");
}
else if(withdrawnMoney <= accountMoney){
    console.log(`You are withdrawing: ${withdrawnMoney} denars. Money left on your account is ${leftMoney(a, b)} euros.`);
}
else{ 
    console.log(`Error`);
}