// HOMEWORK Part 1

// Change the page with JavaScript

//     Change the text of all paragraphs and headers with javascript
//     Note:The html must not be changed

//Changing the header H1
var element = document.getElementById("myTitle");
element.innerHTML = "This is the new heading";

//Changing the first paragraph 
document.getElementsByClassName('paragraph')[0].innerHTML = "The text has been changed!"

//Changing the second paragraph
document.getElementsByClassName('paragraph second')[0].innerHTML = "Second paragraph has been changed"

//Changing <text> from line 20
document.getElementsByTagName("text")[0].innerHTML = "Text has been changed again"

//Changing the H1 from the last div
document.getElementsByTagName("h1")[1].innerHTML = "Header 1 has been changed"

//Changing the H3 from the last div
document.getElementsByTagName("h3")[0].innerHTML = "Header 3 has been changed"