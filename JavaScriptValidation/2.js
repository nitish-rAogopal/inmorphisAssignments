// 2. Write a JavaScript function to validate whether a given value type is error or
// not.

function isError(value) {
    return value instanceof Error;
}
console.log(isError(new Error("This is an error"))); 
console.log(isError("This is not an error")); 
console.log(isError(123));
console.log(isError(null)); 
console.log(isError(undefined));
console.log(isError({}));
console.log(isError([])); 
console.log(isError(function(){})); 
console.log(isError(/regex/));
console.log(isError(new TypeError("This is a type error"))); 
console.log(isError(new RangeError("This is a range error"))); 