// Write a JavaScript function to convert Hexadecimal to ASCII format.
// Test Data :
// console.log(hex_to_ascii('3132'));
// console.log(hex_to_ascii('313030'));
// Output :
// "12"
// "100"

function hex_to_ascii(hex) {
    let ascii = '';
    for (let i = 0; i < hex.length; i += 2) {
        const code = parseInt(hex.slice(i, i + 2), 16);
        ascii += String.fromCharCode(code);
    }
    return ascii;
}
console.log(hex_to_ascii('3132'));
console.log(hex_to_ascii('313030'));