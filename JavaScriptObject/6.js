// Write a Bubble Sort algorithm in JavaScript.
// Note : Bubble sort is a simple sorting algorithm that works by repeatedly stepping

// through the list to be sorted,
// Sample Data : [6,4,0, 3,-2,1]
// Expected Output : [-2, 0, 1, 3, 4, 6]
Array.prototype.bubbleSort = function () {
    let n = this.length;

    for (let i = 0; i < n - 1; i++) {
        for (let j = 0; j < n - i - 1; j++) {
            if (this[j] > this[j + 1]) {
                [this[j], this[j + 1]] = [this[j + 1], this[j]];
            }
        }
    }

    return this;
}
console.log([64, 34, 25, 12, 22, 11, 90, 5].bubbleSort())