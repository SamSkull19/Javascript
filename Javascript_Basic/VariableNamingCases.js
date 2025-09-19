// Example of different variable naming styles

var my_name = "Sifat";   // snake_case naming (commonly used in Python)
var myName = "Sifat";    // camelCase naming (most common in JavaScript)
var MyName = "Sifat";    // PascalCase naming (often used for classes in JS)

// Printing variables
console.log(my_name);    // Output: Sifat
console.log(myName);     // Output: Sifat
console.log(MyName);     // Output: Sifat


// More examples of valid variable names:

var userAge = 25;            // camelCase: preferred style in JavaScript
var UserAge = 25;            // PascalCase: usually for class names
var user_age = 25;           // snake_case: works, but less common in JS
var $price = 100;            // Variables can start with '$'
var _hiddenValue = 42;       // Variables can start with '_'

// Printing values
console.log(userAge);        // Output: 25
console.log(UserAge);        // Output: 25
console.log(user_age);       // Output: 25
console.log($price);         // Output: 100
console.log(_hiddenValue);   // Output: 42


// Invalid variable names (will throw errors if you try):
// var 123name = "Hello";   // Cannot start with a number
// var my-name = "Hello";   // Hyphens (-) are not allowed
// var let = "Hello";       // Cannot use reserved keywords like 'let', 'var', 'const'
