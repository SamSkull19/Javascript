// Basic NOT
var isTrue = true;
console.log(!isTrue); // false (true → inverted to false)

var isFalse = false;
console.log(!isFalse); // true (false → inverted to true)


// Using NOT with numbers
var num = 0;
console.log(!num);   // true  (0 is falsy → NOT → true)

var num2 = 5;
console.log(!num2);  // false (non-zero is truthy → NOT → false)


// Using NOT with strings
var str = "";
console.log(!str);   // true  (empty string is falsy → NOT → true)

var str2 = "Hello";
console.log(!str2);  // false (non-empty string is truthy → NOT → false)


// Double NOT (!!) → Convert to Boolean
var value = "Some text";
console.log(!!value);  // true  (forces truthy value to boolean true)

var value2 = 0;
console.log(!!value2); // false (forces falsy value to boolean false)


// Using NOT in conditions
var isLoggedIn = false;

if(!isLoggedIn){       // same as if (isLoggedIn == false)
    console.log("Please log in."); // Executes
} 
else{
    console.log("Welcome back!");
}


// Combining NOT with logical operators
var age = 20;
var hasID = false;

if(!(age >= 18 && hasID)){  // NOT operator inverts the AND condition
    console.log("Entry denied."); // Executes because hasID = false
} 
else{
    console.log("Entry allowed.");
}

var isWeekend = true;
if(!isWeekend || age < 18){  // OR condition with NOT
    console.log("Working day or underage");
} 
else{
    console.log("Free day!"); // Executes because !isWeekend = false, age >= 18
}
