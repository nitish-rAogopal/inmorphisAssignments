// Write a JavaScript function to fill an array with values (numeric, string with
//     one character) on supplied bounds.

function fillArray(start, end, bound) {
    let arr = [];
    var i;
    if (typeof start === 'number') {
        for (i = start; i <= end; i += bound) {
            arr.push(i);
        }
    }
    else {
        for (i = start.charCodeAt(); i <= end.charCodeAt(); i += bound) {
            arr.push(String.fromCharCode(i));
        }
    }
    return arr;
}
console.log(fillArray('a', 'z', 2));
console.log(fillArray(1, 20, 4));