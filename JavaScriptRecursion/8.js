// Write a JavaScript program for binary search.
function binarSearch(arr, target, start, end) {
    if (start > end) return -1;
    var mid = Math.floor((start + end) / 2);
    if (target === arr[mid]) return mid;
    if (target > arr[mid])
        return binarSearch(arr, target, mid + 1, end);
    return binarSearch(arr, target, start, mid - 1);
}
var arr = [13, 18, 21, 36, 43, 52, 80];
console.log(binarSearch(arr, 21, 0, arr.length));