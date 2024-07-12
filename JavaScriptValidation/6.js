// 6. Write a JavaScript function to validate whether a given value is object or not.

function isObject(value) {
    return typeof value === 'object' && value !== null;
}
console.log(isObject(NaN)); 
console.log(isObject(123)); 
console.log(isObject("hello"));
console.log(isObject("123"));
console.log(isObject(true)); 
console.log(isObject(undefined));
console.log(isObject(null)); 
console.log(isObject({})); 
console.log(isObject([])); 
console.log(isObject(new Date())); 
console.log(isObject(parseInt("abc")));