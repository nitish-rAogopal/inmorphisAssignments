
// Write a JavaScript script to empty an array keeping the original.let originalArray = [1, 2, 3, 4, 5];

let emptiedArray = originalArray.concat();
emptiedArray.length = 0;

console.log(originalArray);
console.log(emptiedArray);