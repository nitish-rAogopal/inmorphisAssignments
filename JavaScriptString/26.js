// Write a JavaScript function to remove the first occurrence of a given 'search
// string' from a string.
// Test Data :
// console.log(remove_first_occurrence("The quick brown fox jumps over the lazy
// dog", 'the'));
// Output :
// "The quick brown fox jumps over lazy dog"

function remove_first_occurrence(str = "The quick brown fox jumps over the lazy dog", remove = 'the') {
    const arr = str.split(' ');
    arr.splice(arr.indexOf(remove), 1);
    return arr.join(' ');
}

console.log(remove_first_occurrence("The quick brown fox jumps over the lazy dog", 'the'));