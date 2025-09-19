// Basic Counting Example
var i = 1;
while (i <= 5) {
    console.log("Count:", i);
    i++;
}
// Output: 1 2 3 4 5


// Print Even Numbers (1–10)
var num = 2;
while (num <= 10) {
    console.log("Even number:", num);
    num += 2;
}
// Output: 2 4 6 8 10


// Print Odd Numbers (1–10)
var odd = 1;
while (odd <= 10) {
    console.log("Odd number:", odd);
    odd += 2;
}
// Output: 1 3 5 7 9


// Countdown Example
var countdown = 5;
while (countdown > 0) {
    console.log("Countdown:", countdown);
    countdown--;
}
console.log("Blast off");
// Output: 5 4 3 2 1 Blast off


// Sum of First 10 Natural Numbers
var n = 1;
var sum = 0;
while (n <= 10) {
    sum += n;
    n++;
}
console.log("Sum of 1 to 10:", sum); // 55


// While Loop with Array
var fruits = ["Apple", "Banana", "Mango", "Orange"];
var index = 0;
while (index < fruits.length) {
    console.log("Fruit:", fruits[index]);
    index++;
}
// Output: Apple Banana Mango Orange


// While Loop with break (stop early)
var x = 1;
while (x <= 10) {
    if (x === 6) {
        console.log("Stopped at", x);
        break;
    }
    console.log("Value:", x);
    x++;
}
// Output: 1 2 3 4 5 Stopped at 6


// While Loop with continue (skip a value)
var y = 0;
while (y < 5) {
    y++;
    if (y === 3) {
        console.log("Skipping 3");
        continue;
    }
    console.log("y =", y);
}
// Output: 1 2 Skipping 3 4 5
