// Write a JavaScript program to get the integers in range (x, y).
// Example : range(2, 9)

// Expected Output : [3, 4, 5, 6, 7, 8]
var arr = [];
function range(x, y) {
    arr.push(++x);
    if (x + 1 < y) {
        range(x, y);
    }
}
range(2, 9);
console.log(arr);