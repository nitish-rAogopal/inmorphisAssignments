// 3. Write a JavaScript function to validate whether a given value type is NaN or not.

function isNaN(value) {
    return typeof value === 'number';
}

console.log(isNaN(NaN)); 
console.log(isNaN(123)); 
console.log(isNaN("hello")); 
console.log(isNaN("123")); 
console.log(isNaN(true)); 
console.log(isNaN(undefined)); 
console.log(isNaN(null)); 
console.log(isNaN({})); 
console.log(isNaN([])); 
console.log(isNaN(new Date())); 
console.log(isNaN(parseInt("abc"))); 