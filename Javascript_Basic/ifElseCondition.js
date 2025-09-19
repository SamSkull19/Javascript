// if-else statements
var age = 20;

if(age >= 18){
    console.log("You are eligible to vote.");  // Executes because age >= 18
} 
else{
    console.log("You are not eligible to vote.");
}


// Using && (AND) in if-else
var hasID = true;

if(age >= 18 && hasID){   // Both conditions must be true
    console.log("You can enter the club.");
} 
else{
    console.log("You cannot enter the club.");
}


// Using || (OR) in if-else
var isMember = false;

if(age >= 18 || isMember){  // At least one condition must be true
    console.log("You can access the event.");
} 
else{
    console.log("You cannot access the event.");
}


// Combined Example with multiple conditions

var username = "sifat";
var password = "12345";
var isAdmin = false;

// Check if username AND password are correct AND isAdmin
if(username === "sifat" && password === "12345" && isAdmin){
    console.log("Welcome admin!");
} 
else if(username === "sifat" && password === "12345"){
    console.log("Welcome user!");  // Executes because isAdmin = false
} 
else{
    console.log("Invalid credentials.");
}


// Example with OR (||) for alternative conditions
var day = "Sunday";

if(day === "Saturday" || day === "Sunday"){
    console.log("It's weekend!");  // Executes because day === "Sunday"
} 
else{
    console.log("It's a working day.");
}
