// 5. Write a JavaScript function to validate whether a given value is number or not.

function isNumber(value) {
    return typeof value === 'number' && !isNaN(value);
}
console.log(isNumber(NaN)); 
console.log(isNumber(123)); 
console.log(isNumber("hello"));
console.log(isNumber("123"));
console.log(isNumber(true)); 
console.log(isNumber(undefined));
console.log(isNumber(null)); 
console.log(isNumber({})); 
console.log(isNumber([])); 
console.log(isNumber(new Date())); 
console.log(isNumber(parseInt("abc")));