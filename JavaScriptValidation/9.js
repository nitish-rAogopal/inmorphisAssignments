// 9. Write a JavaScript function to validate whether a given value type is char or
// not.

function isChar(value) {
    return typeof value === 'string' && value.length === 1;
}

console.log(isChar('a')); // true
console.log(isChar('abc')); // false
console.log(isChar('')); // false
console.log(isChar(123)); // false
console.log(isChar(true)); // false
console.log(isChar(undefined)); // false
console.log(isChar(null)); // false
console.log(isChar({})); // false
console.log(isChar([])); // false
console.log(isChar(new Date())); // false
console.log(isChar(new Error('error'))); // false
console.log(isChar('1')); // true
console.log(isChar(' ')); // true
console.log(isChar('\n')); // true
