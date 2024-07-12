// Write a JavaScript program to find the greatest common divisor (gcd) of two
// positive numbers.

function gcd(a, b) {
    if (a % b === 0) return b;
    return gcd(b, a % b)
}

console.log(gcd(144, 128));
console.log(gcd(162, 126));
console.log(gcd(14, 126));