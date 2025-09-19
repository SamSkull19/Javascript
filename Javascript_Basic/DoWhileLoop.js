// Basic Counting
var i = 1;
do {
    console.log("Count:", i);
    i++;
} 
while (i <= 5);
// Output: 1 2 3 4 5


// Print Even Numbers (2–10)
var num = 2;
do {
    console.log("Even number:", num);
    num += 2;
} 
while (num <= 10);
// Output: 2 4 6 8 10


// Countdown Example
var countdown = 5;
do {
    console.log("Countdown:", countdown);
    countdown--;
} 
while (countdown > 0);
console.log("Blast off");
// Output: 5 4 3 2 1 Blast off



// Sum of First 5 Natural Numbers
var n = 1;
var sum = 0;
do {
    sum += n;
    n++;
} 
while (n <= 5);
console.log("Sum of 1 to 5:", sum); // 15


// Loop Through Array
var fruits = ["Apple", "Banana", "Mango"];
var index = 0;
do {
    console.log("Fruit:", fruits[index]);
    index++;
} 
while (index < fruits.length);
// Output: Apple Banana Mango


// DO...WHILE with break
var x = 1;
do {
    if (x === 4) {
        console.log("Stopped at", x);
        break;
    }
    console.log("Value:", x);
    x++;
} while (x <= 10);
// Output: 1 2 3 Stopped at 4

// --------------------------------

// DO...WHILE with continue
var y = 0;
do {
    y++;
    if (y === 3) {
        console.log("Skipping", y);
        continue; // skip printing 3
    }
    console.log("Value:", y);
} 
while (y < 5);
// Output: 1 2 Skipping 3 4 5
