/*EASY: Create a button that when you click on it, it toggles a message inside of a div. 
Using a condition that you create (hint: checking if a random number is of a certain value), 
toggle the message fast or slow.
If the condition is TRUE, toggle the message fast. If the condition is FALSE, toggle the message slow.*/

// Add the div/button to the body tag
function addElements() {             
    var button = $("<button></button>").text("My First Button.");  
    var div = $("<div></div>").text("My First Div.");
    $("body").append(div, button);      
}

addElements();

// Wait until the html has fully loaded before using the event listener
$(document).ready(function(){
    $("button").click(function(){
      if (Math.random() > .5) {
        $("div").toggle("fast");
      } else {
        $("div").toggle("slow");
      }
    });
});


