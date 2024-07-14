// Write a JavaScript function check if a string ends with specified suffix.
// Test Data :
// console.log(string_endsWith('JS PHP PYTHON','PYTHON'));
// true
// console.log(string_endsWith('JS PHP PYTHON',''));
// false

function string_endsWith(str, suffix) {
    if (suffix === '')
        return false;
    return str.endsWith(suffix);
}

console.log(string_endsWith('JS PHP PYTHON', 'PYTHON')); // true
console.log(string_endsWith('JS PHP PYTHON', '')); // false