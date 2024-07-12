// There are two arrays with individual values, write a JavaScript program to
// compute the sum of each individual index value from the given arrays.
// Sample array :
// array1 = [1,0,2,3,4];
// array2 = [3,5,6,7,8,13];
// Expected Output :
// [4, 5, 8, 10, 12, 13]

let array1 = [1, 0, 2, 3, 4];
let array2 = [3, 5, 6, 7, 8, 13];

let result = [];

for (let i = 0; i < array1.length; i++) {
    if (array2[i] !== undefined) {
        result.push(array1[i] + array2[i]);
    } else {
        result.push(array1[i]);
    }
}

for (let j = array1.length; j < array2.length; j++) {
    result.push(array2[j]);
}

console.log(result);