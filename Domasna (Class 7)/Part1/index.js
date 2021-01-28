 let Dog = {
    name: "Lara",
    kind: "Husky",
    speak: document.getElementById("buttonSubmit").addEventListener("click", function (){
        userInput = document.getElementById("inputText").value
        Dog.speak = userInput;
        console.log(`${Dog.name} the ${Dog.kind} says: ${Dog.speak}`);
},false)
}

