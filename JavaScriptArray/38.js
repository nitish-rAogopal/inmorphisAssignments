// Write a JavaScript function to move an array element from one position to
// another.
// Test Data :
// console.log(move([10, 20, 30, 40, 50], 0, 2));
// [20, 30, 10, 40, 50]
// console.log(move([10, 20, 30, 40, 50], -1, -2));
// [10, 20, 30, 50, 40]

function move(arr, from, to) {
    if (from < 0) from += arr.length;
    if (to < 0) to += arr.length;
    const element = arr.splice(from, 1)[0];
    arr.splice(to, 0, element);
    return arr;
}
console.log(move([10, 20, 30, 40, 50], 0, 2));
console.log(move([10, 20, 30, 40, 50], -1, -2));