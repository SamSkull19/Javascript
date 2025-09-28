// Example 1: Simple default parameters
function greet(name = "Guest") {
    console.log("Hello,", name);
}

greet();           // Hello, Guest (default value used)
greet("Sifat");    // Hello, Sifat


// Example 2: Multiple parameters with defaults
function multiply(a = 2, b = 3) {
    return a * b;
}

console.log(multiply());        // 6 (2 * 3)
console.log(multiply(5));       // 15 (5 * 3)
console.log(multiply(4, 4));    // 16


// Example 3: Default parameter as an expression
function createUser(id, role = "user", isActive = true) {
    return { id, role, isActive };
}

console.log(createUser(1)); 
// { id: 1, role: "user", isActive: true }

console.log(createUser(2, "admin", false)); 
// { id: 2, role: "admin", isActive: false }


// Example 4: Default value depending on another parameter
function power(base, exponent = base) {
    return Math.pow(base, exponent);
}

console.log(power(3));     // 27 (3^3)
console.log(power(2, 5));  // 32 (2^5)
