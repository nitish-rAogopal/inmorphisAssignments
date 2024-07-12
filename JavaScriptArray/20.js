// Write a JavaScript program to find duplicate values in a JavaScript array.


function findDuplicates(arr) {
    const duplicates = {};
    for (let i = 0; i < arr.length; i++) {
        if (duplicates[arr[i]]) {
            duplicates[arr[i]]++;
        } else {
            duplicates[arr[i]] = 1;
        }
    }
    return Object.keys(duplicates).filter((key) => duplicates[key] > 1);
}
const arr = [1, 2, 3, 4, 2, 3, 5, 6, 7, 8, 9, 5];
const duplicates = findDuplicates(arr);
console.log(duplicates);