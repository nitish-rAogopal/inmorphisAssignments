// 7. Write a JavaScript function to validate whether a given value type is pure json
// object or not.

function isJSON(value) {
    return typeof value === 'object' && value !== null && !Array.isArray(value) && !isObject(value);
}
function isJSON(value) {
    return typeof value === 'object' && value !== null && !Array.isArray(value) && Object.getPrototypeOf(value) === Object.prototype;
}

console.log(isJSON({})); // true
console.log(isJSON({a: 1, b: 2})); // true
console.log(isJSON([])); // false
console.log(isJSON(null)); // false
console.log(isJSON("hello")); // false
console.log(isJSON(123)); // false
console.log(isJSON(true)); // false
console.log(isJSON(undefined)); // false
console.log(isJSON(new Date())); // false
console.log(isJSON(/regex/)); // false
console.log(isJSON(new Error("error"))); // false
