// Write a JavaScript function to filter false, null, 0 and blank values from an
// array.

function filterValues(arr) {
    return arr.filter(value => value !== false && value !== null && value !== 0 && value !== '');
}

const array = [0, false, null, '', 'hello', 1, true];
console.log(filterValues(array));