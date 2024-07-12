// Write a JavaScript function to generate an array of specified length, filled with
// integer numbers, increase by one from starting position.
// Test Data :
// console.log(array_range(1, 4));
// [1, 2, 3, 4]
// console.log(array_range(-6, 4));
// [-6, -5, -4, -3]

function array_range(start, length) {
    const arr = [];
    for (let i = 0; i < length; i++) {
        arr.push(start + i);
    }
    return arr;
}

console.log(array_range(1, 4)); 
console.log(array_range(-6, 4));