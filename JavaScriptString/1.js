// Write a JavaScript function to check whether an `input` is a string or not.
// Test Data :
// console.log(is_string('w3resource'));
// true
// console.log(is_string([1, 2, 4, 0]));
// false
function isString(txt) {
    return typeof txt === 'string' ? true : false;
}
console.log(isString("ysdbjaxla"));
console.log(isString(132425));