// Function Declaration
function greet(name) {
  return `Hello, ${name}!`;
}
console.log("Declaration:", greet("Sifat"));

// Function Expression
const add = function (a, b){
  return a + b;
};
console.log("Expression (add):", add(5, 7));

// Function with Default Parameters
function greetUser(name = "Guest") {
  return `Welcome, ${name}`;
}
console.log("Default Param:", greetUser());
console.log("Default Param:", greetUser("Samin"));


