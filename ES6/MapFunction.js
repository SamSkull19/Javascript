const numbers = [1, 2, 3, 4, 5, 6, 7, 8];

// Add 1 to each element
const x = numbers.map(value => value + 1);
console.log(x);

// Square each element
const squares = numbers.map(value => value * value);
console.log(squares);

// Double each element
const double = numbers.map(value => value * 2);
console.log(double);

const users = [
  { name: "Alice", age: 21 },
  { name: "Bob", age: 22 },
  { name: "Charlie", age: 23 },
  { name: "Joe", age: 23 },
  { name: "Frank", age: 24 },
  { name: "Smith", age: 24 }
];

// Extract only names
const userNames = users.map(user => user.name);
console.log(userNames);

// Extract only ages
const userAge = users.map(user => user.age);
console.log(userAge);

// Calculate birth years assuming current year is 2025
const birthYear = users.map(user => 2025 - user.age);
console.log(birthYear);

// Perform extra calculations on age
// For each user: (age * 2) + 20
const oddEven = users.map(user => {
    const x = user.age * 2;
    const y = x + 20;
    return y;
});
console.log(oddEven);

const num = [1, 2, 3, 4, 5, 6, 7, 8];

// Show index and value while mapping
const newNum = num.map((val, idx) => {
    console.log(`Index - ${idx}. Value = ${val}`);
});

// Add index to value and return a new array
const idxNum = num.map((val, idx) => {
    return val + idx;
});
console.log(idxNum);

const obj = { a: 1, b: 2, c: 3, d: 4 };

// Map over object values and add 2
const objValues = Object.values(obj).map(x => x + 2);
console.log(objValues);

// Map over object keys and print them
const objKeys = Object.keys(obj).map(x => console.log(x));

// Map over object entries: square the value and return key-value pairs
const newObj = Object.entries(obj).map(([k, v]) => {
    return [k, v * v];
});
console.log(newObj);
