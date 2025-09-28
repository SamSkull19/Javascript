// ===============================
// Normal function declarations
// ===============================

// Function declaration: sum
function sum(a, b) {
    return a + b;
}
const ansSum = sum(4, 5);
console.log("Sum using normal function:", ansSum); // 9

// Function declaration: multiplication
function mul(a, b) {
    return a * b;
}
const ansMul = mul(4, 5);
console.log("Multiplication using normal function:", ansMul); // 20


// ===============================
// Function expressions
// ===============================

// Function expression: sum
const sum2 = function (a, b) {
    return a + b;
};
console.log("Sum using function expression:", sum2(6, 7)); // 13

// Function expression: multiplication
const mul2 = function (a, b) {
    return a * b;
};
console.log("Multiplication using function expression:", mul2(6, 7)); // 42


// ===============================
// Arrow functions (ES6)
// ===============================

// Arrow function: sum (short form)
const arrowSum = (a, b) => a + b;
console.log("Sum using arrow function:", arrowSum(5, 8)); // 13


// Arrow function: multiplication (short form)
const arrowMul = (a, b) => a * b;
console.log("Multiplication using arrow function:", arrowMul(5, 8)); // 40


// Arrow function with multiple lines (need curly braces + return)
const arrowAvg = (a, b, c) => {
    const sum = a + b + c;
    const avg = sum / 3;
    return avg;
};
console.log("Average using arrow function:", arrowAvg(5, 8, 7)); // 6.67


// Single parameter (no parentheses needed)
const square = x => x * x;
console.log("Square of 6:", square(6)); // 36


// No parameter (must use empty parentheses)
const greet = () => "Hello, World!";
console.log(greet()); // Hello, World!


// Returning an object (need parentheses around object literal)
const createUser = (name, age) => ({ name: name, age: age });
console.log(createUser("Sifat", 23)); // { name: 'Sifat', age: 23 }


