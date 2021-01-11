var chineseZodiac = function (animalResult) {
    if(animalResult()===false)  
    {alert("Nice");}    
    else {alert("Chinese zodiac sign is "+animalResult());}};
var animalResult = function () {

    if(year%12===0) { return "Monkey";} 

    else if (year%12===1) {return "Rooster";}
    
    
    else if (year%12===3) {return "Pig";}

    else if (year%12===4) {return "Rat";}

    else if (year%12===5) {return "Ox";}

    else if (year%12===6) {return "Tiger";}

    else if (year%12===7) {return "Rabbit";}

    else if (year%12===8) {return "Dragon";}

    else if (year%12===9) {return "Snake";}

    else if (year%12===10) {return "Horse";}

    else { return "Sheep"; } };

year = prompt("Input Year:");
chineseZodiac (animalResult);