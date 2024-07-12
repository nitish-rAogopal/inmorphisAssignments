// Write a JavaScript program to compute the exponent of a number.
// Note : The exponent of a number says how many times the base number is used
// as a factor.
// 82 = 8 x 8 = 64. Here 8 is the base and 2 is the exponent.

function exponentOfNumber(num, exp) {
    if (exp === 0) return 1;
    return num * exponentOfNumber(num, exp - 1);
}
console.log(exponentOfNumber(6, 2));