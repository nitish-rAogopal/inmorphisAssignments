// Write a JavaScript function to count the occurrence of a substring in a string.
// Test Data :
// console.log(count("The quick brown fox jumps over the lazy dog", 'the'));
// Output :
// 2
// console.log(count("The quick brown fox jumps over the lazy dog", 'fox',false));
// Output :
// 1

function count(str, searchedStr) {
    var count = 0;
    var i = 0;
    const arr = str.toUpperCase().split(' ');
    while (i < arr.length) {
        if (arr[i] === searchedStr.toUpperCase()) {
            count++;
        }
        i++;
    }
    return count;
}

console.log(count("The quick brown fox jumps over the lazy dog", 'the'));
console.log(count("The quick brown fox jumps over the lazy dog", 'fox', false));