// String Comparison
let str1 = "apple";
let str2 = "banana";

console.log(str1 === str2);   // false
console.log(str1 < str2);     // true (alphabetical order: "apple" comes before "banana")
console.log("hello" === "hello"); // true


// Lowercase and Uppercase
let text = "JavaScript";

console.log(text.toLowerCase()); // "javascript"
console.log(text.toUpperCase()); // "JAVASCRIPT"

// Comparison ignoring case
let strA = "Hello";
let strB = "hello";

console.log(strA === strB);  // false
console.log(strA.toLowerCase() === strB.toLowerCase()); // true


// Trim (removes extra spaces from start and end)
let messy = "    Hello World!    ";

console.log(messy);           // "    Hello World!    "
console.log(messy.trim());    // "Hello World!"
console.log(messy.trimStart()); // "Hello World!    "
console.log(messy.trimEnd());   // "    Hello World!"


// Combined Example
let userInput = "   Sifat   ";
let savedName = "sifat";

// Trim spaces and compare ignoring case
if (userInput.trim().toLowerCase() === savedName.toLowerCase()) {
    console.log("Names match ✅");
} else {
    console.log("Names don’t match ❌");
}

