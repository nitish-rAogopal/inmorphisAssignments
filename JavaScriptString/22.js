// Write a JavaScript function to get a part of a string after a specified character.
// Test Data :
// console.log(subStrAfterChars('w3resource: JavaScript Exercises', ':','a'));
// console.log(subStrAfterChars('w3resource: JavaScript Exercises', 'E','b'));
// Output :
// "w3resource"
// "xercises"

function subStrAfterChars(str, chr, order) {
    var i = str.indexOf(chr);
    if (order === 'a')
        return str.slice(0, i);
    else
        return str.slice(i + 1);
}
console.log(subStrAfterChars('w3resource: JavaScript Exercises', ':', 'a'));
console.log(subStrAfterChars('w3resource: JavaScript Exercises', 'E', 'b'));