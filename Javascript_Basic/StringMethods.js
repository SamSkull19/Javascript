// String Slice
let str = "JavaScript Programming";

console.log("String Slice:");
console.log(str.slice(0, 10));     // "JavaScript" (from index 0 to 9)
console.log(str.slice(11));        // "Programming" (from index 11 to end)
console.log(str.slice(-11));       // "Programming" (negative index counts from end)


// String Join 
// Join is actually an Array method, often used with strings
let words = ["JavaScript", "is", "fun"];
console.log("String Join:");
console.log(words.join(" "));      // "JavaScript is fun"
console.log(words.join("-"));      // "JavaScript-is-fun"


// String Concat
let str1 = "Hello";
let str2 = "World";
console.log("String Concat:");
console.log(str1.concat(" ", str2, "!")); // "Hello World!"
// OR using + operator
console.log(str1 + " " + str2 + "!");     // "Hello World!"



// String Includes
let sentence = "I am learning JavaScript";

console.log("String Includes:");
console.log(sentence.includes("JavaScript")); // true
console.log(sentence.includes("Python"));     // false


// Commonly Used String Methods
let sample = "   Hello JavaScript!   ";

console.log("Common String Methods:");

// Length
console.log("Length:", sample.length); // 22

// Trim spaces
console.log("Trim:", sample.trim());   // "Hello JavaScript!"

// To Upper & Lower
console.log("Upper:", sample.toUpperCase());
console.log("Lower:", sample.toLowerCase());

// StartsWith & EndsWith
console.log("StartsWith 'Hello':", sample.trim().startsWith("Hello")); // true
console.log("EndsWith '!':", sample.trim().endsWith("!")); // true

// IndexOf & LastIndexOf
console.log("IndexOf 'Java':", sample.indexOf("Java"));     // position 8
console.log("LastIndexOf 'a':", sample.lastIndexOf("a"));   // last 'a'

// Replace & ReplaceAll
console.log("Replace:", sample.replace("JavaScript", "JS"));
console.log("ReplaceAll:", "a-a-a".replaceAll("a", "b")); // "b-b-b"


// Substring
console.log("Substring(0,5):", sample.substring(0, 5)); // "   He" (first 5 chars)

// Repeat
console.log("Repeat:", "Hi ".repeat(3)); // "Hi Hi Hi "




// Split
// Example 1: Split by space
let text1 = "I love JavaScript";
console.log(text1.split(" "));  
// ["I", "love", "JavaScript"]


// Example 2: Split by comma
let text2 = "apple,banana,orange,grape";
console.log(text2.split(","));  
// ["apple", "banana", "orange", "grape"]


// Example 3: Split by each character
let text3 = "Hello";
console.log(text3.split(""));  
// ["H", "e", "l", "l", "o"]


// Example 4: Split with limit
let text4 = "JavaScript is fun";
console.log(text4.split(" ", 2));  
// ["JavaScript", "is"] (only 2 parts)


// Example 5: Split by dash (-)
let text5 = "2025-09-20";
console.log(text5.split("-"));  
// ["2025", "09", "20"]


// Example 6: Split by newline (\n)
let text6 = "Line1\nLine2\nLine3";
console.log(text6.split("\n"));  
// ["Line1", "Line2", "Line3"]


// Example 7: Split by regex (multiple spaces)
let text7 = "I    like    JS";
console.log(text7.split(/\s+/));  
// ["I", "like", "JS"]


// Example 8: Split and clean
let messy = "   apple, banana ,  mango , grape   ";
console.log(messy.split(",").map(fruit => fruit.trim()));  
// ["apple", "banana", "mango", "grape"]
