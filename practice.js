const APP_NAME = "My Js Project";

window.onload = function(){

    var outputElement = document.getElementById("output");


    //Class name
    outputElements.class.add("highlight");

    outputElement.onclick = function(){
        alert("Element clicked!");
    };


    outputElement.onmouseover = function(){
        outputElement.textContent = "Mouseover event!";
    };

    displayResult("Welcome to" + APP_NAME);

};

function performOperations() {
     // Two integer variables
     var num1 = 10;
     var num2 = 5;
 
     // Mathematical operation (addition)
     var result = num1 + num2;
 
     // If and else statement
     if (result > 15) {
         // Logical operator (AND)
         if (num1 > 5 && num2 > 2) {
             displayResult("Both conditions are true!");
         } else {
             displayResult("First condition is true, but second condition is false.");
         }
     } else {
         displayResult("Result is not greater than 15.");
     }

    //iterated array with accessed and used elements
    var fruits = ["Appl", "Banana", "Orange"];
    for (var i = 0; i < fruits.length; i++){
        displayResult("Fruit: " + fruits[i]);
    }

    //multiple arguments and return value
    var total = calcutedSum(10, 20, 30);
    displayResult("Total: " + total);

    var timeoutId = setTimeout(function(){
        displayResult("Delayed message after 2 sec");
    }, 2000);

    var intervaliId = setInterval(function(){
        displayResult("Int message every 3 sec")
    }, 3000);

    //stop setTimeout and setInterval after 10 sec
    setTimeout(function() {
        clearTimeout(timeoutId);
        clearInterval(intervalId);
    }, 10000);
}
function calculateSum(a, b, c) {
    return a + b + c;
}

// Output to console and browser via DOM
function displayResult(message) {
    console.log(message); // Output to console
    document.getElementById("output").textContent = message; // Output to browser
}


