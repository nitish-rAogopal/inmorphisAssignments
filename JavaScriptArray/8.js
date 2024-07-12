function findMostFrequent(arr) {
    let frequencyMap = {};
    let maxCount = 0;
    let mostFrequentItem;

    // Count the frequency of each item in the array
    arr.forEach(item => {
        if (frequencyMap[item]) {
            frequencyMap[item]++;
        } else {
            frequencyMap[item] = 1;
        }

        // Check if this item has the highest frequency
        if (frequencyMap[item] > maxCount) {
            maxCount = frequencyMap[item];
            mostFrequentItem = item;
        }
    });

    return mostFrequentItem;
}

// Sample array
var arr1 = [3, 'a', 'a', 'a', 2, 3, 3, 3, 3, 3, 'a', 3, 'a', 2, 4, 9, 3];

// Finding the most frequent item
console.log(findMostFrequent(arr1)); // 'a'

let myArray = [3, "apple", 3, "banana", "apple", "apple", 7, "banana", 3];
console.log(findMostFrequent(myArray)); 
