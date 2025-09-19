// Nested if-else example

var age = 20;
var hasID = true;

if(age >= 18){
    // Outer if: checks if age is 18 or more
    if(hasID){
        // Inner if: checks if person has ID
        console.log("You can enter the club.");
    } 
    else{
        console.log("You cannot enter. ID is required.");
    }
} 
else{
    console.log("You are not allowed. Must be 18 or older.");
}


// Another nested example: grading system with extra distinction

var marks = 92;

if(marks >= 60){
    // Passed condition
    if(marks >= 90){
        console.log("Grade: A+ with distinction");
    } 
    else if(marks >= 80){
        console.log("Grade: A");
    } 
    else if(marks >= 70){
        console.log("Grade: B");
    } 
    else{
        console.log("Grade: C");
    }
} 
else{
    console.log("Grade: F (Failed)");
}
