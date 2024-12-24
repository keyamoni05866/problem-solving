/*
Task-6: Array Reduction
Create an array of numbers. Write a function that uses the reduce method to calculate the sum of all even numbers in the array.
*/

const numbersArray = [1, 2, 4, 6, 7];

function sumEvenNumbers(getArray) {
  return getArray.reduce((sum, number) => {
    if (number % 2 === 0) {
      return sum + number;
    }
    return sum;
  }, 0);
}
const result = sumEvenNumbers(numbersArray);
console.log(result);
