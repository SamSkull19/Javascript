// Explicit Conversion (Type Casting) → manually convert.

// Using String() or .toString()
var num = 123;
var bool = true;

console.log(String(num));        // "123" (number → string)
console.log(String(bool));       // "true" (boolean → string)
console.log(num.toString());     // "123"

var arr = [1, 2, 3];
console.log(String(arr));        // "1,2,3" (array → string)

var obj = {name: "Sifat"};
console.log(String(obj));        // "[object Object]"


// Using Number(), parseInt(), parseFloat()

console.log(Number("123"));      // 123
console.log(Number("123.45"));   // 123.45
console.log(Number(""));         // 0 (empty string → 0)
console.log(Number(true));       // 1
console.log(Number(false));      // 0
console.log(Number("Hello"));    // NaN (not a number)

console.log(parseInt("123px"));  // 123 (stops at 'px')
console.log(parseFloat("12.34kg")); // 12.34

console.log(parseInt("101", 2)); // 5 (binary string → number with radix)


// Using Boolean()

console.log(Boolean(1));       // true
console.log(Boolean(0));       // false
console.log(Boolean("Hello")); // true (non-empty string)
console.log(Boolean(""));      // false (empty string)
console.log(Boolean([]));      // true (array is truthy)
console.log(Boolean(null));    // false
console.log(Boolean(undefined)); // false
console.log(Boolean(NaN));     // false



// Implicit Conversion (Type Coercion) → JS automatically converts.

// String + Number → String
console.log("5" + 2);   // "52"
console.log(2 + "5");   // "25"

// Other math operators try to convert string → number
console.log("5" - 2);   // 3
console.log("5" * 2);   // 10
console.log("10" / "2"); // 5

// Boolean with numbers
console.log(true + 1);   // 2  (true → 1)
console.log(false + 1);  // 1  (false → 0)

// Null and Undefined
console.log(null + 1);      // 1  (null → 0)
console.log(undefined + 1); // NaN (undefined → NaN)



// Special Cases

// Converting to string automatically
console.log([1, 2] + [3, 4]); // "1,23,4"

// NaN cases
console.log(Number("abc"));    // NaN
console.log(parseInt("abc"));  // NaN

// Infinity cases
console.log(50 / 0);   // Infinity
console.log(-50 / 0);  // -Infinity


console.log(typeof String(123));    // "string"
console.log(typeof Number("123"));  // "number"
console.log(typeof Boolean(0));     // "boolean"
