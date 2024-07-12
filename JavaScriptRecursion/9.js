// Write a merge sort program in JavaScript.

function mergeSort(arr) {
    if (arr.length <= 1) {
        return arr;
    }

    const middle = Math.floor(arr.length / 2);
    const left = arr.slice(0, middle);
    const right = arr.slice(middle);

    return merge(mergeSort(left), mergeSort(right));
}

function merge(left, right) {
    let resultArray = [], leftIndex = 0, rightIndex = 0;

    while (leftIndex < left.length && rightIndex < right.length) {
        if (left[leftIndex] < right[rightIndex]) {
            resultArray.push(left[leftIndex]);
            leftIndex++;
        } else {
            resultArray.push(right[rightIndex]);
            rightIndex++;
        }
    }

    // Concatenate the remaining elements
    return resultArray
        .concat(left.slice(leftIndex))
        .concat(right.slice(rightIndex));
}

// Example usage
const array = [34, 7, 23, 32, 5, 62];
const sortedArray = mergeSort(array);
console.log(sortedArray); // Output: [5, 7, 23, 32, 34, 62]
