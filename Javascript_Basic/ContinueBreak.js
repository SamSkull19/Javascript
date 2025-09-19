// BREAK with FOR loop

for (var i = 1; i <= 10; i++) {
    if (i === 5) {
        console.log("Stopped at", i);
        break; // exits the loop completely
    }
    console.log("FOR loop value:", i);
}
// Output: 1 2 3 4 Stopped at 5


// BREAK with WHILE loop
var j = 1;
while (j <= 10) {
    if (j === 5) {
        console.log("Stopped at", j);
        break; // exits the loop completely
    }
    console.log("WHILE loop value:", j);
    j++;
}
// Output: 1 2 3 4 Stopped at 5


// CONTINUE with FOR loop
for (var i = 1; i <= 5; i++) {
    if (i === 3) {
        console.log("Skipping", i);
        continue; // skip iteration when i = 3
    }
    console.log("FOR loop value:", i);
}
// Output: 1 2 Skipping 3 4 5


// CONTINUE with WHILE loop
var k = 1;
while (k <= 5) {
    if (k === 3) {
        console.log("Skipping", k);
        k++; // Must increment before continue, otherwise infinite loop
        continue;
    }
    console.log("WHILE loop value:", k);
    k++;
}
// Output: 1 2 Skipping 3 4 5


// BREAK in nested FOR loop
for (var a = 1; a <= 3; a++) {
    for (var b = 1; b <= 3; b++) {
        if (b === 2) break; 
        console.log("a =", a, "b =", b);
    }
}
// Output: a=1 b=1, a=2 b=1, a=3 b=1


// CONTINUE in nested FOR loop
for (var x = 1; x <= 3; x++) {
    for (var y = 1; y <= 3; y++) {
        if (y === 2) continue; 
        console.log("x =", x, "y =", y);
    }
}
// Output skips y=2 in each inner loop
