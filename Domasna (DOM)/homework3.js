let inputName = prompt("What is the name of the recipe?");
let inpurtNumberIngredients = prompt ("How many ingredients we need for the recipe?");

let ingredientsArray = [];
let size = inpurtNumberIngredients;

for (let i=0; i<size; i++) {
    ingredientsArray[i] = prompt("Input every ingredient with the amount needed for the recipe", + (i+1));
}

let divElement = document.createElement("div");
divElement.innerHTML = `<h2> ${inputName} <</h2>`;
document.body.appendChild(divElement);

let listIngredients = document.createElement("ul");
divElement.appendChild(listIngredients);

listIngredients.innerHTML = "";
for(i = 0; i < ingredientsArray.length; i++) {
    listIngredients.innerHTML += `<li>${ingredientsArray[i]}</li>`;
}
