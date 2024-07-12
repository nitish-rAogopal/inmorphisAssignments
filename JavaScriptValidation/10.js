// 10. Write a JavaScript function to check whether given value types are same or
// not.
function areTypesSame(a, b) {
    return typeof a === typeof b;
}

console.log(areTypesSame('hello', 123)); // false
console.log(areTypesSame(123, 456)); // true
console.log(areTypesSame(123, 'hello')); // false
console.log(areTypesSame(true, false)); // true
console.log(areTypesSame(true, 123)); // false
console.log(areTypesSame(null, undefined)); // false
console.log(areTypesSame({}, {})); // true
console.log(areTypesSame([], [])); // true
console.log(areTypesSame(new Date(), new Date())); // true
console.log(areTypesSame(/abc/, /def/)); // true
console.log(areTypesSame(new Error('a'), new Error('b'))); // true