// Write a JavaScript program to perform a binary search.

function binarySearch(arr, target, left = 0, right = arr.length - 1) {
    if (left > right) return -1;
    const mid = Math.floor((left + right) / 2);
    if (arr[mid] === target)
        return mid;
    if (arr[mid] < target)
        return binarySearch(arr, target, mid + 1, right);
    return binarySearch(arr, target, left, mid - 1);
}

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const target = 5;
const result = binarySearch(arr, target);
if (result !== -1) {
    console.log(`Element found at index ${result}`);
} else {
    console.log("Element not found");
}
