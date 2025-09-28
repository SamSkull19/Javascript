// ===============================
// Object Destructuring
// ===============================

const user = {
    name: "Sifat",
    age: 23,
    country: "Bangladesh"
};

// Destructuring: variable names MUST match the object keys
const { name, age, country } = user;
console.log("Name:", name);         // Sifat
console.log("Age:", age);           // 23
console.log("Country:", country);   // Bangladesh

// If you want a different variable name, use alias
const { name: userName, age: userAge } = user;
console.log("Alias Name:", userName); // Sifat
console.log("Alias Age:", userAge);   // 23


// ===============================
// Array Destructuring
// ===============================

const numbers = [10, 20, 30, 40];

// Variable names can be anything (not tied to array indices)
const [first, second, third] = numbers;
console.log("First:", first);   // 10
console.log("Second:", second); // 20
console.log("Third:", third);   // 30

// Skipping elements with commas
const [x, , y] = numbers;
console.log("x:", x); // 10
console.log("y:", y); // 30

// Using rest operator in array destructuring
const [num1, ...rest] = numbers;
console.log("num1:", num1); // 10
console.log("rest:", rest); // [20, 30, 40]
