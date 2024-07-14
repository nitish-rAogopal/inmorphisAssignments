// Write a JavaScript function to check whether a string is blank or not.
// Test Data :
// console.log(is_Blank(''));
// console.log(is_Blank('abc'));
// true
// false

function isBlankString(str) {
    return str.length > 0 ? false : true;
}
console.log(isBlankString(""));
console.log(isBlankString('abs'));