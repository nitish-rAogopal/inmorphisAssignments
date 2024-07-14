// Write a JavaScript function that takes a string which has lower and upper
// case letters as a parameter and converts upper case letters to lower case, and
// lower case letters to upper case.
// Test Data :
// console.log(swapcase('AaBbc'));
// "aAbBC"

function swapcase(str) {
    var res = '';
    for (var i = 0; i < str.length; i++) {
        if (str[i].charCodeAt() >= 65 && str[i].charCodeAt() <= 91) {
            res += str[i].toLowerCase();
        }
        else {
            res += str[i].toUpperCase();
        }
    }
    return res;
}
console.log(swapcase('AaBbcwehewfkjdsbkjs'));