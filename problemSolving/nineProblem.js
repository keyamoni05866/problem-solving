/*
Task-9:Find Maximum Value:
Write a function that takes an array of numbers and returns the maximum value.
*/

const arrayOfNumbers = [1, 2, 3, 4, 5, 6];

function printMaxNumbers(getArray) {
  //   return Math.max(...getArray);

  let max = getArray[0];

  getArray.map((number) => {
    if (number < min) {
      max = number;
    }
  });
  return max;
}

// const result = printMaxNumbers(arrayOfNumbers);
// console.log(result);
