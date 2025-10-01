const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const evens = [2, 4, 6, 8];


// ------------------ reduce() ------------------ //
// reduce() → Reduces an array into a single value (sum, product, object, etc.)

// Example 1: Sum of numbers
const sum = numbers.reduce((acc, curr) => acc + curr, 0);
// acc = running total, curr = current element, 0 = initial value
console.log("reduce() sum:", sum); // 45

// Example 2: Product of numbers
const mul = numbers.reduce((acc, curr) => acc * curr, 1);
// acc starts from 1, then multiplies with each number
console.log("reduce() product:", mul); // 362880


// ------------------ some() ------------------ //
// some() → Checks if at least ONE element satisfies the condition
// Returns: true or false

// Example 1: Check if any number is divisible by 4
const isFourModulo = numbers.some(number => number % 4 === 0);
console.log("some() divisible by 4:", isFourModulo); // true (because 4, 8 are divisible)

// Example 2: Check if any number > 3
const hasLarge = numbers.some(n => n > 3);
console.log("some() > 3:", hasLarge); // true


// ------------------ every() ------------------ //
// every() → Checks if ALL elements satisfy the condition
// Returns: true or false

// Example 1: Check if all numbers are even
const isEven1 = numbers.every(number => number % 2 === 0);
console.log("every() all even (numbers):", isEven1); // false (because odd numbers exist)

// Example 2: Check if all elements in evens[] are even
const isEven2 = evens.every(number => number % 2 === 0);
console.log("every() all even (evens):", isEven2); // true

// Example 3: Check if all numbers are even in [1,2,3,4]
const allEven = [1, 2, 3, 4].every(n => n % 2 === 0);
console.log("every() all even (1,2,3,4):", allEven); // false
