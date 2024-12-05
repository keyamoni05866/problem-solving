/*
5.Task: Find and Modify
Write a function that searches an array of objects for a specific person by name. If found, modify their age property. Print the updated array.
*/

/*Solution*/

const peoplesArray = [
  { name: "Keya", age: 22 },
  { name: "Urmy", age: 23 },
  { name: "Nipa", age: 24 },
];

function findAndModifyFunc(arrayOfPeople, peopleName, modifiedAge) {
  const getPerson = arrayOfPeople.find(
    (person) => person.name.toLowerCase() === peopleName.toLowerCase()
  );
  if (getPerson) {
    getPerson.age = modifiedAge;
  } else {
    console.log(`We can not find  ${peopleName}`);
  }
}
findAndModifyFunc(peoplesArray, "Keya", 35);

console.log(peoplesArray);
