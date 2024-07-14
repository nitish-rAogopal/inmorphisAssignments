// Write a JavaScript function to find a word within a string.
// Test Data :
// console.log(search_word('The quick brown fox', 'fox'));
// console.log(search_word('aa, bb, cc, dd, aa', 'aa'));
// Output :
// "'fox' was found 1 times."
// "'aa' was found 2 times."

function search_word(str, word) {
    const regex = new RegExp(word, 'gi');
    const matches = str.match(regex);
    const count = matches ? matches.length : 0;
    return `'${word}' was found ${count} times.`;
}
console.log(search_word('The quick brown fox', 'fox'));
console.log(search_word('aa, bb, cc, dd, aa', 'aa'));