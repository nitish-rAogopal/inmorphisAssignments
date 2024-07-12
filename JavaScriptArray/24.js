// Write a JavaScript function to remove. 'null', '0', '""', 'false', 'undefined' and
// 'NaN' values from an array.
// Sample array : [NaN, 0, 15, false, -22, '',undefined, 47, null]
// Expected result : [15, -22, 47]

function removeEmptyValues(arr) {
    return arr.filter(value => {
        return value !== null && value !== 0 && value !== "" && value !== false && value !== undefined && !isNaN(value);
    });
}

const arr = [NaN, 0, 15, false, -22, '', undefined, 47, null];
console.log(removeEmptyValues(arr)); 
console.log(arr);