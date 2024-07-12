// Write a JavaScript program to sort the items of an array.
var myArray = [3, 8, 7, 6, 5, -4, 3, 2, 1];
function sortArray(arr) {
  return arr.sort((a, b) => a - b);
}
var sortedArray = sortArray(myArray);
console.log(sortedArray);