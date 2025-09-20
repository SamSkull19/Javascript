// 1. Dot Notation
let person = { name: "Sifat", age: 23 };

// Get
console.log("// Dot Notation");
console.log("Name:", person.name); // "Sifat"

// Set
person.age = 24;
console.log("Updated Age:", person.age); // 24


// 2. Bracket Notation
let user = { "first-name": "Samin", country: "Bangladesh" };

console.log("// Bracket Notation");
console.log("First Name:", user["first-name"]); // "Samin"

user["country"] = "BD"; // Set
console.log("Updated Country:", user["country"]); // "BD"


// 3. Variables as Keys
let key = "email";
let student = {};

console.log("// Variables as Keys");
student[key] = "sifat@example.com"; // Set
console.log("Email:", student[key]); // Get → "sifat@example.com"


// 4. Object.assign
let obj1 = { a: 1, b: 2 };
let obj2 = { c: 3 };

console.log("// Object.assign");
Object.assign(obj2, obj1); // Merge properties
console.log("Merged Object:", obj2); // { c: 3, a: 1, b: 2 }


// 5. Spread Operator
let user1 = { name: "Sifat", age: 23 };
let user2 = { ...user1, country: "Bangladesh" };

console.log("// Spread Operator");
console.log("Copied & Extended Object:", user2);


// 6. Destructuring
let profile = { username: "Sifat", email: "sifat@example.com" };

console.log("// Destructuring");
let { username, email } = profile;
console.log("Username:", username);
console.log("Email:", email);


// 7. Object.keys, Object.values, Object.entries
let studentInfo = { name: "Samin", roll: 101, dept: "CSE" };

console.log("// Object.keys, Object.values, Object.entries");
console.log("Keys:", Object.keys(studentInfo));
console.log("Values:", Object.values(studentInfo));
console.log("Entries:", Object.entries(studentInfo));
