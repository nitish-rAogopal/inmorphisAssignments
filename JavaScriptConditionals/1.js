// Write a JavaScript program that displays the largest integer among two integers.

function compareNumbers(num1, num2) {
    if (num1 > num2) {
      return "The larger of " + num1 + " and " + num2 + " is " + num1 + ".";
    } else if (num2 > num1) {
      return "The larger of " + num1 + " and " + num2 + " is " + num2 + ".";
    } else {
      return "The values " + num1 + " and " + num2 + " are equal.";
    }
  }

  let result = compareNumbers(5, 8);
  console.log(result);
  
  result = compareNumbers(10, 5);
  console.log(result);
  
  result = compareNumbers(7, 7);
  console.log(result); 