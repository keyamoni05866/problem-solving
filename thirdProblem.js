/*
3.Function Composition
Write three functions: one to square a number, one to double a number, and one to add 5 to a number. Compose these functions to create a new function that squares a number, doubles the result, and then adds 5.
*/

/*Solution*/

function squareNumber(numberForSquare) {
  return numberForSquare * numberForSquare;
}

function doubleNumber(numberForDouble) {
  return numberForDouble * 2;
}

function addNumber(numberForAdd) {
  return numberForAdd + 5;
}

function finalResult(numb) {
  const squaredNumber = squareNumber(numb);
  const doubledNumber = doubleNumber(squaredNumber);
  return addNumber(doubledNumber);
}

const result = finalResult(5);
// console.log(result);
