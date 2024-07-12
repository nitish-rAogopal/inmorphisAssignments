// Write a JavaScript function to get nth largest element from an unsorted
// array.
// Test Data :
// console.log(nthlargest([ 43, 56, 23, 89, 88, 90, 99, 652], 4));

function nthlargest(arr, n) {
    return arr.sort((a, b) => b - a)[n - 1];
}
console.log(nthlargest([43, 56, 23, 89, 88, 90, 99, 652], 4))










function Nlargest(arr, n) {
    var max = arr[0];
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] > max)
            max = arr[i];
    }
    const freqArr = new Array(max + 1).fill(0);
    for (var j = 0; j < arr.length; j++)
        freqArr[arr[j]]++;
    var count = 0;
    for (var j = freqArr.length - 1; j >= 0; j--) {
        if (freqArr[j] !== 0)
            count++;
        if (count === n)
            return j;
    }
    return -1;
}
console.log(Nlargest([43, 56, 23, 89, 88, 90, 99, 652], 3))