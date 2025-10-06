function sum(a, b, c, d) {
    // Logs the sum of the first four parameters
    console.log(a + b + c + d);

    // 'arguments' is a built-in object in JavaScript
    // It contains all arguments passed to the function, even if not defined in parameters
    console.log(arguments);

    // Convert 'arguments' (which is array-like) into a real array using the spread operator
    const arg = [...arguments];
    console.log(arg);

    // Use forEach to loop through the array and print each element
    arg.forEach(x => console.log(x));
}

// Call the function with more arguments than declared
// Only the first four (a, b, c, d) are used in the sum
sum(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);

// 'sum.length' returns the number of declared parameters (not the number of arguments passed)
console.log(sum.length); // Output: 4
