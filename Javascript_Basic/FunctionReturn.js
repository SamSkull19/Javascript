// Function with return
function add(a, b) {
  return a + b; // returns the result
}

let sum = add(10, 20); // store return value in a variable
console.log("Sum:", sum); // 30


// Returning a string
function greet(name) {
  return `Hello, ${name}!`;
}

let message = greet("Sifat");
console.log("Message:", message); // Hello, Sifat!


// Returning an object
function createPerson(name, age) {
  return {
    name: name,
    age: age
  };
}

let person = createPerson("Samin", 23);
console.log("Person Object:", person); // { name: "Samin", age: 23 }


// Returning an array
function makeArray(a, b, c) {
  return [a, b, c];
}

let arr = makeArray(1, 2, 3);
console.log("Array:", arr); // [1, 2, 3]


// Function with multiple returns (using condition)
function checkAge(age) {
  if (age >= 18) {
    return "Adult";
  }
  return "Minor";
}

let result1 = checkAge(20);
let result2 = checkAge(15);
console.log("Check Age 20:", result1); // Adult
console.log("Check Age 15:", result2); // Minor
