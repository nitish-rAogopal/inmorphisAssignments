// Write a JavaScript function to get the number of occurrences of each letter in
// specified string.

function countLetters(str) {
    const letterCount = {};
    str = str.toLowerCase();

    for (let i = 0; i < str.length; i++) {
        const char = str[i];

        if (char.match(/[a-z]/)) {
            if (letterCount[char]) {
                letterCount[char]++;
            } else {
                letterCount[char] = 1;
            }
        }
    }
    return letterCount;
}

console.log(countLetters("The quick brown fox jumps over the lazy dog"));