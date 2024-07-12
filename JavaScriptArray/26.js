// Write a JavaScript program to find a pair of elements (indices of the two
//     numbers) from an given array whose sum equals a specific target number.
//     Input: numbers= [10,20,10,40,50,60,70], target=50

function findPair(numbers, target) {
    const numMap = {};
    for (let i = 0; i < numbers.length; i++) {
        const complement = target - numbers[i];
        if (numMap[complement] !== undefined) {
            return [numMap[complement], i];
        }
        numMap[numbers[i]] = i;
    }
    return null;
}

const numbers = [10, 20, 10, 40, 50, 60, 70];
const target = 50;

console.log(findPair(numbers, target)); //problem