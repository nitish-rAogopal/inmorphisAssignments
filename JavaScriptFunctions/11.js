// Write a JavaScript function which will take an array of numbers stored and
// find the second lowest and second greatest numbers, respectively.

function secondHighestLowest(arr) {
    arr.sort((a, b) => {
        return a - b;
    });
    let secondLowest = arr[1];
    let revArr = arr.reverse();
    let secondHighest = revArr[1];
    return [secondLowest, secondHighest];
}

console.log(secondHighestLowest([2, 3, 6, 1, 9, 4]));