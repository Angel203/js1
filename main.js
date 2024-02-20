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
}

// Output to console and browser via DOM
function displayResult(message) {
    console.log(message); // Output to console
    document.getElementById("output").textContent = message; // Output to browser
}