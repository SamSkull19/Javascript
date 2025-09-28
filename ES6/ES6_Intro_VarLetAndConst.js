// ===============================
// var example
// ===============================
var a = 10;
console.log("var a (initial):", a);

var a = 20; //  redeclaration allowed
console.log("var a (after redeclare):", a);

if (true){
    var a = 30; // function/global scoped
    console.log("var a inside block:", a);
}
console.log("var a outside block:", a); // same value (no block scope)


// ===============================
// let example
// ===============================
let b = 100;
console.log("\nlet b (initial):", b);

// let b = 200; //  Error: Cannot redeclare block-scoped variable

b = 200; //  reassignment allowed
console.log("let b (after reassignment):", b);

if (true) {
    let b = 300; // block scoped
    console.log("let b inside block:", b);
}
console.log("let b outside block:", b); // different variable


// ===============================
// const example
// ===============================
const c = 1000;
console.log("\nconst c (initial):", c);

// c = 2000; //  Error: Cannot reassign const
// const c = 3000; //  Error: Cannot redeclare const

if (true) {
    const c = 4000; // block scoped
    console.log("const c inside block:", c);
}
console.log("const c outside block:", c);

// const with objects/arrays
const arr = [1, 2, 3];
arr.push(4); //  allowed (mutation)
console.log("const array after push:", arr);

const obj = { name: "Sifat" };
obj.name = "Updated Sifat"; //  allowed (mutation)
console.log("const object after update:", obj);



// Array of numbers
const numbers = [10, 20, 30, 40, 50];

// Iterating using a traditional for loop
for (let i = 0; i < numbers.length; i++) {
    // 'num' is declared as const, so it cannot be reassigned in the same iteration
    // But in each new iteration, a fresh 'num' is created
    const num = numbers[i];

    // Printing the current array value
    console.log(num);
}

// Using const with array of objects
const users = [
    { name: "Sifat", age: 23 },
    { name: "Rafi", age: 22 },
    { name: "Nabil", age: 24 }
];

for (const user of users) {
    console.log("User name:", user.name, "- Age:", user.age);

    // We can mutate object properties because const locks reference, not content
    user.age += 1;
}
console.log("Users after mutation:", users);
