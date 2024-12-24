/*
Task-7:Leap Year Checker
Write a function that determines whether a given year is a leap year.
*/

function checkLeapYear(year) {
  if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
    return `${year} is a leap year`;
  }
  return `${year} is not a leap year`;
}

const result = checkLeapYear(2025);
console.log(result);
