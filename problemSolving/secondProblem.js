/*
2.Task: Object Manipulation
Create an array of objects representing books with properties like title, author, and year. Write a function that takes the array and returns a new array with only the book titles. Print the result.
*/

/*Solution*/

const booksArray = [
  { title: "book1", author: "Keya", year: 2024 },
  { title: "book2", author: "Urmy", year: 2023 },
  { title: "book3", author: "Nipa", year: 2022 },
  { title: "book4", author: "Toma", year: 2021 },
];

function getArrayWithTitle(givenArray) {
  return givenArray.map((singleBook) => singleBook.title);
}

const titles = getArrayWithTitle(booksArray);
// console.log(titles);
