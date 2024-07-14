// Write a JavaScript function to convert ASCII to Hexadecimal format.
// Test Data :
// console.log(ascii_to_hexa('12'));
// console.log(ascii_to_hexa('100'));
// Output :
// "3132"
// "313030"

function ascii_to_hexa(str = '12') {
    const arr = str.split('');
    for (var i = 0; i < arr.length; i++)
        arr[i] = arr[i].charCodeAt().toString(16);
    return arr.join('');
}
console.log(ascii_to_hexa('12'));
console.log(ascii_to_hexa('100'));