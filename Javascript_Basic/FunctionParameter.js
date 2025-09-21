// Single Parameter 
function greet(name) {
  console.log(`Hello, ${name}!`);
}
greet("Sifat"); // Hello, Sifat!


// Multiple Parameters
function add(a, b) {
  return a + b;
}
console.log("Add(5, 7):", add(5, 7)); // 12


// Default Parameters 
function greetUser(name = "Guest", age = 18) {
  console.log(`Hi ${name}, you are ${age} years old.`);
}
greetUser();              // Hi Guest, you are 18 years old.
greetUser("Samin", 23);   // Hi Samin, you are 23 years old.


// Rest Parameters (Unknown number of args)
function sumAll(...nums) {
  let sum = 0;
  for (let n of nums) {
    sum += n;
  }
  return sum;
}
console.log("sumAll(1,2,3,4,5):", sumAll(1, 2, 3, 4, 5)); // 15


// Passing Objects as Parameters
function printPerson({ name, age }) {
  console.log(`${name} is ${age} years old.`);
}
let person = { name: "Sifat", age: 23 };
printPerson(person); // Sifat is 23 years old.


// Passing Arrays as Parameters 
function printFruits(fruits) {
  fruits.forEach(fruit => console.log(fruit));
}
printFruits(["Apple", "Mango", "Banana"]);
