// Write a JavaScript function to get the first element of an array. Passing a
// parameter 'n' will return the first 'n' elements of the array.

function firstElements(arr, n) {
    if (n === undefined) {
        return arr[0];
    }
    if (n < 0)
        return [];
    return arr.slice(0, n);
}


// Getting the first element
console.log(firstElements([7, 9, 0, -2])); // 7

// Getting the first 1 element (same as above)
console.log(firstElements([7, 9, 0, -2], 1)); // [7]

// Getting the first 3 elements
console.log(firstElements([7, 9, 0, -2], 3)); // [7, 9, 0]

// Getting the first 6 elements (more than the length of the array)
console.log(firstElements([7, 9, 0, -2], 6)); // [7, 9, 0, -2]

console.log(firstElements([7, 9, 0, -2], -3));
