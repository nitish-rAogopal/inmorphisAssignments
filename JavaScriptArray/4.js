// Write a JavaScript function to get the last element of an array. Passing a
// parameter 'n' will return the last 'n' elements of the array.

function lastElements(arr, n) {
    if (n === undefined) {
      return arr[arr.length - 1];
    }
    return arr.slice(-n);
  }
  
  // Getting the last element
  console.log(lastElements([7, 9, 0, -2])); // -2
  
  // Getting the last 1 element (same as above)
  console.log(lastElements([7, 9, 0, -2], 1)); // [-2]
  
  // Getting the last 3 elements
  console.log(lastElements([7, 9, 0, -2], 3)); // [9, 0, -2]
  
  // Getting the last 6 elements (more than the length of the array)
  console.log(lastElements([7, 9, 0, -2], 6)); // [7, 9, 0, -2]

  