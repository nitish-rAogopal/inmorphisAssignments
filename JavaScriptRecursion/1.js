// Write a JavaScript program to calculate the factorial of a number.
// In mathematics, the factorial of a non-negative integer n, denoted by n!, is the
// product of all positive integers less than or equal to n. For example, 5! = 5 x 4 x 3
// x 2 x 1 = 120

function factorial(num) {
    if (num === 0) return 1;
    return num * factorial(num - 1);
}
console.log(factorial(0));
console.log(factorial(1));
console.log(factorial(2));
console.log(factorial(3));
console.log(factorial(4));
console.log(factorial(5));
console.log(factorial(6));