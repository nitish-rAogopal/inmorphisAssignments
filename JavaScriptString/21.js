// Write a JavaScript function to repeat a string a specified times.
// Test Data :
// console.log(repeat_string('a', 4));
// console.log(repeat_string('a'));
// Output :
// "aaaa"
// "Error in string or count."

function repeat_string(str, limit = 0) {
    if (limit === 0)
        return "Error in string or count.";
    if (limit === 1)
        return str;
    return str + repeat_string(str, limit - 1);
}
console.log(repeat_string('a', 4));
console.log(repeat_string('a'));
console.log(repeat_string('a', 8));