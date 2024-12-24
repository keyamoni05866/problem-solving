/*
Task-8: Unique Values
Create an array of numbers with some duplicate values. Write a function to filter out the duplicate values and return a new array with only unique numbers. Print the result.
*/

const arrayOfNumbers = [1, 2, 3, 4, 3, 4, 5, 6, 7, 5];

function printUniqueNumbers(getArray) {
  let uniqueArray = [];

  getArray.map((number) => {
    if (!uniqueArray.includes(number)) {
      uniqueArray.push(number);
    }
  });
  return uniqueArray;
}

const result = printUniqueNumbers(arrayOfNumbers);
console.log(result);
