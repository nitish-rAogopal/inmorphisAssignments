// a JavaScript function that accepts a string as a parameter and find the
// longest word within the string.
function findLongestWord(str) {
    const words = str.split(" ");
    let longest_word = "";
    for (let i = 0; i < words.length; i++) {
        if (words[i].length > longest_word.length)
            longest_word = words[i];
    }
    return longest_word;
}

console.log(findLongestWord("the quick brown fox jumps over"));
console.log(findLongestWord("Web Development Tutorials"));
