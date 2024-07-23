// to clear the disply screen
function clearDisplay() {
    document.getElementById("display_screen").value = '';
}

// to delete the last character from the screen 
function deleteLast() {
    var display = document.getElementById("display_screen");
    display.value = display.value.slice(0, -1);
}

// to display more than one number on screen
function appendDisplay(value) {
    var display = document.getElementById("display_screen");
    display.value += value;
}

// to evaluate the expression
function evaluateExpression() {
    document.getElementById("display_screen");
    try { 
        display_screen.value = eval(display_screen.value);
     }
        catch (error) { 
            display_screen.value = ''; 
            display_screen.placeholder = 'Error!!'; 
            setTimeout(function() { 
                display_screen.placeholder = ''; 
            }, 2000); }
}

// for keyboard events 
document.addEventListener("keydown", function(event) {
    var key = event.key;
    
    if(/\d|\+|\/|\*|-/.test(key)) { // for 0 to 9 digits and +,-,/,* operators
        appendDisplay(key);
    }
    else if(key === '.') { // for decimal point
        appendDisplay('.');
    }
    else if(key === 'Enter') { // for evaluating on pressing enter
        var display = document.querySelector(".display_screen");
        display.value = eval(display.value);
    }
    else if(key === 'Backspace') { // to delete the last char
        deleteLast();
    }
    else if(key === 'Escape') { // clearing the screen on pressing the eescape button
        clearDisplay();
    }
}); 
