// Write a JavaScript program where the program takes a random integer
// between 1 to 10, the user is then prompted to input a guess number. If the user
// input matches with guess number, the program will display a message "Good
// Work" otherwise display a message "Not matched". 9. Write a JavaScript
// program to calculate days left until next Christmas. 10. Write a JavaScript
// program to calculate multiplication and division of two numbers (input from
// user).


function multiply() {
    let a = document.getElementById("f").value;
    let b = document.getElementById("s").value;
    let res;
    res = a * b;
    document.getElementById("res").innerHTML = "Result is : " + res;
}
function divide() {
    let a = document.getElementById("f").value;
    let b = document.getElementById("s").value;
    let res;
    res = a / b;
    document.getElementById("res").innerHTML = "Result is : " + res;
}