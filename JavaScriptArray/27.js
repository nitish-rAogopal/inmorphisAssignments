// Write a JavaScript function to retrieve the value of a given property from all
// elements in an array.
function getPropertyValues(arr, property) {
    return arr.map(obj => obj[property]);
}

const arr = [
    { id: 1, name: 'John' },
    { id: 2, name: 'Jane' },
    { id: 3, name: 'Bob' }
];

const property = 'name';

console.log(getPropertyValues(arr, property));