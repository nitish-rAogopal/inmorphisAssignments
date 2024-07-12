// Write a JavaScript function to find an array contains a specific element.
// Test data :
// console.log(remove_array_element([2, 5, 9, 6], 5));
// [2, 9, 6]

function remove_array_element(arr, element) {
    return arr.filter(e => e === element);
}
console.log(remove_array_element([2, 5, 9, 6], 5));