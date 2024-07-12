// Write a JavaScript program which accept a number as input and insert dashes
// (-) between each two even numbers.

function insertDashes(num) {
    let numStr = num.toString();
    let result = [];
    for (let i = 0; i < numStr.length; i++) {
        result.push(numStr[i]);
        // Check if the current and next digits are even
        if (numStr[i] % 2 === 0 && numStr[i + 1] % 2 === 0) {
            // Insert a dash if both are even
            result.push('-');
        }
    }
    return result.join('');
}
console.log(insertDashes('025468')); // "0-254-6-8"
console.log(insertDashes(123456)); // "123456"
console.log(insertDashes(246824)); // "2-4-6-8-24"