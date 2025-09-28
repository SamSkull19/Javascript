// ===============================
// Spread Operator Basics
// ===============================

const nums = [1, 2, 3];
const moreNums = [4, 5, 6];

// Combine arrays using spread
const combined = [...nums, ...moreNums];
console.log("Combined array:", combined); // [1, 2, 3, 4, 5, 6]

// Spread inside function arguments
const values = [10, 20, 30];
console.log("Max using spread:", Math.max(...values)); // 30


// ===============================
// Array Max
// ===============================

const marks = [85, 92, 78, 99, 64];
const maxMark = Math.max(...marks);
console.log("Highest mark:", maxMark); // 99


// ===============================
// Copy Arrays
// ===============================

// Copy with spread operator (shallow copy)
const original = [100, 200, 300];
const copy1 = [...original];

console.log("Original array:", original); // [100, 200, 300]
console.log("Copied array:", copy1);      // [100, 200, 300]

// Modify copy, original not affected
copy1.push(400);
console.log("After modifying copy:", copy1);      // [100, 200, 300, 400]
console.log("Original remains unchanged:", original); // [100, 200, 300]

// Copy with slice (older method)
const copy2 = original.slice();
console.log("Copied with slice:", copy2); // [100, 200, 300]
