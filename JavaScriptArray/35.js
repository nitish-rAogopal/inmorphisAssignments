// Write a JavaScript function to get a random item from an array.
function getRandomItem(arr) {
    return arr[Math.floor(Math.random() * arr.length)];
}
const myArray = [1, 2, 3, 4, 5];
console.log(getRandomItem(myArray));