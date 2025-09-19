// -------------------------------
// var, let, const differences
// -------------------------------
// var  → Function-scoped, can be updated & re-declared
// let  → Block-scoped, can be updated but not re-declared in the same scope
// const → Block-scoped, must be initialized at declaration & cannot be reassigned
// -------------------------------

// Declare a variable using var (can be re-declared or updated)
var firstName = "Sifat Samin";  
console.log(firstName);  // Output: Sifat Samin

// Declare a number using var
var num = 30;  
console.log(num);  // Output: 30

// Declare a floating-point number using var
var weight = 60.29;  
console.log("Weight is:", weight);  // Corrected → Output: 60.29

// Declare another string using let (block-scoped, safer than var)
let lastName = "Sarker";  
console.log(lastName);  // Output: Sarker

// Declare a number using let
let x = 40;  
console.log(x);  // Output: 40

// Example of using const (cannot be reassigned)
const PI = 3.1416;  
console.log("Value of PI:", PI);  // Output: 3.1416

// If you try to reassign const → ERROR
// PI = 3.15; // TypeError: Assignment to constant variable
