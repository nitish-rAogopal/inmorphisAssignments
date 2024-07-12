// 8. Write a JavaScript function to validate whether a given value is RegExp or
// not.

function isRegExp(value) {
    return value instanceof RegExp;
}

console.log(isRegExp(/abc/)); // true
console.log(isRegExp(new RegExp('abc'))); // true
console.log(isRegExp('abc')); // false
console.log(isRegExp(123)); // false
console.log(isRegExp(true)); // false
console.log(isRegExp(undefined)); // false
console.log(isRegExp(null)); // false
console.log(isRegExp({})); // false
console.log(isRegExp([])); // false
console.log(isRegExp(new Date())); // false
console.log(isRegExp(new Error('error'))); // false