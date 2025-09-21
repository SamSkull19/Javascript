let arr = [1, 2, 3, 4, 5];

console.log("Original Array:", arr);

// With reverse()
let reversed1 = [...arr].reverse(); // use spread to avoid changing original
console.log("Method 1 (reverse()):", reversed1);

// Manual using for loop 
let reversed2 = [];
for (let i = arr.length - 1; i >= 0; i--) {
  reversed2.push(arr[i]);
}
console.log("Method 2 (for loop):", reversed2);

//  Manual using while loop 
let reversed3 = [];
let i = arr.length - 1;
while (i >= 0) {
  reversed3.push(arr[i]);
  i--;
}
console.log("Method 3 (while loop):", reversed3);


// reverse_with_for_unshift
let reversed = [];

// Traverse array using for loop
for (let i = 0; i < arr.length; i++) {
  reversed.unshift(arr[i]); // insert each element at beginning
}
console.log("Reversed Array (for + unshift):", reversed);

