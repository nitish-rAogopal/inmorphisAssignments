// Write a JavaScript program which accept a string as input and swap the case
// of each character. For example if you input 'The Quick Brown Fox' the output
// should be 'tHE qUICK bROWN fOX'.
function swapCase(str) {
    let swappedStr = '';

    for (let i = 0; i < str.length; i++) {
        let char = str[i];
        if (char === char.toLowerCase()) {
            swappedStr += char.toUpperCase();
        } else {
            swappedStr += char.toLowerCase();
        }
    }

    return swappedStr;
}
let inputStr = 'The Quick Brown Fox';
let result = swapCase(inputStr);
console.log(result);
