// Write a JavaScript function that accepts a number as a parameter and check
// the number is prime or not.

function checkPrime(num) {
    let fact = 0;
    for (let i = 2; i < num / 2; i++) {
        if (num % i == 0)
            fact++;
        if(fact>0)
            return false;
    }
    return true;
}
console.log(checkPrime(7));
console.log(checkPrime(9));
console.log(checkPrime(11));
console.log(checkPrime(47));
console.log(checkPrime(56));