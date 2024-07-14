// Write a JavaScript function to parameterize a string.
// Test Data :
// console.log(string_parameterize("Robin Singh from USA."));
// "robin-singh-from-usa"

function string_parameterize(str = "Robin Singh from USA.") {
    return str.toLowerCase().slice(0, str.length - 1).split(' ').join('-');
}
console.log(string_parameterize());