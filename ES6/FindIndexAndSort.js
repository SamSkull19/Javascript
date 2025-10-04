// Create an array of numbers
let arr = [2, 7, 3, 98, 4, 55, 87, 32, 33];

// findIndex() returns the index of the first element that matches the condition
const a = arr.findIndex(num => num > 20);
console.log(a); // First element greater than 20 → index of 3 (value 98)

// Find the index of the first element greater than 10 and less than 40
const b = arr.findIndex(num => num > 10 && num < 40);
console.log(b); // First element that satisfies both conditions → index of 7 (value 32)

console.log("Before Sort : ", arr);

// Default sort converts numbers to strings and sorts lexicographically
const sortedArr1 = [...arr].sort();
console.log("After Sort : ", sortedArr1);

// Sort numbers in ascending order (numerically)
const sortedArr2 = [...arr].sort((a, b) => a - b);
console.log(sortedArr2);

// Sort numbers in descending order (numerically)
const sortedArr3 = [...arr].sort((a, b) => b - a);
console.log(sortedArr3);

// Create an array of strings
let fruits = ["Banana", "Apple", "Mango", "Orange"];

// Find the index of a specific element ("Orange")
const fruitsIndex = fruits.findIndex(x => x === 'Orange');
console.log(fruitsIndex); // Returns 3

// Find index of a non-existing element ("Water")
const fruitsIndex2 = fruits.findIndex(x => x === 'Water');
console.log(fruitsIndex2); // Returns -1 (not found)

// Default sort for strings (alphabetical order)
const sortedFruit = [...fruits].sort();
console.log(sortedFruit);

// Attempting to use numeric sort on strings gives incorrect results (NaN)
const sortedFruit2 = [...fruits].sort((a, b) => a - b);
console.log(sortedFruit2);

// Reverse alphabetical order for strings
const sortedFruit3 = [...fruits].sort((a, b) => b.localeCompare(a));
console.log(sortedFruit3);

// Alphabetical order for strings
const sortedFruit4 = [...fruits].sort((a, b) => a.localeCompare(b));
console.log(sortedFruit4);

