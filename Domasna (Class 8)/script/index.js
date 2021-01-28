$(document).ready(function(){
    let inputText = $("#inputText");

$("#buttonGreet").click(function (){
    $("#greetForm").after(`<h1> Hello There ${inputText.val()}!</h1>`) ;
});
 
$("#generateText").click(function (){
        let userTextInput = $("#textInput").val();
        let userColorInput = $("#colorInput").val();
        let validateColor = CSS.supports("color",userColorInput);
        let validateText = (userTextInput.length > 0)
        
        if ((validateColor == true) && (validateText == true)){
            $("#textColorForm").after(`<h1 id="newHeading">${userTextInput}</h1>`);
           $("#newHeading").css("color",userColorInput); 
        }
        else{
            $("#textColorForm").after("<h3> Please enter some text and a valid color</h3>") 
        };
})
});