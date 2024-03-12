// Exercise #3 (sugerencia reduce())
// Write a program to compute the sum and product (multiplication) of an array of numbers. Print out the sum and the product.
// Example: Given an array [1, 2, 3, 4] The sum is 10. The product is 24.
console.log("----------------- EXCERCISE 3 ----------------- ")
const numbers = [1, 2, 3, 4];

function sumNumbers(acumulator, item) {
  return acumulator + item;
}

function productNumbers(acumulator, item) {
  return acumulator * item;
}

let sum = numbers.reduce(sumNumbers, 0);

let product = numbers.reduce(productNumbers, 1);

console.log("La suma es: " + sum);
console.log("El producto es: " + product);