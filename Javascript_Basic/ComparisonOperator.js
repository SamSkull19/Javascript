// Comparison Operators in JavaScript
var a = 20;
var b = 30;
var c = 20;
var d = 50;

// Equality & Inequality
console.log(a == b);    // false (20 != 30)
console.log(a == c);    // true  (20 == 20)
console.log(b != c);    // true  (30 != 20)
console.log(c != a);    // false (20 == 20)

// == → equal (loose, allows type conversion).
// === → strictly equal (value + type must match).

// Strict Equality & Inequality
var x = 50;
var y = '50';
console.log(x == y);    // true  ('50' converted to 50)
console.log(x === y);   // false (number !== string)

var p = 40;
var q = '40';
console.log(p != q);    // false (values equal after conversion)
console.log(p !== q);   // true  (types different: number vs string)

// Greater / Less comparisons
console.log(a > d);     // false
console.log(a < d);     // true
console.log(b < d);     // true
console.log(b > c);     // true
console.log(c >= a);    // true  (20 >= 20)
console.log(b >= a);    // true
console.log(a <= c);    // true
console.log(b <= d);    // true

// Strict equality
console.log(a === c);   // true
console.log(a !== b);   // true
console.log(c !== a);   // false

// Logical Operators (&& AND, || OR)

var age = 25;
var hasID = true;

// && (AND) → both conditions must be true
console.log(age >= 18 && hasID);  // true (25 >= 18 AND hasID = true)
console.log(age >= 18 && false);  // false (second condition false)

// || (OR) → at least one condition must be true
console.log(age >= 18 || hasID);  // true (both true anyway)
console.log(age < 18 || hasID);   // true (first false, second true)
console.log(age < 18 || false);   // false (both false)

// Mixing comparison + logical
console.log(a < b && b < d);      // true  (20 < 30 AND 30 < 50)
console.log(a > b || b < d);      // true  (first false, second true)
console.log((x === y) || (p === 40)); // true (false OR true → true)
console.log((a === c) && (b === d)); // false (true AND false → false)
