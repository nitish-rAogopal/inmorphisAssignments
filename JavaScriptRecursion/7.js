// Write a JavaScript program to check whether a number is even or not.
function isEven(n) {
    if (n === 0)
        return true;
    if (n === 1)
        return false;
    return isEven(n - 2);
}
console.log(isEven(78));
console.log(isEven(8));
console.log(isEven(98));