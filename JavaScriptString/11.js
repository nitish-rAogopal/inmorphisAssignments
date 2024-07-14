// 11. Write a JavaScript function to convert a string into camel case.
// Test Data :
// console.log(camelize("JavaScript Exercises"));
// console.log(camelize("JavaScript exercises"));
// console.log(camelize("JavaScriptExercises"));
// "JavaScriptExercises"
// "JavaScriptExercises"

// "JavaScriptExercises"

function capitalize_Words(str) {
    const arr = str.split(' ');
    for (var i = 0; i < arr.length; i++) {
        arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].slice(1, arr[i].length);
    }
    return arr.join(' ');
}

function camelize(str = "JavaScript Exercises") {
    return str.split(' ').join('');
}

console.log(camelize());
console.log(camelize(capitalize_Words("JavaScript exercises")));
console.log(camelize("JavaScriptExercises"));