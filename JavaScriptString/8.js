// Write a JavaScript function to capitalize the first letter of a string.
// Test Data :
// console.log(capitalize('js string exercises'));
// "Js string exercises"

function capitalize(str = 'js string exercise') {

    return str.charAt(0).toUpperCase() + str.substring(1, str.length);
}
console.log(capitalize());