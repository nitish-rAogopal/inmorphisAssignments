//Write a JavaScript function to clone an array.
function cloneArray(arr) {
    return arr.slice(0);
}

let originalArray = [1, 2, 3, 4];
let clonedArray = cloneArray(originalArray);

console.log(clonedArray); // [1, 2, 3, 4]

originalArray.push(5);
console.log(originalArray); // [1, 2, 3, 4, 5]
console.log(clonedArray);  // [1, 2, 3, 4]