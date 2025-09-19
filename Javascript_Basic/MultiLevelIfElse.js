// Multi-level if-else if-else example

var marks = 85; // You can change this value to test different outputs

if (marks >= 90) {
    console.log("Grade: A+"); // Marks 90 and above
} 
else if (marks >= 80 && marks < 90) {
    console.log("Grade: A");  // Marks between 80-89
} 
else if (marks >= 70  && marks < 80) {
    console.log("Grade: B");  // Marks between 70-79
} 
else if (marks >= 60  && marks < 70) {
    console.log("Grade: C");  // Marks between 60-69
} 
else if (marks >= 50  && marks < 60) {
    console.log("Grade: D");  // Marks between 50-59
} 
else {
    console.log("Grade: F");  // Marks below 50
}
