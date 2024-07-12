// Write a JavaScript function to create a specified number of elements with
// pre-filled string value array.
// Test Data :
// console.log(array_filled(3, 'default value'));
// ["default value", "default value", "default value"]
// console.log(array_filled(4, 'password'));
// ["password", "password", "password", "password"]
function array_filled(n, val) {
    return Array(n).fill(val);
}
console.log(array_filled(3, 'default value'));
console.log(array_filled(4, 'password'));