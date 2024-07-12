// Write a JavaScript program to find the sum of squares of a numeric vector.
function sumOfSquares(vector) {
    let sum = 0;
    for (let i = 0; i < vector.length; i++) {
        sum += vector[i] ** 2;
    }
    return sum;
}
const vector = [1, 2, 3, 4, 5];
const result = sumOfSquares(vector);
console.log(result);
