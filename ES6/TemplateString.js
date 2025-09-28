// Example 1: Template string with interpolation
const name = "Sifat";
const age = 23;
const intro = `My name is ${name} and I am ${age} years old.`;
console.log(intro);
// Output: My name is Sifat and I am 23 years old


// Example 2: Multi-line string
const multiLine = `
This is a multi-line string.
It can span across multiple lines
without using \n or + for concatenation.
`;
console.log(multiLine);


// Example 3: Dynamic string with expressions
const a = 10;
const b = 20;
const result = `The sum of ${a} and ${b} is ${a + b}.`;
console.log(result);
// Output: The sum of 10 and 20 is 30


// Example 4: Dynamic function call inside template
function greet(user) {
    return `Hello, ${user}!`;
}
const message = `${greet("Sifat")} Welcome to ES6 template strings.`;
console.log(message);
