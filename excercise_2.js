// Exercise #2 (sugerencia map())
// Write a function that:
// Takes in an array of numbers.
// Doubles the value of each number in the array.
// Prints out the new updated array.
// Example: Given an array [1, 2, 4, 5]. The output should be [2, 4, 8, 10]
console.log("----------------- EXCERCISE 2 ----------------- ")

function doubleValues(arr) {
  const doubledValue = arr.map(number => number * 2);
  console.log(doubledValue);
}

const values = [1, 2, 4, 5]
doubleValues(values)