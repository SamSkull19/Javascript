// Define an object
const user = {
    name: "Sifat",
    age: 23,
    country: "Bangladesh"
};

// -------- Example 1: Looping only keys -------- //
for (let key in user) {
    // 'for...in' gives the keys of the object
    console.log(`Keys : ${key}`);
}

// -------- Example 2: Looping keys + accessing values -------- //
for (let key in user) {
    // Access the value using bracket notation user[key]
    console.log(`Keys : ${key} and Values : ${user[key]}`);
}

// -------- Example 3: Using Object.entries() -------- //
// Object.entries() returns an array of [key, value] pairs
for (let [key, value] of Object.entries(user)) {
    console.log(`Keys : ${key} and Values : ${value}`);
}


const students = [
    { name: "Alice", age: 21 },
    { name: "Bob", age: 22 },
    { name: "Charlie", age: 23 }
];

for (const student of students) {
    console.log(student); 
}
// Output:
// { name: "Alice", age: 21 }
// { name: "Bob", age: 22 }
// { name: "Charlie", age: 23 }

for (const student of students) {
    const { name, age } = student; // destructure here
    console.log(`${name} is ${age} years old`);
}

// Loop through array of objects
for (const { name, age } of students) {
    // Direct destructuring of each object
    console.log(`${name} is ${age} years old`);
}
