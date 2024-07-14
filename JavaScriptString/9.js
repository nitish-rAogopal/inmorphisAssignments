// Write a JavaScript function to capitalize the first letter of each word in a string.
// Test Data :
// console.log(capitalize_Words('js string exercises'));
// "Js String Exercises"

function capitalize_Words(str = 'js string exercises') {
    const arr = str.split(' ');
    for (var i = 0; i < arr.length; i++) {
        arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].slice(1, arr[i].length);
    }
    return arr.join(' ');
}
console.log(capitalize_Words('js string exercises'));