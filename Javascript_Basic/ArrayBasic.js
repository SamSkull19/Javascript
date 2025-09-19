//  Number Array
var numbers = [10, 20, 30, 40, 50];
console.log("Number Array:", numbers);
console.log("Length of numbers array:", numbers.length); // 5

// Accessing index values
console.log("First element:", numbers[0]); // 10
console.log("Third element:", numbers[2]); // 30

// Assigning new value
numbers[2] = 99; 
console.log("After changing third element:", numbers); // [10, 20, 99, 40, 50]


// String Array
var fruits = ["Apple", "Banana", "Mango", "Orange"];
console.log("\nString Array:", fruits);
console.log("Length of fruits array:", fruits.length); // 4

// Accessing values
console.log("Second fruit:", fruits[1]); // Banana
console.log("Last fruit:", fruits[fruits.length - 1]); // Orange

// Assigning new value
fruits[1] = "Grapes";
console.log("After changing second fruit:", fruits); // ["Apple", "Grapes", "Mango", "Orange"]



// Mixed Array (numbers, strings, boolean, object)
var mix = [100, "Hello", true, null, {name: "Sifat", age: 23}];
console.log("\nMixed Array:", mix);
console.log("Length of mixed array:", mix.length); // 5

// Accessing index values
console.log("First element:", mix[0]); // 100
console.log("Second element:", mix[1]); // "Hello"
console.log("Object in array:", mix[4]); // {name: "Sifat", age: 23}

// Assigning new value
mix[2] = false;
console.log("After changing third element:", mix); 



// Declaring Empty Array and Adding Values
var emptyArr = [];
console.log("\nEmpty Array:", emptyArr);

// Assign values using index
emptyArr[0] = "First Value";
emptyArr[1] = "Second Value";
emptyArr[5] = "Sixth Value"; // Index 2–4 remain undefined

console.log("Array after assigning:", emptyArr); 
console.log("Length of emptyArr:", emptyArr.length); // 6
console.log("Third element:", emptyArr[2]); // undefined
