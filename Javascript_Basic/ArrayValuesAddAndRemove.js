// Number Array Example
var numbers = [10, 20, 30];
console.log("Original Numbers:", numbers);

// Add element at END → push
numbers.push(40);
console.log("After push (add 40):", numbers); // [10, 20, 30, 40]

// Remove element from END → pop
numbers.pop();
console.log("After pop (remove last):", numbers); // [10, 20, 30]

// Add element at START → unshift
numbers.unshift(5);
console.log("After unshift (add 5 at start):", numbers); // [5, 10, 20, 30]

// Remove element from START → shift
numbers.shift();
console.log("After shift (remove first):", numbers); // [10, 20, 30]


// String Array Example
var fruits = ["Apple", "Banana", "Mango"];
console.log("\nOriginal Fruits:", fruits);

// Add element at END
fruits.push("Orange");
console.log("After push:", fruits); // ["Apple", "Banana", "Mango", "Orange"]

// Remove element from END
fruits.pop();
console.log("After pop:", fruits); // ["Apple", "Banana", "Mango"]

// Add element at START
fruits.unshift("Grapes");
console.log("After unshift:", fruits); // ["Grapes", "Apple", "Banana", "Mango"]

// Remove element from START
fruits.shift();
console.log("After shift:", fruits); // ["Apple", "Banana", "Mango"]


// Mixed Array Example
var mix = [100, "Hello", true];
console.log("\nOriginal Mixed Array:", mix);

// Add element at END
mix.push({name: "Sifat"});
console.log("After push:", mix); // [100, "Hello", true, {name:"Sifat"}]

// Remove element from END
mix.pop();
console.log("After pop:", mix); // [100, "Hello", true]

// Add element at START
mix.unshift(null);
console.log("After unshift:", mix); // [null, 100, "Hello", true]

// Remove element from START
mix.shift();
console.log("After shift:", mix); // [100, "Hello", true]
