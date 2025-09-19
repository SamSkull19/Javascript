// Basic Ternary
var age = 20;
var canVote = (age >= 18) ? "Eligible to vote" : "Not eligible to vote";
console.log("Basic:", canVote); // Eligible to vote


// Simple Number Comparison
var a = 10;
var b = 20;
var result = (a > b) ? "a is greater" : "b is greater or equal";
console.log("Number Comparison:", result); // b is greater or equal


// Nested Ternary (Grades)
var marks = 85;
var grade = (marks >= 90) ? "A+" :
            (marks >= 80) ? "A" :
            (marks >= 70) ? "B" :
            (marks >= 60) ? "C" :
            (marks >= 50) ? "D" : "F";

console.log("Nested Ternary (Grade):", grade); // A


// Boolean Check
var isLoggedIn = true;
var message = isLoggedIn ? "Welcome back!" : "Please log in";
console.log("Boolean Check:", message); // Welcome back!


// Ternary with Logical Operators
var hasID = true;
var clubEntry = (age >= 18 && hasID) ? "Entry allowed" : "Entry denied";
console.log("AND Logical:", clubEntry); // Entry allowed

var day = "Sunday";
var isWeekend = (day === "Saturday" || day === "Sunday") ? "Weekend" : "Weekday";
console.log("OR Logical:", isWeekend); // Weekend


// Finding Largest Number
var x = 10;
var y = 20;
var z = 15;
var largest = (x > y && x > z) ? x :
              (y > z) ? y : z;
console.log("Largest Number:", largest); // 20


// Inline Function/Action Example
var score = 75;
(score >= 50) ? console.log("Pass") : console.log("Fail"); // Pass

var isAdmin = false;
isAdmin ? console.log("Welcome Admin!") : console.log("Welcome User!"); // Welcome User!


// Combined Example: Nested + Logical
var temp = 35;
var weather = (temp > 30 && temp < 40) ? "Hot" :
              (temp >= 20 && temp <= 30) ? "Warm" :
              (temp >= 10 && temp < 20) ? "Cool" : "Cold";
console.log("Temperature Check:", weather); // Hot
