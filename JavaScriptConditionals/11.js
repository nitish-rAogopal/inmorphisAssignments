// Write a JavaScript program to compute the greatest common divisor (GCD)
// of two positive integers.
var x = 144;
var y = 126;
var gcd;
for (var i = 1; i <= (x < y ? x : y); i++)
    if (x % i == 0 && y % i == 0)
        gcd = i;

console.log("GCD of ", x, " and ", y, " is: ", gcd);
