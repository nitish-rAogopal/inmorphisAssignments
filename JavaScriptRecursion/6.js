// Write a JavaScript program to get the first n Fibonacci numbers.
// Note : The Fibonacci Sequence is the series of numbers: 0, 1, 1, 2, 3, 5, 8, 13,
// 21, 34, . . . Each subsequent number is the sum of the previous two.
function fibonacciNumbers(n) {
    if (n-1 === 0 && n === 1)
        return;
    return fibonacciNumbers(n - 2) + fibonacciNumbers(n - 1);
}
fibonacciNumbers(5);