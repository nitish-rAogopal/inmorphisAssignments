// Write a JavaScript function that can pad (left, right) a string to get to a
// determined length.
// Test Data :
// console.log(formatted_string('0000',123,'l'));

// console.log(formatted_string('00000000',123,''));
// Output :
// "0123"
// "12300000"


function formatted_string(format, num, pad = 'r') {
    let numStr = num.toString();
    while (numStr.length < format.length) {
        if (pad === 'l')
            numStr = '0' + numStr;
        else
            numStr = numStr + '0';
    }
    return numStr;

}
console.log(formatted_string('0000', 123, 'l'));
console.log(formatted_string('00000000',123,''));
