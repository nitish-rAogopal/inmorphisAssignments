// Write a JavaScript function to chop a string into chunks of a given length.
// Test Data :
// console.log(string_chop('w3resource'));
// console.log(string_chop('w3resource',2));
// console.log(string_chop('w3resource',3));
// ["w3resource"]
// ["w3", "re", "so", "ur", "ce"]
// ["w3r", "eso", "urc", "e"]

// function string_chop(str, length = 1) {
//     return str.match(new RegExp(`.{1,${length}}`, 'g'));
// }

function string_chop(str, length = 0) {
    const chunks = [];
    if (length === 0) {
        chunks.push(str);
        return chunks;
    }
    for (let i = 0; i < str.length; i += length) {
        chunks.push(str.slice(i, i + length));
    }
    return chunks;
}

console.log(string_chop('w3resource'));
console.log(string_chop('w3resource', 2));
console.log(string_chop('w3resource', 3));