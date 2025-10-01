const students = [
  {
    name: "Alice",
    age: 21,
    grade: "A",
    city: "New York"
  },
  {
    name: "Bob",
    age: 22,
    grade: "B",
    city: "London"
  },
  {
    name: "Charlie",
    age: 23,
    grade: "A+",
    city: "Toronto"
  },
  {
    name: "Diana",
    age: 20,
    grade: "C",
    city: "Sydney"
  }
];

// Print full details of each student using template literals
students.forEach(student => {
    console.log(`Student Name : ${student.name} | Age : ${student.age} | Grade : ${student.grade} | City : ${student.city}`);
});

// Print only names of students
students.forEach(student => {
    console.log(student.name);
});

// Print only ages of students
students.forEach(s => {
    console.log(s.age);
});

// Print only grades of students
students.forEach(s => {
    console.log(s.grade);
});

// Print only cities of students
students.forEach(s => {
    console.log(s.city);
});


const numbers = [1, 2, 3, 4, 5];

// Print each number in the array
numbers.forEach(val => {
    console.log(val);
});

let sum = 0;

// Calculate the sum of all numbers
numbers.forEach(val => {
    sum += val;
});
console.log(sum);  // Output: 15

let newNumber = [];

// Double each number and push into newNumber array
numbers.forEach(val => {
    val *= 2;
    newNumber.push(val);
});
console.log(newNumber);  // Output: [2, 4, 6, 8, 10]


const person = { name: "John", age: 30, city: "Paris" };

// Convert object into array of [key, value] pairs and loop through it
Object.entries(person).forEach(([key, value]) => {
    console.log(`${key}: ${value}`);
});
// Output:
// name: John
// age: 30
// city: Paris
