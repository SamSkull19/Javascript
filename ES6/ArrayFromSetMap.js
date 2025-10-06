// Convert a string to an array of characters
console.log(Array.from("hello")); // ["h", "e", "l", "l", "o"]

// Convert an array to a new array with transformation using a map function
console.log(Array.from([1, 2, 3], x => x * 2)); // [2, 4, 6]
console.log(Array.from([1, 2, 3], x => x * x)); // [1, 4, 9]

// Create an array from a Set (removes duplicates automatically)
const set = new Set([1, 2, 3]);
console.log(Array.from(set)); // [1, 2, 3]

// Working with Sets
const numbers = new Set();
numbers.add(1);
numbers.add(2);
numbers.add(3);
numbers.add(3); // duplicate, ignored
numbers.add(4);
numbers.add(4); // duplicate, ignored

console.log(numbers); // Set(4) {1, 2, 3, 4}

// Delete a value from the Set
numbers.delete(1);
console.log(numbers); // Set(3) {2, 3, 4}

// Check if a value exists in the Set
console.log(numbers.has(2)); // true

// Iterate over a Set
for (let num of numbers){ 
    console.log(num); // 2, 3, 4
}

// Working with Maps
const map = new Map();
map.set("name", "Sifat");       // key = string
map.set(1, "number key");       // key = number
map.set(true, "boolean key");   // key = boolean

// Access values in Map
console.log(map.get("name"));   // "Sifat"

// Check if a key exists
console.log(map.has(1));        // true

// Delete a key-value pair
map.delete(true);

// Iterate over Map entries
for (let [key, value] of map){ 
    console.log(key, value);    // "name" "Sifat", 1 "number key"
}
