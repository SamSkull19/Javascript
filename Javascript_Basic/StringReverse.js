// Method 1: Using split(), reverse(), and join()
let str = "Hello World";

// Step 1: split into array → ["H","e","l","l","o"," ","W","o","r","l","d"]
// Step 2: reverse array → ["d","l","r","o","W"," ","o","l","l","e","H"]
// Step 3: join back → "dlroW olleH"
let reversed1 = str.split("").reverse().join("");
console.log("Method 1:", reversed1);


// Method 2: Using a for loop
let reversed2 = "";
for (let i = str.length - 1; i >= 0; i--) {
  reversed2 += str[i];
}
console.log("Method 2:", reversed2);


// Method 3: Using reduce()
let reversed3 = str.split("").reduce((rev, char) => char + rev, "");
console.log("Method 3:", reversed3);


