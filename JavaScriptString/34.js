// Write a JavaScript function to convert a string to title case.
// Test Data :
// console.log(sentenceCase('PHP exercises. python exercises.'));
// "Php Exercises. Python Exercises."

function sentenceCase(str = 'js string exercises') {
    const arr = str.split(' ');
    for (var i = 0; i < arr.length; i++) {
        arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].slice(1, arr[i].length).toLowerCase();
    }
    return arr.join(' ');
}
console.log(sentenceCase('PHP exercises. python exercises.'));