/*
4.Task: Sorting Objects
Create an array of objects representing cars with properties like make, model, and year. Write a function to sort the array of cars by the year of manufacture in ascending order. Print the sorted array.
*/

/*Solution*/

const carsArray = [
  { name: "car1", model: "model1", year: 2024 },
  { name: "car2", model: "model2", year: 2022 },
  { name: "car3", model: "model3", year: 2025 },
];

function sortCarYearInAscending(cars) {
  return cars.sort((firstCar, secondCar) => firstCar.year - secondCar.year);
}

const result = sortCarYearInAscending(carsArray);
console.log(result);
