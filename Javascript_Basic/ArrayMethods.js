// Number Array
var numbers = [10, 20, 30, 40, 50];

// includes() → check if value exists
console.log("Includes 20:", numbers.includes(20)); // true
console.log("Includes 99:", numbers.includes(99)); // false

// indexOf() → find index of element
console.log("Index of 30:", numbers.indexOf(30)); // 2
console.log("Index of 100:", numbers.indexOf(100)); // -1 (not found)

// Array.isArray() → check if variable is array
console.log("Is numbers an array?", Array.isArray(numbers)); // true

// join() → join elements into a string
console.log("Joined with -:", numbers.join("-")); // "10-20-30-40-50"

// concat() → merge arrays
var moreNumbers = [60, 70];
var mergedNumbers = numbers.concat(moreNumbers);
console.log("Concatenated array:", mergedNumbers);

// slice() → copy part of array (non-destructive)
var slicedNumbers = numbers.slice(1, 4);
console.log("Sliced (1-4):", slicedNumbers); // [20, 30, 40]

// splice() → remove/replace/add (destructive)
numbers.splice(2, 2, 99, 100); // remove 2 elements from index 2, add 99,100
console.log("After splice:", numbers); // [10, 20, 99, 100, 50]



// String Array
var fruits = ["Apple", "Banana", "Mango", "Orange"];

// includes()
console.log("Includes Mango:", fruits.includes("Mango")); // true

// indexOf()
console.log("Index of Banana:", fruits.indexOf("Banana")); // 1

// join()
console.log("Join with , :", fruits.join(", ")); // "Apple, Banana, Mango, Orange"

// slice()
var favFruits = fruits.slice(1, 3);
console.log("Slice fruits (1-3):", favFruits); // ["Banana", "Mango"]

// splice()
fruits.splice(2, 1, "Grapes"); // remove Mango, add Grapes
console.log("After splice fruits:", fruits); // ["Apple","Banana","Grapes","Orange"]



// Mixed Array
var mix = [100, "Hello", true, null];

// isArray
console.log("Is mix an array?", Array.isArray(mix)); // true

// indexOf
console.log("Index of true:", mix.indexOf(true)); // 2

// includes
console.log("Includes null:", mix.includes(null)); // true

// join
console.log("Joined mix:", mix.join(" | ")); // "100 | Hello | true | "

// concat
var extra = ["World", false];
var newMix = mix.concat(extra);
console.log("Concat mix + extra:", newMix);


// Some More Useful Methods

// reverse() → reverse array
var nums = [1, 2, 3, 4];
nums.reverse();
console.log("Reversed:", nums); // [4,3,2,1]

// sort() → sort array
var letters = ["d", "a", "c", "b"];
letters.sort();
console.log("Sorted letters:", letters); // ["a","b","c","d"]

var nums2 = [100, 5, 25, 1];
nums2.sort((a, b) => a - b); // ascending numeric sort
console.log("Sorted numbers:", nums2); // [1,5,25,100]

nums2.sort((a, b) => b - a); // descending numeric sort
console.log("Sorted numbers:", nums2); // [1,5,25,100]

// toString() → convert array to string
console.log("Numbers toString:", nums2.toString()); // "1,5,25,100"


