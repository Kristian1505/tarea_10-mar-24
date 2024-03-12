// Exercise # 6
// Write a function that performs the bubble algorithm.
// Input [3, 6, 12, 5, 100, 1]
// Output [1, 3, 5, 6, 12, 100]
console.log("----------------- EXCERCISE 6 ----------------- ")
let bubbleAlgoritm = [3, 6, 12, 5, 100, 1]

function bubbleSort(arr) {
  let len = arr.length;
  for (let i = 0; i < len; i++) {
    for (let j = 0; j < len - i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        let tmp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = tmp;
      }
    }
  }
  console.log(arr);
}

bubbleSort(bubbleAlgoritm)