/*
1.Task: Array Filtering and Mapping
Create an array of objects, each representing a person with properties like name, age, and gender. Write a function to filter out all females and then map the remaining people to an array of names. Print the final result.
*/

/*Solution*/

const peoplesArray = [
  { name: "Keya", age: 22, gender: "female" },
  { name: "Azhar", age: 22, gender: "male" },
  { name: "Shaju", age: 25, gender: "male" },
  { name: "Nipa", age: 22, gender: "female" },
  { name: "Toma", age: 23, gender: "female" },
];

function printArrayWithFilter(arrayOfObject) {
  return arrayOfObject.filter((person) => person.gender !== "female");
}

const getPersonsForMap = printArrayWithFilter(peoplesArray);
const getName = getPersonsForMap.map((singlePerson) => singlePerson.name);
// console.log(getName);
// console.log(getPersonsForMap);
