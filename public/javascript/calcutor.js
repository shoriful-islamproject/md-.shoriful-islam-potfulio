let currenDisply = "";  // Global variable

// Function to update display
function updateDisplay() {
    document.querySelector("#man").value = currenDisply;
}

// Function to clear display
function clearDisplay() {
    currenDisply = "";
    updateDisplay();
}

// Function to append numbers/operators
function appendNumber(value) {
    currenDisply += value;
    updateDisplay();
}

// Function to evaluate the expression
function calculateResult() {
    try {
        currenDisply = eval(currenDisply).toString();
        updateDisplay();
    } catch (error) {
        alert("Invalid Expression!");
    }
}
