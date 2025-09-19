// Declaring variables with number and string
var a = 20;          // a is a number (integer)
var b = 6.777;       // b is a number (floating-point)
var c = '98';        // c is a string (because it's inside quotes)

// Printing values and their types
console.log(a);              // Output: 20
console.log(typeof a);       // Output: number

console.log(b);              // Output: 6.777
console.log(typeof b);       // Output: number

console.log(c);              // Output: "98"
console.log(typeof c);       // Output: string


// Converting b (float) to integer using parseInt()
b = parseInt(b);             // parseInt() removes decimal part
console.log(b);              // Output: 6
console.log(typeof b);       // Output: number


// Converting c (string) to integer using parseInt()
c = parseInt(c);             // "98" → 98
console.log(c);              // Output: 98
console.log(typeof c);       // Output: number


// Converting c (now a number) to float using parseFloat()
c = parseFloat(c);           // Still 98, but explicitly float type
console.log(c);              // Output: 98
console.log(typeof c);       // Output: number


// Trying to convert a non-numeric string to number
var x = parseInt('Apple');   
console.log(x);              // Output: NaN (Not a Number)


// Converting string with decimal to float
var p = parseFloat('43.646');
console.log(p);              // Output: 43.646
console.log(p.toFixed(10));  // Output: "43.6460000000" (10 decimal places)


// Division by zero
var num = 50 / 0;            
console.log(num);            // Output: Infinity

var num = -50 / 0;
console.log(num);            // Output: -Infinity
