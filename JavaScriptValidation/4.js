// 4. Write a JavaScript function to validate whether a given value type is null or
// not.

function isNull(value) {
    return value === null;
}

console.log(isNull(NaN)); 
console.log(isNull(123)); 
console.log(isNull("hello")); 
console.log(isNull("123")); 
console.log(isNull(true)); 
console.log(isNull(undefined)); 
console.log(isNull(null)); 
console.log(isNull({})); 
console.log(isNull([])); 
console.log(isNull(new Date())); 
console.log(isNull(parseInt("abc"))); 