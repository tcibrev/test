let userInput = prompt("Enter the ammount of money you that wish to withdraw:");
let withdrawnMoney = Number(userInput);
let b = withdrawnMoney;
let userInput1 = prompt("Deposit the amount of money that you wish to add");
let depositMoney = Number(userInput);
let c = depositMoney;



let accountMoney = 700;
let a = accountMoney;

function globalBalance(a, b, c){
    let result = (a - b + c);
    return result;

}

if (withdrawnMoney > accountMoney){
    console.log("Not enough money.");
}
else if(withdrawnMoney <= accountMoney){
    console.log(`You are withdrawing: ${withdrawnMoney} denars. Money left on your account is ${globalBalance(a, b, c)} euros.`);
}
else{ 
    console.log(`Error`);
}
