// Write a JavaScript program to compute the sum and product of an array of integers.
const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
var sum = 0, product = 1;
for (var i in arr) {
    sum += arr[i];
    product *= arr[i];
}
console.log('Sum of array elements : ', sum);
console.log('Product of array elements : ', product);