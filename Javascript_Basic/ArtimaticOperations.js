// Basic Mathematical Operations in JS

var x = 10;
var y = 3;

console.log(x + y);   // Addition → 13
console.log(x - y);   // Subtraction → 7
console.log(x * y);   // Multiplication → 30
console.log(x / y);   // Division → 3.333...
console.log(x % y);   // Modulus (remainder) → 1
console.log(x ** y);  // Exponentiation → 10^3 = 1000


// Shorthand Assignment Operators

var a = 5;

a += 3;  // same as a = a + 3
console.log(a);  // 8

a -= 2;  // same as a = a - 2
console.log(a);  // 6

a *= 4;  // same as a = a * 4
console.log(a);  // 24

a /= 6;  // same as a = a / 6
console.log(a);  // 4

a %= 3;  // same as a = a % 3
console.log(a);  // 1


// Increment & Decrement Operators

var b = 10;

console.log(b++); // Post-increment → prints 10, then b becomes 11
console.log(b);   // Now b = 11

console.log(++b); // Pre-increment → increases first, prints 12

console.log(b--); // Post-decrement → prints 12, then b becomes 11
console.log(b);   // Now b = 11

console.log(--b); // Pre-decrement → decreases first, prints 10



var num1 = 10;
var num2 = 5;
var str1 = "20";
var str2 = "Hello";

// Number + Number
console.log(num1 + num2);   // 15 (normal addition)

// String + String
console.log(str1 + str2);   // "20Hello" (string concatenation)

// Number + String → String concatenation
console.log(num1 + str1);   // "1020" (number converted to string)
console.log(str1 + num1);   // "2010"

// String - Number → Numeric subtraction (JS tries to convert string to number)
console.log(str1 - num1);   // 10 (20 - 10)

// String * Number
console.log(str1 * num2);   // 100 (20 * 5)

// String / Number
console.log(str1 / num2);   // 4 (20 / 5)

// Invalid operations
console.log(str2 - num1);   // NaN ("Hello" cannot be converted to number)
console.log(str2 * num1);   // NaN
console.log(str2 / num1);   // NaN


// Explicit conversion using Number()
console.log(Number(str1) + num1);   // 30 (20 converted to number + 10)
console.log(Number("3.14") + num2); // 8.14 (string converted to float + 5)

// Using parseInt() & parseFloat()
console.log(parseInt("100px"));     // 100 (parses until non-number character)
console.log(parseFloat("99.5kg"));  // 99.5
console.log(Number("100px"));       // NaN (Number() fails if not pure number)