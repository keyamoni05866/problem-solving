/*
10.Advanced Sorting
Create an array of objects representing students with 'name' and 'grades' properties. Write a function to sort the students by average grade in descending order.
*/

/*Solution*/

const studentGrades = [
  { name: "Keya", grades: [24, 34, 58] },
  { name: "Moni", grades: [34, 36, 68] },
  { name: "Nipa", grades: [4, 4, 8] },
  { name: "URmy", grades: [23, 32, 11] },
];

function sortGradeWithDescending(arrayOfObjects) {
  return arrayOfObjects.sort((firstObject, secondObject) => {
    const avgFirstObject = firstObject.grades.reduce(
      (sum, grade) => sum + grade,
      0
    );
    const avgSeconfObject = secondObject.grades.reduce(
      (sum, grade) => sum + grade,
      0
    );
    return avgSeconfObject - avgFirstObject;
  });
}

const result = sortGradeWithDescending(studentGrades);
console.log(result);
