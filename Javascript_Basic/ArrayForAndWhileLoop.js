let arr = [10, 20, 30, 40, 50];

// Using for loop
console.log("// Traversal using for loop");
for (let i = 0; i < arr.length; i++) {
  console.log(`Index ${i} => Value ${arr[i]}`);
}


// Using while loop
console.log("// Traversal using while loop");
let i = 0;
while (i < arr.length) {
  console.log(`Index ${i} => Value ${arr[i]}`);
  i++;
}


// Using for...of loop (bonus)
console.log("// Traversal using for...of loop");
for (let value of arr) {
  console.log("Value:", value);
}



