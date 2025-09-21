// Example Arrays
let nums = [40, 5, 100, 25, 1];
let fruits = ["Banana", "Apple", "Mango", "Orange"];

console.log("Original Numbers:", nums);
console.log("Original Fruits:", fruits);

// Default sort (converts to string, sorts lexicographically)
console.log("Default sort (nums):", [...nums].sort());
console.log("Default sort (fruits):", [...fruits].sort());

// Numeric Ascending 
let ascNums = [...nums].sort((a, b) => a - b);
console.log("Ascending Numbers:", ascNums);

// Numeric Descending
let descNums = [...nums].sort((a, b) => b - a);
console.log("Descending Numbers:", descNums);

// String Descending
let descFruits = [...fruits].sort().reverse();
console.log("Descending Fruits:", descFruits);


