// Write a JavaScript program to compute the sum of an array of integers.
// Example : var array = [1, 2, 3, 4, 5, 6]
// Expected Output : 21

function sumOfArray(arr) {
    if (arr.length === 0) return 0;
    return arr.pop() + sumOfArray(arr);
}
console.log(sumOfArray([1, 2, 3, 4, 5, 6, 2]));